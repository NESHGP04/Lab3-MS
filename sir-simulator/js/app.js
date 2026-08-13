import { CONFIG } from "./config.js";

import { simulateSIR } from "./model/sir.js";

import { calculateMetrics } from "./model/metrics.js";

import { drawChart } from "./ui/chart.js";

import { setupControls } from "./ui/controls.js";

import { updateMetricsPanel } from "./ui/panel.js";


function updateSimulation(params) {

    const simulation = simulateSIR(
        params.R0,
        params.infectiousPeriod,
        params.initialFraction,
        CONFIG
    );

    const metrics = calculateMetrics(
        simulation,
        params.R0,
        CONFIG.population
    );

    drawChart(simulation, CONFIG);

    updateMetricsPanel(metrics);
}


setupControls(updateSimulation);