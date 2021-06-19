import React from "react";
import AddItemBar from "../components/AddItemBar";
import fetchAPI from "../fetchAPI";

export default function HomePage() {
  const input = 'banana';
  fetchAPI(`https://trackapi.nutritionix.com/v2/search/instant?branded=false&query=${input}`, input)
    .then(data => {
      console.log(data.common);
      // data.common returns the array of 20 items
      // data.common[0].food_name is the item name
      // data.common[0].photo.thumb is the image
    });
  return (
    <>
      <AddItemBar />
    </>
  );
}
