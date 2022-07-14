module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['plugin:vue/vue3-recommended', 'eslint:recommended', '@vue/typescript/recommended', '@vue/prettier'],
    parserOptions: {
        ecmaVersion: 2019,
    },
    plugins: [],
    rules: {
        'vue/multi-word-component-names': 0,
    },
    globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',
    },
};
