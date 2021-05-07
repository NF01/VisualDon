//les équiement par élément 

const dataamulette = require("./amulette.json")
const datacienture = require("./ceinture.json")
const databottes = require("./bottes.json")
const datacapes = require("./capes.json")
const datacoiffes = require("./coiffes.json")
const dataanneaux = require("./anneaux.json")


const compter = (data, search) =>
  data.map(d => ({
    id: d.id,
    stats: d.stats,
  }))
    .filter(e => e.stats.find(r => r.includes(search)))
    .length



const statParObj = (data, type) => ({
  "type": type,
  "air": compter(data, "Agilit"),
  "feu": compter(data, "Intelligence"),
  "terre": compter(data, "Force"),
  "eau": compter(data, "Chance")
})



console.log(JSON.stringify([
  statParObj(dataamulette, "amulette"),
  statParObj(datacienture, "ceinture"),
  statParObj(databottes, "bottes"),
  statParObj(datacapes, "capes"),
  statParObj(datacoiffes, "coiffes"),
  statParObj(dataanneaux, "anneaux")
]))



