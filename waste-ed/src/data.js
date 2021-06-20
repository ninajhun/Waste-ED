let data = {
  food: [
    {
      foodItem: 'apple',
      servings: 1,
      expiration: 7,
      img: "img",
      status: "uneaten",
      itemID: 1,
    },
    {
      foodItem: 'milk',
      servings: 1,
      expiration: 7,
      img: "img",
      status: "uneaten",
      itemID: 2,
    },
    {
      foodItem: 'eggs',
      servings: 1,
      expiration: 7,
      img: "img",
      status: "uneaten",
      itemID: 3,
    },
    {
      foodItem: 'strawberries',
      servings: 1,
      expiration: 1,
      img: "img",
      status: "uneaten",
      itemID: 3,
    }
  ],
  nextId: 1,
};

// let data = {
//   {
//     foodItem: 'apple',
//     servings: 1,
//     expiration: 7,
//     img: "img",
//     status: "uneaten",
//     itemID: 1,
//   },
//   {
//   foodItem: 'apple',
//     servings: 1,
//       expiration: 7,
//         img: "img",
//           status: "uneaten",
//             itemID: 2,
//   }

// };

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
