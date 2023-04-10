import AbstractComponent from "../Plasma/Abstract/AbstractComponent";


export default class StellaComponent extends AbstractComponent {


    constructor() {
        super();
        this.setData({})
        this.render()
        this.script()
    }

    render() {
        let template = this.getVue("stella/stella.twig")
        this.genTemplate("panelPage", template, this.data)
    }

    script() {
        $('#translateToStella').click((event) => {
            event.preventDefault();
            let console = $('#translateToStellaConsole');
            console.empty();
            /*if (typeWriter("> Initializing universal translator . . . . . . . . ", "translateToStellaConsole" )){
                console.log("done");
            }*/
            console.prepend("<p id='next-00'></p>")
            new Typed('#next-00', {
                strings: ["> Initializing universal translator . . . . . . . . "],
                typeSpeed: 50,
                showCursor: false,
                onStringTyped: function () {
                    console.prepend("<p id='next-01'></p>")
                    new Typed('#next-01', {
                        strings: ["> Universal translator Initialized "],
                        typeSpeed: 50,
                        showCursor: false,
                        onStringTyped: function () {
                            console.prepend("<p id='next-02'></p>")
                            new Typed('#next-02', {
                                strings: ["> Loading S.T.P [Stella Translator Project] Please wait ................................................ "],
                                typeSpeed: 50,
                                showCursor: false,
                                onStringTyped: function () {
                                    console.prepend("<p id='next-03'></p>")
                                    new Typed('#next-03', {
                                        strings: ["> S.T.P Loaded, starting translation process "],
                                        typeSpeed: 50,
                                        showCursor: false,
                                        onStringTyped: function () {
                                            console.prepend("<p id='next-04'></p>")
                                            let converted = convert($('#encodeToStella').val())
                                            let outputText = "> Output generated :  " + converted
                                            new Typed('#next-04', {
                                                strings: [outputText],
                                                typeSpeed: 50,
                                                showCursor: false,

                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        })

        $('#translateFromStella').click((event) => {
            event.preventDefault()
            let codes = $('#decodeFromStella').val().split(" ")
            let console = $('#translateFromStellaConsole');
            console.empty();
            console.prepend("<p id='decode-00'></p>")
            new Typed('#decode-00', {
                strings: ["> Loading S.T.P [Stella Translation Project, please wait ................ "],
                typeSpeed: 50,
                showCursor: false,
                onStringTyped: function () {
                    console.prepend("<p id='decode-01'></p>")
                    let finalText = ""
                    let x
                    for (x in codes) {
                        let currentCode = codes[x]
                        let array = decode(currentCode)

                        var dictionary = new Typo("en_US");
                        let y
                        let couldBe = []
                        for (y in array) {
                            let word = array[y]
                            if (dictionary.check(word)) {
                                couldBe.push(word)
                            }
                        }
                        if (couldBe.length == 0){
                            finalText+= "["+array.toString()+"] "
                        }else if (couldBe.length == 1){
                            finalText+= couldBe[0]+" "
                        }else{
                            finalText+="["+couldBe.toString()+"] "
                        }
                    }
                    let outputText = "> Translation generated :  " + finalText
                    new Typed('#decode-01', {
                        strings: [outputText],
                        typeSpeed: 50,
                        showCursor: false,

                    });
                }
            });

        })

        function convert(inputStr) {
            let dictionary = "abcdefghijklmnopqrstuvwxyz"
            let explode = inputStr.toLowerCase().split("")
            let x
            let value = ""
            for (x in explode) {
                let letter = explode[x]
                let y;
                let found = false;
                for (y in dictionary.split("")) {
                    let symbole = dictionary.split("")[y]
                    if (letter == symbole) {
                        let symboleOffset = parseInt(y) + 1
                        value = value + "" + symboleOffset
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    value = value + " "
                }
            }
            return value
        }

        function decode(string, prefix) {
            var code = "abcdefghijklmnopqrstuvwxyz", output = [];
            if (string.length === 0)
                output.push(prefix);
            else
                for (var i = 1; i <= Math.min(2, string.length); i++) {
                    var letter = code[string.slice(0, i) - 1];
                    if (letter) {
                        var nextPrefix = (prefix || "") + letter;
                        output = output.concat(decode(string.slice(i), nextPrefix));
                    }
                }
            return output;
        }


    }


}