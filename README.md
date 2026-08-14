# Lab3-MS

Laboratorio 3 — Modelación y Simulación.  
Modelo epidemiológico SIR: simulador interactivo (Task 1) y calibración/validación en notebook (Task 2).

## Estructura del repositorio

```
Lab3-MS/
├── README.md
├── sir-simulator/          # Task 1 — simulador web SIR
│   ├── index.html
│   ├── css/
│   │   └── styles.css
│   └── js/
│       ├── app.js          # Punto de entrada de la app
│       ├── config.js       # Parámetros por defecto
│       ├── model/
│       │   ├── sir.js      # Ecuaciones SIR + integración numérica
│       │   └── metrics.js  # R0, pico, tamaño final, etc.
│       ├── ui/
│       │   ├── chart.js    # Gráficas
│       │   ├── controls.js # Controles de parámetros
│       │   └── panel.js    # Panel de resultados
│       └── utils/
│           └── helpers.js
└── sirTask2/               # Task 2 — calibración y validación
    └── Task2_Lab3_MS.ipynb
```



## Carpetas


| Carpeta          | Contenido                                                                            |
| ---------------- | ------------------------------------------------------------------------------------ |
| `sir-simulator/` | Aplicación web del modelo SIR (HTML/CSS/JS). Abrir `index.html` en el navegador.     |
| `sirTask2/`      | Jupyter notebook con RK4 (NumPy), calibración de $\beta$, sensibilidad y validación. |




## Cómo usar


**Notebook (Task 2)**

```bash
cd sirTask2
jupyter notebook Task2_Lab3_MS.ipynb
```

Requisito: Python con NumPy.

**Simulador (Task 4)**

```bash
# Abrir en el navegador, por ejemplo:
xdg-open sir-simulator/index.html
```
