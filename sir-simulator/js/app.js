import { CONFIG } from "./config.js";

import { simulateSIR } from "./model/sir.js";

import { drawChart } from "./ui/chart.js";

import { setupControls } from "./ui/controls.js";


function updateSimulation(params) {

    const simulation = simulateSIR(

        params.R0,

        params.infectiousPeriod,

        params.initialFraction,

        CONFIG

    );

    drawChart(simulation);

}


setupControls(updateSimulation);