import JsonStorage from "./lib/JsonStorage";
import intro from "templates/intro.hbs";
import fig from "templates/fig.hbs";
import el from "templates/el.hbs";
const dataGraph1 = require("./data/dataGraph1.json")
const dataGraph2 = require("./data/dataGraph2.json")
const dataGraph3 = require("./data/dataGraph3.json")



let figurine = new JsonStorage({ name: "figurine", eventName: "figurine" });


$("#second").hide();


$(".figure").on("click", evt => {

    let clicked = $(evt.currentTarget)
    let id = clicked[0].innerText
    let id2 = clicked[0].id
    figurine.setItem("figchoose", id);
    figurine.setItem("figchooseid", id2);
    window.location = "./data.html";
})


let id = figurine.getItem("figchoose")
let id2 = figurine.getItem("figchooseid")
let html = intro({ id });
let html2 = fig({ id2 });
document.getElementById("after").insertAdjacentHTML('afterend', html);
document.getElementById("arrow").insertAdjacentHTML('afterend', html2);

// choice of the elements (terre, eau, feu, air)
$("#terre").on("click", () => {
    $("html").addClass("brown")
    $("html").removeClass("blue")
    $("html").removeClass("blueair")
    $("html").removeClass("red")
    figurine.setItem("element", "terre");
    $("#second").show();
    window.scrollBy(0, 100);
    $("#ell").remove();
    let ell = figurine.getItem("element")
    let html3 = el({ ell });
    document.getElementById("arrow2").insertAdjacentHTML('afterend', html3);

})

$("#air").on("click", () => {
    $("html").addClass("blueair")
    $("html").removeClass("blue")
    $("html").removeClass("brown")
    $("html").removeClass("red")
    figurine.setItem("element", "air");
    $("#second").show();
    window.scrollBy(0, 100);
    $("#ell").remove();
    let ell = figurine.getItem("element")
    let html3 = el({ ell });
    document.getElementById("arrow2").insertAdjacentHTML('afterend', html3);

})

$("#eau").on("click", () => {
    $("html").addClass("blue")
    $("html").removeClass("brown")
    $("html").removeClass("blueair")
    $("html").removeClass("red")
    figurine.setItem("element", "eau");
    $("#second").show();
    window.scrollBy(0, 100);
    $("#ell").remove();
    let ell = figurine.getItem("element")
    let html3 = el({ ell });
    document.getElementById("arrow2").insertAdjacentHTML('afterend', html3);
})

$("#feu").on("click", () => {
    $("html").addClass("red")
    $("html").removeClass("brown")
    $("html").removeClass("blueair")
    $("html").removeClass("blue")
    figurine.setItem("element", "feu");
    $("#second").show();
    window.scrollBy(0, 100);
    $("#ell").remove();
    let ell = figurine.getItem("element")
    let html3 = el({ ell });
    document.getElementById("arrow2").insertAdjacentHTML('afterend', html3);
})



//Graph1


bb.generate({
    bindto: "#viz1",
    data: {
        type: "bar",
        json: {
            "Terre": dataGraph1.map(({ terre }) => terre),
            "Air": dataGraph1.map(({ air }) => air),
            "Eau": dataGraph1.map(({ eau }) => eau),
            "Feu": dataGraph1.map(({ feu }) => feu)
        }
    },
    axis: {
        x: {
            type: 'category',
            categories: dataGraph1.map(({ type }) => type),
        },
        y: {
            label: {
                text: "points d'élément",
                position: "outer-middle"
            }
        },
    },
    color: {
        pattern: [
            'rgb(82, 55, 30)',
            '#2b6f2d',
            '#398a89',
            '#d13800'

        ],
    },

    bar: {
        radius: {
            ratio: 0.1
        }
    },


})


//Graph1bis
bb.generate({
    bindto: "#viz1bis",
    data: {
        columns: [
            ["Terre", 532],
            ["Air", 582],
            ["Eau", 550],
            ["Feu", 560]
        ],
        type: "donut",
    },
    color: {
        pattern: [
            'rgb(82, 55, 30)',
            '#2b6f2d',
            '#398a89',
            '#d13800'

        ],
    },
    donut: {
        title: "Distribution \ndes équipements \npar éléments"
    },

})




//Graph2

bb.generate({
    bindto: "#viz2",
    data: {
        type: "line",
        json: {
            "Nombre de nouveau équipement par niveau": dataGraph2.map(({ niveau }) => niveau),
        }
    },
    padding: {
        right: 100,
        left: 100
    },
    axis: {
        x: {
            label: {
                text: "Niveau",
                position: "outer-center",
            },
            tick: {
                values: [
                    0,
                    20,
                    40,
                    60,
                    80,
                    100,
                    120,
                    140,
                    160,
                    180,
                    200

                ]
            }
        },
        y: {
            label: {
                text: "Nombre de nouveau équipement",
                position: "inner-top"
            }
        },

    },
    color: {
        pattern: [
            "black"

        ],
    },

})


//Graph3
bb.generate({

    bindto: "#viz3",

    data: {

        type: "area-spline",

        json: {

            "xp": dataGraph3.map(({ xp }) => xp),
        }

    },
    padding: {
        left: 70,
    },

    axis: {

        x: {

            label: {
                text: "Niveau",
                position: "outer-center",
            },

            type: 'category',

            categories: dataGraph3.map(({ niveau }) => niveau),
            tick: {

                values: [
                    3,
                    8,
                    13,
                    18,
                    23,

                    28,
                    33,

                    38,
                    43,
                    48,
                    53,

                    58,
                    63,
                    68,
                    73,

                    78,
                    83,
                    88,
                    93,

                    98,

                    118,

                    138,

                    158,

                    178,





                ]

            }
        },

        y: {

            label: {
                text: "Nombre d'xp",
                position: "inner-middle"
            },


            tick: {
                culling: {
                    max: 5
                }
            }
        },

    },

    point: {
        show: false
    },

    color: {

        pattern: [

            'black',
        ],

    },

    bar: {

        radius: {

            ratio: 0.1

        }

    },

    zoom: {
        enabled: true, // for ESM specify as: zoom()
        type: "drag"
    },




})

