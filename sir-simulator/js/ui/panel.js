export function updateMetricsPanel(metrics) {

    const r0Element =
        document.getElementById("metricR0");

    const immunityElement =
        document.getElementById("metricHerdImmunity");

    const peakElement =
        document.getElementById("metricPeak");

    const peakTimeElement =
        document.getElementById("metricPeakTime");

    const statusElement =
        document.getElementById("metricStatus");


    // R0
    r0Element.textContent =
        metrics.R0.toFixed(1);


    // Umbral de inmunidad
    immunityElement.textContent =
        `${(
            metrics.herdImmunityThreshold * 100
        ).toFixed(1)}%`;


    // Pico de infectados
    peakElement.textContent =
        `${metrics.peakPercentage.toFixed(1)}%`;


    // Tiempo al pico
    peakTimeElement.textContent =
        `${metrics.peakTime.toFixed(1)} días`;


    // Estado epidemiológico
    if (metrics.epidemicGrows) {

        statusElement.textContent =
            "R₀ > 1 · Epidemia crece";

        statusElement.className =
            "status status-danger";

    } else {

        statusElement.textContent =
            "R₀ ≤ 1 · Epidemia se extingue";

        statusElement.className =
            "status status-safe";

    }

}