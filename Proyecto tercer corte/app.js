class PaqueteViaje {
  constructor(id, nombre, precio, descripcion) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
  }
}

class Agencia {
  constructor() {
    // Al menos 8 elementos requeridos por el taller
    this.paquetes = [
      new PaqueteViaje(1, "Playa tropical", 500, "Disfruta del sol, arena blanca y mar Caribe."),
      new PaqueteViaje(2, "Montaña andina", 350, "Aventura, aire puro y senderismo en la cordillera."),
      new PaqueteViaje(3, "Ciudad histórica", 400, "Descubre la cultura, arquitectura y museos antiguos."),
      new PaqueteViaje(4, "Safari en la selva", 700, "Naturaleza exótica y contacto con la vida silvestre."),
      new PaqueteViaje(5, "Crucero por el mar", 900, "Lujo, comodidad y vistas panorámicas en altamar."),
      new PaqueteViaje(6, "Turismo rural", 250, "Desconexión total, granjas y tranquilidad campestre."),
      new PaqueteViaje(7, "Aurora boreal", 1100, "Paisajes helados y un espectáculo nocturno único."),
      new PaqueteViaje(8, "Parque temático", 450, "Diversión extrema garantizada para toda la familia.")
    ];
    this.reservas = [];
  }

  obtenerPaquetes() {
    return this.paquetes;
  }

  agregarReserva(reserva) {
    this.reservas.push(reserva);
  }

  listarReservas() {
    return this.reservas;
  }
}

class Aplicacion {
  constructor() {
    this.agencia = new Agencia();
    this.inicializarSelect();
    this.renderizarTarjetas();

    document.getElementById("reservarBtn")
      .addEventListener("click", () => this.registrarReserva());
  }

  inicializarSelect() {
    const select = document.getElementById("destinoSelect");
    select.innerHTML = "";
    this.agencia.obtenerPaquetes().forEach(paquete => {
      const option = document.createElement("option");
      option.value = paquete.id;
      option.textContent = `${paquete.nombre} ($${paquete.precio} USD)`;
      select.appendChild(option);
    });
  }

  renderizarTarjetas() {
    const contenedor = document.getElementById("tarjetasCatalogo");
    contenedor.innerHTML = "";

    this.agencia.obtenerPaquetes().forEach(paquete => {
      const col = document.createElement("div");
      col.className = "col";
      col.innerHTML = `
        <div class="card h-100 shadow-sm">
          <div class="card-body d-flex flex-column justify-content-between">
            <div>
              <h5 class="card-title fw-bold text-primary">${paquete.nombre}</h5>
              <p class="card-text text-muted small">${paquete.descripcion}</p>
            </div>
            <div class="mt-3">
              <span class="badge bg-secondary mb-2">Precio base</span>
              <p class="fw-bold fs-5 text-dark m-0">$${paquete.precio} USD</p>
            </div>
          </div>
        </div>
      `;
      contenedor.appendChild(col);
    });
  }

  registrarReserva() {
    const idSeleccionado = Number(document.getElementById("destinoSelect").value);
    const inputViajeros = document.getElementById("viajeros");
    const viajeros = Number(inputViajeros.value);

    if (viajeros <= 0 || isNaN(viajeros)) {
      return alert("Por favor, ingresa un número válido de viajeros.");
    }

    const paqueteEncontrado = this.agencia.obtenerPaquetes().find(p => p.id === idSeleccionado);
    if (!paqueteEncontrado) return;

    const total = paqueteEncontrado.precio * viajeros;
    const reserva = {
      paquete: paqueteEncontrado.nombre,
      viajeros: viajeros,
      total: total
    };

    this.agencia.agregarReserva(reserva);
    this.mostrarReservas();

    // Limpiar formulario y dar aviso
    inputViajeros.value = "1";
    alert(`¡Reserva simulada con éxito!\nDestino: ${reserva.paquete}\nViajeros: ${reserva.viajeros}\nTotal a pagar: $${reserva.total} USD`);
  }

  mostrarReservas() {
    const lista = document.getElementById("listaReservas");
    lista.innerHTML = "";

    if (this.agencia.listarReservas().length === 0) {
      lista.innerHTML = `<li class="list-group-item text-muted">No hay reservas registradas todavía.</li>`;
      return;
    }

    this.agencia.listarReservas().forEach((res, index) => {
      const item = document.createElement("li");
      item.className = "list-group-item d-flex justify-content-between align-items-center";
      item.textContent = `Reserva #${index + 1}: ${res.paquete} — ${res.viajeros} viajero(s)`;
      
      const badgeTotal = document.createElement("span");
      badgeTotal.className = "badge bg-success rounded-pill fs-6";
      badgeTotal.textContent = `$${res.total} USD`;
      
      item.appendChild(badgeTotal);
      lista.appendChild(item);
    });
  }
}

new Aplicacion();