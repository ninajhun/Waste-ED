let data = [
  {
    foodItem: "eggs",
    servings: 2,
    expiration: 2, // (days until expires),
    img: "src-link",
    status: "eaten",
  },
  {
    foodItem: "lettuce",
    servings: 3,
    expiration: 2,
    img: "src-link",
    status: "uneaten",
  },
  {
    foodItem: "milk ",
    servings: 1,
    expiration: 2,
    img: "src-link",
    status: "waste",
  },
];


//loop thru pantry if pantry.status === "uneaten" render eaten component
//or maybe filter return arr

//can you see me?!

// var todos = [];

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
