import appConfig from '../../config/base'

export function pageResize(resizeHandle) {
    let init = () => {
        console.log(window.innerHeight + "," + window.innerWidth);
        let root = document.getElementById('app');
        root.style.height = window.innerHeight+'px';
        root.style.width = window.innerWidth+'px';
        let _el = document.getElementById('appRoot');

        let pageH = window.innerHeight;
        let pageW = window.innerWidth;
        let scale = 1

        let isWider = (window.innerWidth / window.innerHeight) >= (appConfig.screen.width / appConfig.screen.height);
        console.log(isWider);
        if (isWider) {
            scale = pageH/appConfig.screen.height
        }
        else {
            scale = pageW / appConfig.screen.width

        }
        _el.style.width = appConfig.screen.width + 'px'
        _el.style.height = appConfig.screen.height + 'px'
        _el.style.transform = 'scale('+ scale + ')'
        resizeHandle(scale)

    }
    let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    window.addEventListener(resizeEvt, init, false);
    document.documentElement.addEventListener('DOMContentLoaded', init, false);
    init()
}
