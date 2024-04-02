document.getElementById('nightMode').addEventListener('click', () => {
    changeMode('night-mode');
});

document.getElementById('dayMode').addEventListener('click', () => {
    changeMode('day-mode');
});

document.getElementById('normalMode').addEventListener('click', () => {
    changeMode('normal-mode');
});

function changeMode(mode) {
    const body = document.body;
    // 移除现有模式类
    body.classList.remove('night-mode', 'day-mode', 'normal-mode');
    // 添加新模式类
    body.classList.add(mode);
}
