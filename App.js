import Core from './Core.js';
import Button from './Button.js';
export default class App extends Core {
    template() {
        return `
            <div component="btn1"></div>
            <div component="btn2"></div>
            <div component="btn3"></div>
        `
    }
    mount() {
        const wrapper1 = document.querySelector("[component='btn1']");
        const wrapper2 = document.querySelector("[component='btn2']");
        const wrapper3 = document.querySelector("[component='btn3']");
        new Button(wrapper1, {number: 1});
        new Button(wrapper2, {number: 2});
        new Button(wrapper3, {number: 3});
    }
}