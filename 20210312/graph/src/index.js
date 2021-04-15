import {
  axisLeft,
  select,
  scaleLinear,
  pie,
  arc,
  max,
} from 'd3'

const data = [
  { nom: 'Alice', note: 5 },
  { nom: 'Bob', note: 4 },
  { nom: 'Jean', note: 6 },
  { nom: 'Jacque', note: 4 },
  { nom: 'Laurent', note: 2 },
  { nom: 'Marcel', note: 6 },
  { nom: 'Louis', note: 4 },
  { nom: 'Heude', note: 4 },
  { nom: 'Paul', note: 2 },
  { nom: 'Jannaud', note: 2 }
]

let getPieData = pie().value(d => d.note)
let pieData = getPieData(data)



const color = ({ data }) => {
  switch (data.note) {
    case 4: return 'grey'
    case 2: return 'red'
    case 5: return 'limegreen'
    case 6: return 'green'
    case 3: return 'gold'
    default: return ''
  }
}

const WIDTH = 1
const HEIGHT = 0.5
// const MARGIN = 5
// const MARGIN_LEFT = 50
// const MARGIN_BOTTOM = 50
// const BAR_WIDTH = (WIDTH - MARGIN_LEFT) / DATA.length

const svg = select('#graph')
  .append('svg')
  .attr('viewBox', `0 0 ${WIDTH} ${HEIGHT}`)

const arcCreator = arc()
  .innerRadius(0)
  .outerRadius(HEIGHT /2)


const pie2 = svg.append('g')
  .attr('transform', `translate(${HEIGHT / 2}, ${HEIGHT / 2})`)


pie2.selectAll('path')
  .data(pieData) // créé plus haut
  .enter()
  .append('path')
  .attr('d', arcCreator)
  .attr('fill', color)



// const yScale = scaleLinear()
//   .domain([0, max(DATA, d => d.population)])
//   .range([HEIGHT - MARGIN_BOTTOM, 0])


// const g = svg.append('g')
//   .attr('transform', `translate(${MARGIN_LEFT}, 0)`)

// g.selectAll('rect')
//   .data(DATA)
//   .enter()
//   .append('rect')
//   .attr('x', (d, i) => i * BAR_WIDTH)
//   .attr('width', BAR_WIDTH - MARGIN)
//   .attr('y', d => yScale(d.population))
//   .attr('height', d => HEIGHT - MARGIN_BOTTOM - yScale(d.population))
//   .attr('fill', 'steelblue')

// g.selectAll('text')
//   .data(DATA)
//   .enter()
//   .append('text')
//   .text(d => d.nom)
//   .attr('x', (d, i) => i * BAR_WIDTH + BAR_WIDTH / 2)
//   .attr('y', HEIGHT - MARGIN_BOTTOM / 2)
//   .attr('text-anchor', 'middle')

// const axisY = axisLeft().scale(yScale)
//   .tickFormat(d => `${d / 1000}k`)
//   .ticks(5)

// svg.append('g')
//   .attr('transform', `translate(${MARGIN_LEFT - 3})`)
//   .call(axisY)
