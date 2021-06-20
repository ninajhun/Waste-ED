let data = {
  food: [
    {
      foodItem: 'apple',
      servings: 1,
      expiration: -2,
      img: "https://nix-tag-images.s3.amazonaws.com/384_thumb.jpg",
      status: "uneaten",
      itemID: 1,
    },
    {
      foodItem: 'milk',
      servings: 1,
      expiration: 0,
      img: "https://nix-tag-images.s3.amazonaws.com/313_thumb.jpg",
      status: "uneaten",
      itemID: 2,
    },
    {
      foodItem: 'eggs',
      servings: 1,
      expiration: 2,
      img: "https://nix-tag-images.s3.amazonaws.com/542_thumb.jpg",
      status: "uneaten",
      itemID: 3,
    },
    {
      foodItem: 'berries',
      servings: 1,
      expiration: 3,
      img: "https://nix-tag-images.s3.amazonaws.com/1788_thumb.jpg",
      status: "uneaten",
      itemID: 4,
    },
    {
      foodItem: 'steak',
      servings: 1,
      expiration: 5,
      img: "https://nix-tag-images.s3.amazonaws.com/827_thumb.jpg",
      status: "uneaten",
      itemID: 5,
    },
    {
      foodItem: 'lettuce',
      servings: 1,
      expiration: 7,
      img: "https://nix-tag-images.s3.amazonaws.com/657_thumb.jpg",
      status: "uneaten",
      itemID: 6,
    }
  ],
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
