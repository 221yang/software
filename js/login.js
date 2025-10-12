passwordInput.addEventListener('input', () => {
    if (passwordInput.value.trim() === '') {
        passwordError.textContent = '密码不能为空';
    } else if (passwordInput.value.length < 6) {
        passwordError.textContent = '密码至少需要 6 个字符';
    } else {
        passwordError.textContent = '';
    }
});

form.addEventListener('submit', (event) => {
    
});
