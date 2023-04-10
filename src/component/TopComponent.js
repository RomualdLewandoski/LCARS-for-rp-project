import AbstractComponent from "../Plasma/Abstract/AbstractComponent";

export default class TopComponent extends AbstractComponent {

    constructor() {
        super();
        this.render()
        this.script()
    }

    render() {
        let template = this.getVue("includes/top.twig")
        return this.getTemplate(template, this.data)
    }

    script(){

    }
}
