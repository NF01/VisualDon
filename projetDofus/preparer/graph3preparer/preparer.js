const xlsx = require('xlsx')

const file = xlsx.readFile('Data_Dofus_XP_Par_LVL.xlsx')
const json = xlsx.utils.sheet_to_json(file.Sheets['Feuil1'])

console.log(JSON.stringify(json))