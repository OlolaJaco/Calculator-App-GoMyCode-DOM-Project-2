document.addEventListener('DOMContentLoaded', (event) => {
    
    const colorBox = document.querySelector('.color-box');
    const changeColorBtn = document.querySelector('#change-color-btn');

    function getRandomColor() {
        let color = '0123456789ABCDEF';
        let hex = '#';
        for (i = 0; i < 6; i++) {
           let randomColor = hex += color[Math.floor(Math.random() * 16)];
           colorBox.style.backgroundColor = randomColor;
        }
    }

    changeColorBtn.addEventListener('click', getRandomColor)
})