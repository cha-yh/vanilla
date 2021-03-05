import Core from './Core.js';

export default class Button extends Core {
    template() {
        const {number} = this.$props;
        console.log('this.$props', this.$props);
        return `
            <button class="add-button">button${number}</button>
        `
    }

    setEvent() {
        const addButton = document.querySelector(".add-button");
        addButton.addEventListener('click', e => {
            console.log('click button')
        })
    }
}