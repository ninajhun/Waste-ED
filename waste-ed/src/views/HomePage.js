import React from "react";
import AddItemBar from "../components/AddItemBar";
import UneatenItem from "../components/UneatenItem";
import EatenItem from "../components/EatenItem";
import WastedItem from "../components/WastedItem";

export default function HomePage() {
  return (
    <>
      <AddItemBar />
      <UneatenItem />
      <EatenItem />
      <WastedItem />
    </>
  );
}
