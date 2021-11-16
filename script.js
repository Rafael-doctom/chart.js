var ctx = document.getElementsByClassName("line-chart");


var chartGraph = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets: [
            {
                label: 'Gás de cozinha - 2020',
                data: [5, 1, 19, 32, 25, 76],
                backgroundColor: 'blue',
                borderColor: 'blue',
                borderWidth: 3,
            },
            {
                label: 'Gás de cozinha - 2021',
                data: [3, 39,5, 15, 8, 15],
                backgroundColor: 'red',
                borderColor: 'red',
                borderWidth: 5,
            }
        ],

    },
    options: {
        plugins: {
            title: {
                display: true,
                // text: 'Custom Chart Title',
                padding: {
                    top: 10,
                    bottom: 30
                }
            },
        }
    }
 
})

console.log("ij")