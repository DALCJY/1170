// 获取表单元素的引用仅一次
const formElements = {
    name: document.getElementById('name'),
    email: document.getElementById('email'),
    phone: document.getElementById('phone'),
    age: document.getElementById('age'),
    feedback: document.getElementById('feedback'),
    messages: document.getElementById('form-messages')
};

document.getElementById('surveyForm').addEventListener('submit', event => {
    event.preventDefault(); // 防止表单默认提交行为

    const message = validateForm();
    if (message) {
        displayFormMessage(message, false);
    } else {
        displayFormMessage('Form submitted successfully!', true);
        console.log('Form is valid! Submitting...');
    }
});

function validateForm() {
    const { name, email, phone, age, feedback } = formElements;
    
    if (!name.value.trim()) return 'Name is required.';
    if (!email.value.endsWith('@dal.ca')) return 'Email must end with @dal.ca';
    if (!phone.value.match(/^\d{10}$/)) return 'Phone number must be 10 digits.';
    if (!age.value) return 'Please select your age range.';
    if (!feedback.value.trim()) return 'Feedback is required.';

    return '';
}

function displayFormMessage(message, isSuccess) {
    const { messages } = formElements;

    messages.textContent = message;
    messages.className = isSuccess ? 'alert alert-success' : 'alert';

    if (isSuccess) {
        setTimeout(() => messages.textContent = '', 4000);
    }
}





document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const toggleButton = document.getElementById('toggleMode');

    // 函数用于切换主题模式
    const toggleMode = () => {
        body.classList.toggle('night-mode');
    };

    // 自动根据时间切换模式
    const autoToggleMode = () => {
        const hour = new Date().getHours();
        if (hour >= 21 || hour < 6) {
            body.classList.add('night-mode');
        } else if (hour >= 6 && hour < 21) {
            body.classList.remove('night-mode');
        }
    };

    // 监听按钮点击事件以手动切换模式
    toggleButton.addEventListener('click', toggleMode);

    // 页面加载时自动切换模式
    autoToggleMode();

    // 每分钟检查一次时间，以自动切换模式
    setInterval(autoToggleMode, 60000);
});

