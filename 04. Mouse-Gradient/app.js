function attachGradientEvents() {

    let gradientBoxElement = document.querySelector('#gradient-box');
    let resultElement = document.querySelector('#result');

    gradientBoxElement.addEventListener('mousemove', (e) => {

        let percent = ((e.offsetX) / (e.target.clientWidth)) * 100;
        resultElement.textContent = `${Math.floor(percent)}%`;
        console.log(e);
    });
    gradientBoxElement.addEventListener('mouseleave', (clear) => {

        resultElement.textContent = '';
        console.log(clear);
    });

}