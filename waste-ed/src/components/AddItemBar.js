const input = 'apple';
async function search(url = `https://trackapi.nutritionix.com/v2/search/instant?branded=false&query=${input}`) {
  const response = await fetch(url, {
    headers: {
      
    }
  })
}
