const d3 = require('d3');

const svg = d3.select('body')
    .append('svg')
    .attr('width', 500)
    .attr('height', 500);

const alerts = [];

io.on('alert', (data) => {
    alerts.push(data);
    updateVisualization();
});

function updateVisualization() {
    // Implement visualization logic here
    // ...
    svg.selectAll('circle')
        .data(alerts)
        .enter()
        .append('circle')
        .attr('cx', (d) => d.location.longitude)
        .attr('cy', (d) => d.location.latitude)
        .attr('r', 5);
}