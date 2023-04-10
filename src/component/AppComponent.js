import AbstractComponent from "../Plasma/Abstract/AbstractComponent";
import TopComponent from "./TopComponent";

export default class AppComponent extends AbstractComponent {

    constructor() {
        super();

        this.setData({
            top: new TopComponent().render(),/*
            leftbar: new LeftBarComponent().render(),
            navbar: new NavBarComponent().render()*/
        })
        this.render()
        this.script()
    }


    render() {
        let template = this.getVue('app.twig')
        this.genTemplate('app', template, this.data)
    }

    script() {
        return undefined;
    }

}