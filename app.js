const contenedor = document.querySelector("#carrito");
const botones = document.querySelectorAll(".btn-primary");
const template = document.querySelector("#template");
const botreset = document.querySelector(".btn-danger");
const fragment = document.createDocumentFragment();
const carrito = [];
const agregarcarrito = (e) => {
  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
  };
  const posicion = carrito.findIndex((item) => {
    return item.titulo === producto.titulo;
  });
  if (posicion === -1) {
    carrito.push(producto);
  } else {
    carrito[posicion].cantidad++;
  }
  mostrarcarrito();
};

const mostrarcarrito = () => {
  carrito.forEach((item) => {
    contenedor.textContent = "";
    const clone = template.content.cloneNode(true);
    clone.querySelector(".lead").textContent = item.titulo;
    clone.querySelector(".bg-primary").textContent = item.cantidad;
    fragment.appendChild(clone);
  });
  contenedor.appendChild(fragment);
};
botones.forEach((x) => {
  x.addEventListener("click", agregarcarrito);
});
botreset.addEventListener("click", () => {
  const elementosFruta = document.querySelectorAll(".fruta");
  elementosFruta.forEach((item) => {
    item.remove();
  });
  carrito.length = 0;
  contenedor.textContent = "";
});

