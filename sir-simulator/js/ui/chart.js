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

                pointRadius: 0,

                tension: 0.15
            },

            {
                label: "Infectados",

                data: simulation.infected,

                borderColor: "#ef4444",

                borderWidth: 2,

                pointRadius: 0,

                tension: 0.15
            },

            {
                label: "Recuperados",

                data: simulation.recovered,

                borderColor: "#22c55e",

                borderWidth: 2,

                pointRadius: 0,

                tension: 0.15
            },

            {
                label: "Capacidad hospitalaria (10%)",

                data: simulation.time.map(
                    () => config.population * config.hospitalCapacity
                ),

                borderColor: "#f59e0b",

                backgroundColor: "#f59e0b",

                borderWidth: 2,

                borderDash: [7, 5],

                pointRadius: 0,

                pointHoverRadius: 0,

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

            maintainAspectRatio: false,

            interaction: {
                intersect: false,
                mode: "index"
            },

            plugins: {

                legend: {

                    position: "top"

                },

                tooltip: {

                    callbacks: {

                        label: function(context) {

                            const value =
                                Math.round(context.parsed.y);

                            return (
                                context.dataset.label +
                                ": " +
                                value.toLocaleString() +
                                " personas"
                            );

                        },

                        title: function(context) {

                            const day = Number(context[0].label);

                            return `Día ${day.toFixed(0)}`;
                        },

                    }

                }

            },

            scales: {

                x: {

                    title: {
                        display: true,
                        text: "Tiempo (días)"
                    },

                    ticks: {
                        callback: function(value) {

                            const day = this.getLabelForValue(value);

                            return Number(day).toFixed(0);
                        }
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