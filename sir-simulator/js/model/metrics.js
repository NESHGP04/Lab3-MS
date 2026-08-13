export function calculateMetrics(simulation, R0, population) {

    // Umbral de inmunidad de grupo si R0 <= 1
    const herdImmunityThreshold =
        R0 > 1 ? 1 - (1 / R0) : 0;

    // Buscar el pico de infectados
    let peakInfected = simulation.infected[0];
    let peakIndex = 0;

    for (let i = 1; i < simulation.infected.length; i++) {

        if (simulation.infected[i] > peakInfected) {

            peakInfected = simulation.infected[i];
            peakIndex = i;

        }

    }

    // Convertir el pico a porcentaje de la población
    const peakPercentage =
        (peakInfected / population) * 100;

    // Obtener el tiempo correspondiente al pico
    const peakTime = simulation.time[peakIndex];

    return {

        R0,

        herdImmunityThreshold,

        peakPercentage,

        peakTime,

        epidemicGrows: R0 > 1

    };

}