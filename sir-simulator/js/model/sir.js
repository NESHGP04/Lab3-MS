/**
 * Simula el modelo SIR utilizando el método de Euler.
 *
 * @param {number} R0 - Número reproductivo básico.
 * @param {number} infectiousPeriod - Período infeccioso (días).
 * @param {number} initialFraction - Fracción inicial infectada.
 * @param {object} config - Configuración global.
 * @returns {object}
 */

export function simulateSIR(
    R0,
    infectiousPeriod,
    initialFraction,
    config
) {

    const N = config.population;

    const dt = config.dt;

    const days = config.simulationDays;

    // Parámetros del modelo
    const gamma = 1 / infectiousPeriod;

    const beta = R0 * gamma;

    // Condiciones iniciales

    let S = N * (1 - initialFraction);

    let I = N * initialFraction;

    let R = 0;

    // Arreglos para almacenar resultados

    const time = [];

    const susceptible = [];

    const infected = [];

    const recovered = [];

    for (let t = 0; t <= days; t += dt) {

        time.push(t);

        susceptible.push(S);

        infected.push(I);

        recovered.push(R);

        // Euler

        const dS = -beta * S * I / N;

        const dI = beta * S * I / N - gamma * I;

        const dR = gamma * I;

        S += dS * dt;

        I += dI * dt;

        R += dR * dt;
    }

    return {

        time,

        susceptible,

        infected,

        recovered,

        beta,

        gamma

    };

}