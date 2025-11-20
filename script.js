const recommendations = [
  {
    type: "beach",
    name: "Copacabana",
    country: "Brazil",
    image:
      "https://images.unsplash.com/photo-1596573677494-accc8fbe89e8?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "beach",
    name: "Bondi Beach",
    country: "Australia",
    image:
      "https://images.unsplash.com/photo-1538312611088-d83e362efe66?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "beach",
    name: "Navagio Beach",
    country: "Greece",
    image:
      "https://images.unsplash.com/photo-1571021785662-712e369a2829?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "temple",
    name: "Angkor Wat",
    country: "Cambodia",
    image:
      "https://plus.unsplash.com/premium_photo-1661963188432-5de8a11f21a7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "temple",
    name: "Borobudur",
    country: "Indonesia",
    image:
      "https://images.unsplash.com/photo-1735315853160-c167783cd957?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "temple",
    name: "Kiyomizu-dera",
    country: "Japan",
    image:
      "https://images.unsplash.com/photo-1568074621893-303fdea4735a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "beach",
    name: "Whitehaven Beach",
    country: "Australia",
    image:
      "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "temple",
    name: "Wat Arun",
    country: "Thailand",
    image:
      "https://images.unsplash.com/photo-1613672803979-a6edfc5a179b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "beach",
    name: "Anse Source d'Argent",
    country: "Seychelles",
    image:
      "https://images.unsplash.com/photo-1706088773588-98152aabeb81?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "temple",
    name: "Temple of Heaven",
    country: "China",
    image:
      "https://images.unsplash.com/photo-1567883251222-651d554b880c?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("searchInput");

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // evita il submit se dentro un form
      search();
    }
  });
});

function search() {
  const keyword = document
    .getElementById("searchInput")
    .value.trim()
    .toLowerCase();
  const results = recommendations.filter(
    (item) =>
      item.name.toLowerCase().includes(keyword) ||
      item.country.toLowerCase().includes(keyword) ||
      item.type.toLowerCase().includes(keyword)
  );
  displayResults(results);
}

function displayResults(results) {
  const container = document.getElementById("results");
  container.innerHTML = "";
  if (results.length === 0) {
    container.innerHTML = "<p>No destinations found. Try another keyword.</p>";
    return;
  }

  results.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${item.name}</h3>
      <p>Type: ${item.type}</p>
      <img src="${item.image}" alt="${item.name}" />
    `;
    container.appendChild(card);
  });
}

function clearResults() {
  document.getElementById("searchInput").value = "";
  document.getElementById("results").innerHTML = "";
}
