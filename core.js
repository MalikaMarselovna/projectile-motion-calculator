function calculate() {
    const angleInput = document.getElementById('angle');
    const distanceInput = document.getElementById('distance');
  
    const rad = Math.sin(angleInput.value * (Math.PI / 180));
    const g = 9.8;
  
    const v0 = (distanceInput.value * Math.sqrt(g)) / (2 * rad);
    const t = (2 * v0 * rad) / g;
    const h = (v0 ** 2 * rad ** 2) / (2 * g);
  
    document.getElementById('v0Result').textContent = v0.toFixed(2);
    document.getElementById('hResult').textContent = h.toFixed(2);
    document.getElementById('tResult').textContent = t.toFixed(2);
  
    // Plot the graph using Plotly
    plotGraph(v0, rad, g, t);
  }
  
  function plotGraph(v0, rad, g, totalTime) {
    const numPoints = 1000;
    const timeIncrement = totalTime / numPoints;
  
    const xValues = [];
    const yValues = [];
  
    for (let i = 0; i <= numPoints; i++) {
      const time = i * timeIncrement;
      const l = v0 * rad * time;
      const h = (v0 * rad * time) - (0.5 * g * time ** 2);
  
      xValues.push(l);
      yValues.push(h);
    }
  
    const trace = {
      x: xValues,
      y: yValues,
      mode: 'lines',
      type: 'scatter'
    };
  
    const layout = {
      title: 'Projectile Motion',
      xaxis: {
        title: 'Distance (meters)'
      },
      yaxis: {
        title: 'Height (meters)'
      }
    };
  
    Plotly.newPlot('graph', [trace], layout);
  }
  
  