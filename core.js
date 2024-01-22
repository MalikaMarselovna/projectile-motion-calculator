function calculateFreeFall(height, initialVelocity, gravity) {
  // Расчет времени свободного падения
  const timeOfFlight = Math.sqrt(2 * height / gravity);

  // Расчет траектории падения
  const timePoints = Array.from({ length: 100 }, (_, i) => i * (timeOfFlight / 100));
  const distancePoints = timePoints.map(t => initialVelocity * t);
  const heightPoints = timePoints.map(t => height - 0.5 * gravity * t ** 2);

  // Вывод графика
  const trace = {
    x: distancePoints,
    y: heightPoints,
    type: 'scatter',
    mode: 'lines+markers',
    hoverinfo: 'y+x',
  };

  Plotly.newPlot('fallGraph', [trace], {
    xaxis: { title: 'Аралык (м)' },
    yaxis: { title: 'Бийиктик (м)' },
  });

  return timeOfFlight;
}

function calculateAndPlot() {
  const initialHeight = parseFloat(document.getElementById('initialHeight').value);
  const initialVelocity = parseFloat(document.getElementById('initialVelocity').value);
  const gravity = 9.81;

  const fallTime = calculateFreeFall(initialHeight, initialVelocity, gravity);
  console.log(`Время свободного падения: ${fallTime.toFixed(2)} сек`);
}

