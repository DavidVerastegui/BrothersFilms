# Process Design Document (PDD)
## BrothersFilms Smart Contracts System

### 1. Información del Documento
- **Proceso:** Generación, firma y gestión de contratos digitales.
- **Autor:** Antigravity (IA) / David Verastegui
- **Fecha:** Febrero 2026
- **Versión:** 1.0
- **Descripción:** Automatización y digitalización del flujo de emisión de contratos de Fotografía y Video para Bodas y XV Años.

---

### 2. Visión General del Proceso (As-Is vs To-Be)

**As-Is (Proceso Anterior):**
El administrador genera un contrato manualmente en Microsoft Word o PDF estático. Los cálculos de saldos se realizan mentalmente o en calculadora. Se envía el PDF al cliente por medios externos. No hay trazabilidad interactiva ni cálculo automático de pagos residuales validado por el cliente.

**To-Be (Proceso Actual):**
El administrador captura los datos en una Aplicación Web Estática de una sola página (SPA). El sistema calcula dinámicamente costos, anticipos y saldos restantes. Se genera una URL Única Codificada que funciona como "Base de Datos en la URL". El cliente abre el link, visualiza su estado de cuenta interactivo, firma digitalmente en su pantalla y el sistema auto-genera un PDF firmado mientras notifica por EmailJS al correo electrónico del cliente.

---

### 3. Diagrama de Flujo (Visio-Style Process Map)

```mermaid
flowchart TD
    %% Roles
    subgraph Administrador [BrothersFilms Admin]
        A([Inicio]) --> B(Abrir Portal web de Contratos)
        B --> C{¿Boda o XV Años?}
        C -->|Boda| D[Ingresar a boda.html]
        C -->|XV Años| E[Ingresar a xv.html]
        D --> F[Llenar Datos del Cliente y Evento]
        E --> F
        F --> G(Seleccionar Paquete)
        G --> H[Capturar Abonos y Anticipos]
        H --> I{¿Generar Link?}
        I -->|Sí| J[Click 'Generar Link para Cliente']
        J --> K[Copiar URL Codificada]
        K --> L(Enviar URL por WhatsApp)
    end

    subgraph Sistema [Aplicación Web / Lógica JS]
        M((Computación Local))
        H -.->|Calcula Aut.| N[Actualizar Saldo Restante / Pagado]
        J -.->|Codificación Base64/URI| O[URL Persistente con Parámetros]
    end

    subgraph Cliente [Cliente / Novios / Quinceañera]
        L --> P(Click en la URL)
        P --> Q[Página Carga en 'Modo Cliente']
        Q --> R{Revisar Contrato}
        R --> S[Verificar Pagos y Servicios]
        S --> T(Firmar en Canvas Digital)
        T --> U[Click 'Finalizar Contrato']
    end

    subgraph Automatización [Integraciones (html2canvas, jsPDF, EmailJS)]
        U -.-> V[Renderizar DOM a Imagen]
        V -.-> W[Empaquetar en Documento PDF]
        W -.-> X{¿Enviar al Correo?}
        X -->|Sí| Y[Consumir API EmailJS]
        Y -.-> Z[Cliente recibe Confirmación y Link]
        X -->|No| AA[Solo Descargar PDF Local]
        AA --> AB([Fin])
        Z --> AB
    end

    classDef admin fill:#f9f9f9,stroke:#333,stroke-width:2px;
    classDef sys fill:#e6f7ff,stroke:#1890ff,stroke-width:2px;
    classDef client fill:#f6ffed,stroke:#52c41a,stroke-width:2px;
    classDef auto fill:#fff0f6,stroke:#eb2f96,stroke-width:2px;

    class A,B,C,D,E,F,G,H,I,J,K,L admin;
    class M,N,O sys;
    class P,Q,R,S,T,U client;
    class V,W,X,Y,Z,AA,AB auto;
```

---

### 4. Descripción Detallada de los Pasos

| Paso | Acción | Rol / Sistema | Descripción Técnica |
| :--- | :--- | :--- | :--- |
| **1** | **Ingreso de Datos** | *Administrador* | Rellenado de campos nativos HTML5 (Inputs, Dates). Se usan selectores CSS para validación. |
| **2** | **Selección de Paquete** | *Administrador* | JS inyecta dinámicamente precios y visibilidad de servicios (`display:flex / none`) basados en el objeto `planData`. |
| **3** | **Actualización de Saldos** | *Sistema* | Función `updateSaldo()` que escucha los montos y resta el total. Al llegar a $0 detona indicador "PAGADO". |
| **4** | **Generación de Enlace** | *Sistema* | Función `generarLink()` concatena `URLSearchParams` codificando firmas en imágenes Base64 muy ligeras y datos de input. |
| **5** | **Recepción de Link** | *Cliente* | La URL incluye un flag lógico (`&modo=cliente`) que desactiva botones de edición (campos deshabilitados) y protege la información. |
| **6** | **Firma Digital** | *Cliente* | Implementación de `HTMLCanvasElement` permitiendo eventos táctiles (touch) y mouse para dibujar firmas suaves. |
| **7** | **Generación PDF** | *Automatidad* | `html2canvas` dibuja un layout a resolución 2x (anti-aliasing). `jsPDF` lo ajusta a formato A4 sin cortes, inyectando meta-datos. |
| **8** | **Cierre y Notificación** | *Seguimiento / API* | Llamada asíncrona a EmailJS con Plantilla Prediseñada. Envía la misma URL paramétrica al correo para futuro acceso. |

---

### 5. Arquitectura Técnica y Entorno

- **Frontend Core:** HTML5 Semántico, CSS3 Puro (Vanilla con variables nativas `--gold`, `--bg`, etc.).
- **Lógica de Negocio:** ECMAScript 6 (ES6) en scripts internos.
- **Librerías de Terceros:**
  - `html2canvas.min.js v1.4.1` (Screenshot del DOM)
  - `jspdf.umd.min.js v2.5.1` (Construcción del PDF)
  - `@emailjs/browser v4` (Gateway de Correo Electrónico)
- **Persistencia de Datos:** Arquitectura "State-in-URL" (Stateless sin servidor base de datos). Toda la data viva transita mediante Parámetros GET.
- **Alojamiento:** GitHub Pages (Servidor estático con soporte HTTPS).

---

### 6. Excepciones y Manejo de Errores

1. **Datos Incompletos:** Javascript detiene la generación del link si faltan valores críticos (Nombre, Fecha, Plan seleccionado). Dispara alerta de interfaz `alert()`.
2. **Firma Faltante:** El sistema bloquea la creación del PDF/Email si el canvas de firma del cliente cuenta con 0 puntos dibujados.
3. **Fallo de EmailJS:** Si el API key caduca o los servicios del proveedor caen, el sistema de manejo de promesas JS arroja un error controlado (`catch`), advirtiendo al cliente que no se pudo enviar el correo pero habilitando un botón `Fallback` para no perder la descarga manual del PDF.
