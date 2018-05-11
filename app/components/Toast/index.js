import './index.scss';

export default function (text, timeout, options) {
    var timeout = timeout || 3000;
    let toast = document.createElement('DIV');
    toast.classList.add('toast-it');
    let content = document
        .createTextNode(text);
    toast.appendChild(content);
    toast.style.animationDuration = timeout / 1000 + 's';

    for (let prop in options) {
        toast.style[prop] = options[prop];
    }

    document.querySelector('.container_wrap').appendChild(toast);
    setTimeout(function () {
        document.querySelector('.container_wrap').removeChild(toast);
    }, timeout);
};
