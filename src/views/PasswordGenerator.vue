<template>
    <div class="password-generator">
        <form class="password-form">
            <div class="form-row">
                <div class="form-group">
                    <label>生成密码数量</label>
                    <input type="number" v-model="passwordCount" min="1" class="form-input" tabindex="-1" />
                </div>
                <div class="form-group">
                    <label>密码长度范围</label>
                    <div class="range-inputs">
                        <input type="number" v-model="minLength" min="6" class="form-input" tabindex="-1" />
                        <span> - </span>
                        <input type="number" v-model="maxLength" :min="minLength" class="form-input" tabindex="-1" />
                    </div>
                </div>
            </div>
            <div class="charset-section">
                <label class="charset-label">字符集</label>
                <div class="charset-options">
                    <div class="charset-option">
                        <input type="checkbox" v-model="selectedCharsets" value="numbers" id="numbers" tabindex="-1" />
                        <label for="numbers">数字</label>
                        <input type="text" v-model="chars.numbers" placeholder="23456789" class="charset-input" tabindex="-1" />
                    </div>
                    <div class="charset-option">
                        <input type="checkbox" v-model="selectedCharsets" value="lowercase" id="lowercase" tabindex="-1" />
                        <label for="lowercase">小写字母</label>
                        <input type="text" v-model="chars.lowercase" placeholder="abdefghijmnqrty" class="charset-input" tabindex="-1" />
                    </div>
                    <div class="charset-option">
                        <input type="checkbox" v-model="selectedCharsets" value="uppercase" id="uppercase" tabindex="-1" />
                        <label for="uppercase">大写字母</label>
                        <input type="text" v-model="chars.uppercase" placeholder="ABDEFGHJLMNQRTY" class="charset-input" tabindex="-1" />
                    </div>
                    <div class="charset-option">
                        <input type="checkbox" v-model="selectedCharsets" value="symbols" id="symbols" tabindex="-1" />
                        <label for="symbols">特殊符号</label>
                        <input type="text" v-model="chars.symbols" placeholder="@#$%&" class="charset-input" tabindex="-1" />
                    </div>
                </div>
            </div>
            <div class="form-actions">
                <button type="button" @click="resetForm" class="btn btn-reset" tabindex="-1">重置</button>
                <button type="button" @click="generatePasswords" class="btn btn-primary" tabindex="-1">生成密码</button>
            </div>
        </form>
        <div class="password-output">
            <label>生成的密码</label>
            <textarea v-model="generatedPasswords" rows="7" placeholder="生成的密码将显示在这里" class="output-textarea" tabindex="-1"></textarea>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const passwordCount = ref(5);
const chars = reactive({
    numbers: '23456789',
    lowercase: 'abdefghijmnqrty',
    uppercase: 'ABDEFGHJLMNQRTY',
    symbols: '@#$%&',
});
const minLength = ref(6);
const maxLength = ref(12);
const selectedCharsets = ref(['numbers', 'lowercase', 'uppercase', 'symbols']);
const generatedPasswords = ref('');

const resetForm = () => {
    passwordCount.value = 5;
    minLength.value = 6;
    maxLength.value = 12;
    selectedCharsets.value = ['numbers', 'lowercase', 'uppercase', 'symbols'];
    generatedPasswords.value = '';
};

const generatePasswords = () => {
    const chars = {
        numbers: '23456789',
        lowercase: 'abdefghijmnqrty',
        uppercase: 'ABDEFGHJLMNQRTY',
        symbols: '@#$%&',
    };

    let selectedChars = '';
    selectedCharsets.value.forEach((charset) => {
        selectedChars += chars[charset];
    });

    if (!selectedChars) {
        generatedPasswords.value = '请至少选择一个字符集';
        return;
    }

    let passwords = [];
    for (let i = 0; i < passwordCount.value; i++) {
        const length = Math.floor(Math.random() * (maxLength.value - minLength.value + 1)) + minLength.value;
        let password = '';
        for (let j = 0; j < length; j++) {
            password += selectedChars.charAt(Math.floor(Math.random() * selectedChars.length));
        }
        passwords.push(password);
    }

    generatedPasswords.value = passwords.join('\n');
};
</script>

<style scoped>
.password-generator {
    max-width: 600px;
    margin: 0 auto;
    padding: 0 10px;
}

.password-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.form-row {
    display: block;
}

.form-group {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 5px;
}

.form-group:first-child label {
    white-space: nowrap;
}

.form-input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    font-size: 16px;
}

.range-inputs {
    display: flex;
    align-items: center;
    gap: 5px;
}

.charset-section {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.charset-label {
    font-weight: bold;
    margin-bottom: 4px;
}

.charset-options {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.charset-option {
    display: flex;
    align-items: center;
    gap: 8px;
}

.charset-input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 200px;
    font-size: 16px;
}

.form-actions {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
}

.btn {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

.btn-reset {
    background-color: #909399;
    color: white;
}

.btn-primary {
    background-color: #007bff;
    color: white;
}

.password-output {
    margin-top: 20px;
}

.output-textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 20px;
    line-height: 1.2;
}
</style>