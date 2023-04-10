import AbstractComponent from "../Plasma/Abstract/AbstractComponent";
import Ajax from "../Plasma/Utils/Ajax";

export default class TopComponent extends AbstractComponent {

    constructor() {
        super();
        this.render()
    }

    render() {
        let template = this.getVue("includes/top.twig")
        this.data = {
            stardate : this.getCurrentStardate()
        }
        return this.getTemplate(template, this.data)
    }

    async script() {

    }

    getCurrentStardate() {
        const stardate = 100869.83; // date stellaire de référence
        const secondsPerStardate = 34367.5; // nombre de secondes en une stardate
        const referenceDate = Date.parse('April 10, 2023 05:05'); // date de référence correspondant à la date stellaire de référence
        const now = new Date();
        const secondsSinceReferenceDate = (now - referenceDate) / 1000;
        const currentStardate = stardate + (secondsSinceReferenceDate / secondsPerStardate) + 0.16;
        return currentStardate.toFixed(2);
    }
}
