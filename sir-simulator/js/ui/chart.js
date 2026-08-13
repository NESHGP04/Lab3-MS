let chart = null;

export function drawChart(simulation, config) {

    const ctx = document
        .getElementById("sirChart")
        .getContext("2d");

    const data = {

        labels: simulation.time,

        datasets: [

            {
                label: "Susceptibles",

                data: simulation.susceptible,

                borderColor: "#3b82f6",

                borderWidth: 2,

                pointRadius: 0
            },

            {
                label: "Infectados",

                data: simulation.infected,

                borderColor: "#ef4444",

                borderWidth: 2,

                pointRadius: 0
            },

            {
                label: "Recuperados",

                data: simulation.recovered,

                borderColor: "#22c55e",

                borderWidth: 2,

                pointRadius: 0
            },

            {
                label: "Capacidad hospitalaria (10%)",

                data: simulation.time.map(
                    () => config.population * config.hospitalCapacity
                ),

                borderColor: "#6b7280",

                borderWidth: 2,

                borderDash: [8, 6],

                pointRadius: 0,

                fill: false
            }

        ]

    };

    if (chart) {

        chart.data.labels = simulation.time;

        chart.data.datasets[0].data =
            simulation.susceptible;

        chart.data.datasets[1].data =
            simulation.infected;

        chart.data.datasets[2].data =
            simulation.recovered;
        
        chart.data.datasets[3].data =
            simulation.time.map(
                () => config.population * config.hospitalCapacity
            );

        chart.update("none");

        return;

    }

    chart = new Chart(ctx, {

        type: "line",

        data,

        options: {

            responsive: true,

            interaction: {
                intersect: false,
                mode: "index"
            },

            plugins: {

                legend: {

                    position: "top"

                }

            },

            scales: {

                x: {

                    title: {

                        display: true,

                        text: "Tiempo (días)"

                    }

                },

                y: {

                    title: {

                        display: true,

                        text: "Personas"

                    },

                    beginAtZero: true,

                    ticks: {

                        callback: function(value) {

                            return value.toLocaleString();

                        }

                    }

                }

            }

        }

    });

}