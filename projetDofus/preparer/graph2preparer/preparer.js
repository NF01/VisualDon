//   le nombre d'équipement par niveau


const dataamulette = require("./amulette.json")
const datacienture = require("./ceinture.json")
const databottes = require("./bottes.json")
const datacapes = require("./capes.json")
const datacoiffes = require("./coiffes.json")
const dataanneaux = require("./anneaux.json")



const compter = (data, level) =>
    data.map(d => ({
        level: d.level,
    }))
        .filter(e => e.level === level)


const niveau = (i,test,test2,test3,test4,test5,test6) => ({
   "niveau": (test+test2+test3+test4+test5+test6),
})


for (let i = 1; i < 201; i++) {
    level1 = i;
    level = level1.toString()
    test=Object.keys(compter(dataamulette, level)).length
    test2=Object.keys(compter(datacienture, level)).length
    test3=Object.keys(compter(databottes, level)).length
    test4=Object.keys(compter(datacapes, level)).length
    test5=Object.keys(compter(datacoiffes, level)).length
    test6=Object.keys(compter(dataanneaux, level)).length
    console.log(JSON.stringify(niveau(i,test,test2,test3,test4,test5,test6))) 
    console.log(",") 
}






