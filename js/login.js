// 选择元素
const form = document.querySelector('.login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// 创建错误提示元素
const usernameError = document.createElement('div');
usernameError.style.color = 'red';
usernameInput.insertAdjacentElement('afterend', usernameError);

const passwordError = document.createElement('div');
passwordError.style.color = 'red';
passwordInput.insertAdjacentElement('afterend', passwordError);

// 即时校验用户名
usernameInput.addEventListener('input', () => {
    if (usernameInput.value.trim() === '') {
        usernameError.textContent = '用户名不能为空';
    } else if (usernameInput.value.length < 3) {
        usernameError.textContent = '用户名至少需要 3 个字符';
    } else {
        usernameError.textContent = '';
    }
});

// 即时校验密码
passwordInput.addEventListener('input', () => {
    if (passwordInput.value.trim() === '') {
        passwordError.textContent = '密码不能为空';
    } else if (passwordInput.value.length < 6) {
        passwordError.textContent = '密码至少需要 6 个字符';
    } else {
        passwordError.textContent = '';
    }
});

// 提交表单
form.addEventListener('submit', (event) => {
    event.preventDefault(); // 阻止页面刷新

    let valid = true;

    // 再次验证用户名
    if (usernameInput.value.trim() === '') {
        usernameError.textContent = '用户名不能为空';
        valid = false;
    }

    // 再次验证密码
    if (passwordInput.value.trim() === '') {
        passwordError.textContent = '密码不能为空';
        valid = false;
    }

    // 如果通过验证
    if (valid && usernameError.textContent === '' && passwordError.textContent === '') {
        const formData = {
            username: usernameInput.value.trim(),
            password: passwordInput.value.trim(),
            remember: document.getElementById('remember').checked
        };

        // 转为 JSON 字符串
        const jsonStr = JSON.stringify(formData, null, 4);

        // 删除旧结果
        const oldResult = document.getElementById('result');
        if (oldResult) oldResult.remove();

        // 新建结果区域
        const resultDiv = document.createElement('pre');
        resultDiv.id = 'result';
        resultDiv.textContent = jsonStr;
        resultDiv.style.background = '#f4f4f4';
        resultDiv.style.padding = '10px';
        resultDiv.style.border = '1px solid #ccc';
        resultDiv.style.borderRadius = '5px';
        resultDiv.style.marginTop = '20px';

        form.insertAdjacentElement('afterend', resultDiv);
    }
});
