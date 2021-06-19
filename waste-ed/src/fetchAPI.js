// const APP_ID = process.env.REACT_APP_ID;
// const APP_KEY = process.env.REACT_APP_KEY;
const { REACT_APP_KEY, REACT_APP_ID } = process.env;

const fetchFoodAPI = (input) => {
  fetchAPI(
    `https://trackapi.nutritionix.com/v2/search/instant?branded=false&query=${input}`,
    input
  ).then((data) => {
    // if (data.length) {
    // console.log(data.common.splice(0, 5));
    const foodData = data.common.splice(0, 5);
    console.log(foodData);
    return foodData;
    // }
  });
};

async function fetchAPI(url, data) {
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "x-app-id": REACT_APP_ID,
      "x-app-key": REACT_APP_KEY,
      "x-remote-user-id": 0,
    },
  });
  return response.json();
}

export { fetchFoodAPI };
