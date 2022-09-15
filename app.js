const buttons = document.querySelectorAll('button');
const iframeDiv = document.querySelector('.iframe-container > iframe');


let shown = false;
buttons[3].addEventListener('click', () => {
    shown = !shown;
    if (!shown) return;
    iframeDiv.style.transform = 'scale(0.90)';
});

window.onmessage = function(e) {
    if (e.data === 'close') {
        shown = !shown;
        if (shown) return;
        iframeDiv.style.transform = 'scale(0)';
    } else if (e.data === 'start') {
        fetch("config.json").then((res) => res.json()).then((json) => {
            iframeDiv.contentWindow.loadJSON(json);
        });
    }
};