import  React  from 'react';
import  ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from "./store";
import './service/mock.js'; // 引入mockjs
import  "./assets/scss/main.scss";
import './assets/js/lib/bootstrap.bundle.js';

import  Wrap  from  './container/Wrap';

if (module.hot) {
    $(window).on("message onmessage", function(event) {
        if (typeof event.originalEvent.data === "string" && event.originalEvent.data.indexOf("webpackHotUpdate") === 0) {
            console.log("开始重新载入样式表...");
            let vass = [].slice.call(document.styleSheets);
            vass.forEach(function (sheet) {
                if ((sheet.href || "").indexOf('localhost') !== -1) {
                    sheet.ownerNode.href = sheet.href;
                }
            });
        }
    });
}

ReactDOM.render(
    <Provider store={ store }>
        <Wrap />
    </Provider>,
    document.getElementById('app')
);

