import AbstractComponent from "../Plasma/Abstract/AbstractComponent";

export default class WelcomeComponent extends AbstractComponent {


    constructor() {
        super();
        this.setData({})
        this.render()
        this.script()
    }

    render() {
        let template = this.getVue("welcome/welcome.twig")
        this.genTemplate("panelPage", template, this.data)
    }

    script() {
    }
}