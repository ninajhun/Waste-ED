let data = {
  food: [],
  nextId: "1",
};
// {
//   foodItem: "eggs",
//   servings: 2,
//   expiration: 2, // (days until expires),
//   img: "src-link",
//   status: "eaten",
// itemID: 1
// },
// {
//   foodItem: "lettuce",
//   servings: 3,
//   expiration: 2,
//   img: "src-link",
//   status: "uneaten",
//   itemID: 2
// },
// {
//   foodItem: "milk ",
//   servings: 1,
//   expiration: 2,
//   img: "src-link",
//   status: "waste",
//   itemID: 3
// }

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
