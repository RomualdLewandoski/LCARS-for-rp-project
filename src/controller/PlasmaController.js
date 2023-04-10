import AbstractController from "../Plasma/Abstract/AbstractController";
import AppComponent from "../component/AppComponent";

export default class PlasmaController extends AbstractController {

    constructor(name, isApp, core) {
        super(name, isApp, core);
    }

    index() {
        new AppComponent();

    }

    unload() {

    }
}