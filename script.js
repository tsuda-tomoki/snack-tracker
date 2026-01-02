const KEY = "snack-dates";

const addBtn = document.getElementById("add");
const list = document.getElementById("list");
const count = document.getElementById("count");

function load() {
  return JSON.parse(localStorage.getItem(KEY) || "[]");
}

function save(data) {
  localStorage.setItem(KEY, JSON.stringify(data));
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function render() {
  const data = load();
  list.innerHTML = "";

  data.forEach(d => {
    const li = document.createElement("li");
    li.textContent = d;
    list.appendChild(li);
  });

  count.textContent = `記録日数: ${data.length}日`;
}

addBtn.onclick = () => {
  const data = load();
  const t = today();

  if (!data.includes(t)) {
    data.unshift(t);
    save(data);
  }

  render();
};

render();
