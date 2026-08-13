import { CONFIG } from "./config.js";

import { simulateSIR } from "./model/sir.js";

import { drawChart } from "./ui/chart.js";

const simulation = simulateSIR(

    2.8,

    7,

    0.002,

    CONFIG

);

drawChart(simulation);