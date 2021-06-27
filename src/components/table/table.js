import './style.css'
import * as d3 from "d3";


const data = [
    {name: 'monday', value: 90},
    {name: 'Tuesday', value: 61},
    {name: 'Wednesday', value: 81},
    {name: 'Thursday', value: 76},
    {name: 'Friday', value: 42},
    {name: 'Saturday', value: 57},
    {name: 'Sunday', value: 34},
]

const color = 'steelblue';
const height = 500;
const width = 500;


const margin = ({top: 30, right: 0, bottom: 30, left: 40})

const x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .padding(0.1)

const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)]).nice()
    .range([height - margin.bottom, margin.top])

const xAxis = g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).tickFormat(i => data[i].name).tickSizeOuter(0))

const yAxis = g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y).ticks(null, data.format))
    .call(g => g.select(".domain").remove())
    .call(g => g.append("text")
    .attr("x", -margin.left)
    .attr("y", 10)
    .attr("fill", "currentColor")
    .attr("text-anchor", "start")
    .text(data.y))




const mousemove = function(d) {
    console.log(d.value) }

function table() {
    const element = document.createElement('div');
    element.classList.add('table');






    
    const svg = d3.select(element).append("svg")
    .attr("viewBox", [0, 0, width, height]);

    svg.append("g")
        .attr("fill", color)
    .selectAll("rect")
    .data(data)
    .join("rect")
        .attr("x", (d, i) => x(i))
        .attr("y", d => y(d.value))
        .attr("height", d => y(0) - y(d.value))
        .attr("width", x.bandwidth())
        .on('mouseover', mousemove);

    svg.append("g").call(xAxis);
    svg.append("g").call(yAxis);
    
    
    return element;
  }

export default table;