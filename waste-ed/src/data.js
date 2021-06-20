let data = {
  food: [],
  nextId: 1,
};

const previousData = localStorage.getItem("local-data");
if (previousData !== null) {
  data = JSON.parse(previousData);
}
window.addEventListener("beforeunload", beforeUnload);

function beforeUnload(event) {
  const localData = JSON.stringify(data);
  localStorage.setItem("local-data", localData);
}

export { data };
