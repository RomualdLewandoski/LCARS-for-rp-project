import AbstractController from "../Plasma/Abstract/AbstractController";
import AppComponent from "../component/AppComponent";
import WelcomeComponent from "../component/WelcomeComponent";

export default class PlasmaController extends AbstractController {

    constructor(name, isApp, core) {
        super(name, isApp, core);
    }

    index() {
        new AppComponent();
        this.clearDashboard()
        new WelcomeComponent();

    }

    unload() {

    }
}