import AbstractController from "../Plasma/Abstract/AbstractController";
import AppComponent from "../component/AppComponent";
import StellaComponent from "../component/StellaComponent";

export default class StellaController extends AbstractController {

    constructor(name, isApp, core) {
        super(name, isApp, core);
    }

    index() {
        new AppComponent();
        this.clearDashboard()
        new StellaComponent();

    }

    unload() {

    }
}