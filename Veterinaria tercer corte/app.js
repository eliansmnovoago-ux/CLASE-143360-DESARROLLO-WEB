
class Mascota {
  constructor(nombre, especie, edad) {
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
  }
}


class Veterinaria {
  constructor() {
    this.mascotas = [];
  }

  registrar(mascota) {
    this.mascotas.push(mascota);
  }

  listar() {
    return this.mascotas;
  }
}


class Aplicacion {
  constructor() {
    this.veterinaria = new Veterinaria();
    document.getElementById("registrar")
      .addEventListener("click", () => this.registrarMascota());
  }

  registrarMascota() {
    const nombre = document.getElementById("nombre").value;
    const especie = document.getElementById("especie").value;
    const edad = Number(document.getElementById("edad").value);

    if (!nombre.trim() || edad <= 0) return alert("Datos inválidos");

    this.veterinaria.registrar(new Mascota(nombre, especie, edad));
    this.mostrarMascotas();
  }

  mostrarMascotas() {
    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    this.veterinaria.listar().forEach(mascota => {
      const item = document.createElement("li");
      item.className = "list-group-item";
      item.textContent = `${mascota.nombre} - ${mascota.especie} - ${mascota.edad} años`;
      lista.appendChild(item);
    });
  }
}


new Aplicacion();