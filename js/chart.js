'use strict';

let canvasElem = document.getElementById('chart')

/* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
*
*/

let ChartState = new AppState();
console.log(ChartState)

let localStorageProducts = ChartState.loadItems();

// let parseProducts = JSON.parse(localStorageProducts);

let oddProducts = [];

let timesViewed = [];

let timesClicked = [];

function renderChart() {
for (let i = 0; i < localStorageProducts.length; i++) {
    oddProducts.push(localStorageProducts[i].name);
}

for (let i = 0; i < localStorageProducts.length; i++) {
    timesViewed.push(localStorageProducts[i].timesShown);
}

for (let i = 0; i < localStorageProducts.length; i++) {
    timesClicked.push(localStorageProducts[i].timesClicked);
}

const ctx = document.getElementById('chart');

let config = {
    type: 'bar',
    data: {
      labels: oddProducts,
      datasets: [
        {
          label: '# of Votes',
          data: timesClicked,
          borderColor: [
            'rgb(35, 25, 66)',
            'rgb(35, 25, 66)',
            'rgb(35, 25, 66)',
            'rgb(35, 25, 66)',
            'rgb(35, 25, 66)',
            'rgb(35, 25, 66)',
            'rgb(35, 25, 66)'
          ],
          borderWidth: 1,
          backgroundColor: [
            'rgb(190, 149, 196)',
            'rgb(190, 149, 196)',
            'rgb(190, 149, 196)',
            'rgb(190, 149, 196)',
            'rgb(190, 149, 196)',
            'rgb(190, 149, 196)',
            'rgb(190, 149, 196)'
          ],
        },
        {
          label: '# of Views',
          data: timesViewed,
          borderColor: [
            'rgb(35, 25, 66)',
            'rgb(35, 25, 66)',
            'rgb(35, 25, 66)',
            'rgb(35, 25, 66)',
            'rgb(35, 25, 66)',
            'rgb(35, 25, 66)',
            'rgb(35, 25, 66)'
          ],
          borderWidth: 1,
          backgroundColor: [
            'rgb(25, 42, 81)',
            'rgb(25, 42, 81)',
            'rgb(25, 42, 81)',
            'rgb(25, 42, 81)',
            'rgb(25, 42, 81)',
            'rgb(25, 42, 81)',
            'rgb(25, 42, 81)'
          ],
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };
  // eslint-disable-next-line no-undef
  new Chart(ctx, config);
}

renderChart();
