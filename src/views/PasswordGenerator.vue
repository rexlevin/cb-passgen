<template>
    <div class="password-generator">
        <h1>密码生成器</h1>
        <n-form>
            <n-form-item label="生成密码数量">
                <n-input-number v-model:value="passwordCount" :min="1" />
            </n-form-item>
            <n-form-item label="密码长度范围">
                <n-input-number v-model:value="minLength" :min="6" />
                <span> - </span>
                <n-input-number v-model:value="maxLength" :min="minLength" />
            </n-form-item>
            <n-form-item label="字符集">
                <n-checkbox-group v-model:value="selectedCharsets">
                    <n-space vertical>
                        <n-space align="center">
                            <n-checkbox value="numbers" label="数字" style="width: 90px" />
                            <n-input v-model:value="chars.numbers" placeholder="23456789" style="width: 200px" />
                        </n-space>
                        <n-space align="center">
                            <n-checkbox value="lowercase" label="小写字母" style="width: 90px" />
                            <n-input v-model:value="chars.lowercase" placeholder="abdefghijmnqrty" style="width: 200px" />
                        </n-space>
                        <n-space align="center">
                            <n-checkbox value="uppercase" label="大写字母" style="width: 90px" />
                            <n-input v-model:value="chars.uppercase" placeholder="ABDEFGHJLMNQRTY" style="width: 200px" />
                        </n-space>
                        <n-space align="center">
                            <n-checkbox value="symbols" label="特殊符号" style="width: 90px" />
                            <n-input v-model:value="chars.symbols" placeholder="@#$%&" style="width: 200px" />
                        </n-space>
                    </n-space>
                </n-checkbox-group>
            </n-form-item>
            <n-form-item>
                <n-space>
                    <n-button @click="resetForm">重置</n-button>
                    <n-button type="primary" @click="generatePasswords">生成密码</n-button>
                </n-space>
            </n-form-item>
        </n-form>
        <n-divider />
        <n-card title="生成的密码">
            <n-input type="textarea" v-model:value="generatedPasswords" :rows="10" placeholder="生成的密码将显示在这里" />
        </n-card>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import {
    NForm,
    NFormItem,
    NInputNumber,
    NCheckboxGroup,
    NCheckbox,
    NSpace,
    NButton,
    NDivider,
    NCard,
    NInput,
} from 'naive-ui';

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
    padding: 20px;
}
</style>