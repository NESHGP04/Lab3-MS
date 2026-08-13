export function setupControls(onChange) {

    const r0Slider = document.getElementById("r0");
    const periodSlider = document.getElementById("infectiousPeriod");
    const fractionSlider = document.getElementById("initialFraction");


    const r0Value = document.getElementById("r0Value");
    const periodValue = document.getElementById("periodValue");
    const fractionValue = document.getElementById("fractionValue");


    function updateControls() {

        // Obtener valores actuales
        const R0 = parseFloat(r0Slider.value);

        const infectiousPeriod = parseFloat(
            periodSlider.value
        );

        const initialFraction = parseFloat(
            fractionSlider.value
        );


        // Actualizar valores mostrados en pantalla
        r0Value.textContent = R0.toFixed(1);

        periodValue.textContent = infectiousPeriod;

        fractionValue.textContent =
            initialFraction.toFixed(3);


        // Enviar parámetros actualizados a app.js
        onChange({
            R0,
            infectiousPeriod,
            initialFraction
        });

    }


    // Escuchar cambios en los sliders
    r0Slider.addEventListener(
        "input",
        updateControls
    );

    periodSlider.addEventListener(
        "input",
        updateControls
    );

    fractionSlider.addEventListener(
        "input",
        updateControls
    );


    // Ejecutar una vez al iniciar
    updateControls();

}