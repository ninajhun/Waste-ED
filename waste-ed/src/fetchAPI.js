// const APP_ID = process.env.REACT_APP_ID;
// const APP_KEY = process.env.REACT_APP_KEY;
const { REACT_APP_KEY, REACT_APP_ID } = process.env;


async function fetchAPI(url, data) {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'x-app-id': REACT_APP_ID,
      'x-app-key': REACT_APP_KEY,
      'x-remote-user-id': 0
    }
  });
  return response.json();
}

  export default fetchAPI;
