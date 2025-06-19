// Отображение карточек и модалок
function renderServices(services) {
  const productContainer = document.getElementById("productContainer");
  const modalsContainer = document.getElementById("modalsContainer");
  productContainer.innerHTML = "";
  modalsContainer.innerHTML = "";

  services.forEach(service => {
    const card = `
      <div class="card">
        <img src="${service.image}" alt="${service.title}">
        <h3>${service.title}</h3>
        <p>${service.description}</p>
        <h4>${service.price}</h4>
        <button onclick="openModal(${service.id})">Подробнее</button>
      </div>
    `;
    productContainer.insertAdjacentHTML("beforeend", card);

    const modal = `
      <div id="modal${service.id}" class="modal">
        <div class="modal-content">
          <span class="close" onclick="closeModal(${service.id})">&times;</span>
          <h2>${service.title}</h2>
          <img src="${service.image}" alt="">
          <p>${service.description}</p>
          <h4>${service.price}</h4>
        </div>
      </div>
    `;
    modalsContainer.insertAdjacentHTML("beforeend", modal);
  });
}

// Получить данные из services.json и localStorage
Promise.all([
  fetch("services.json").then(r => r.json()),
  Promise.resolve(JSON.parse(localStorage.getItem("services") || "[]"))
]).then(([fileServices, localServices]) => {
  const allServices = [...fileServices, ...localServices];
  renderServices(allServices);
});

// Модалки
function openModal(id) {
  document.getElementById(`modal${id}`).style.display = "block";
}
function closeModal(id) {
  document.getElementById(`modal${id}`).style.display = "none";
}

// Год
document.getElementById("current-year").textContent = new Date().getFullYear();
