export default class Core {
    $target = null;
    $state = {};
    $props = {};
    constructor($target, $props) {
        this.$target = $target;
        this.$props = $props;
        this.render();
    }

    setState(newState) {
        this.$state = {
            ...this.$state,
            ...newState
        }
        this.render();
    }

    render() {
        this.$target.innerHTML = this.template();
        this.mount();
        this.setEvent();
    }

    mount() {}

    template() {
        return ``;
    }

    setEvent() {}
}