document.getElementById("addServiceForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const newService = Object.fromEntries(formData.entries());
  newService.id = Date.now();

  const existing = JSON.parse(localStorage.getItem("services") || "[]");
  existing.push(newService);
  localStorage.setItem("services", JSON.stringify(existing));

  document.getElementById("message").textContent = "Услуга добавлена!";
  e.target.reset();
});
