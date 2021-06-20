const { REACT_APP_KEY, REACT_APP_ID } = process.env;

const fetchFoodAPI = async (input) => {
  const data = await fetchAPI(
    `https://trackapi.nutritionix.com/v2/search/instant?branded=false&query=${input}`,
    input
  ).then((data) => {
    return data;
  });

  return data;
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
