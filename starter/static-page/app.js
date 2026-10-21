const API_URL = "https://jsonplaceholder.typicode.com/users";

const list = document.querySelector("#users");
const status = document.querySelector("#status");
const search = document.querySelector("#search");

let allUsers = [];

function setStatus(message, isError = false) {
  status.textContent = message;
  status.classList.toggle("error", isError);
}

function userCard(user) {
  const li = document.createElement("li");
  li.className = "card";

  const name = document.createElement("h2");
  name.textContent = user.name;

  const email = document.createElement("p");
  email.textContent = user.email;

  li.append(name, email);
  return li;
}

function render(users) {
  list.replaceChildren(...users.map(userCard));
  if (users.length === 0) {
    setStatus("No people match your filter.");
  } else {
    setStatus(`Showing ${users.length} of ${allUsers.length} people.`);
  }
}

async function loadUsers() {
  setStatus("Loading...");
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    allUsers = await response.json();
    render(allUsers);
  } catch (error) {
    setStatus(`Could not load people: ${error.message}`, true);
  }
}

search.addEventListener("input", () => {
  const term = search.value.trim().toLowerCase();
  render(allUsers.filter((u) => u.name.toLowerCase().includes(term)));
});

loadUsers();

// TODO (Lab 01): add a "Sort A-Z" button, and show the user's company name on each card.
