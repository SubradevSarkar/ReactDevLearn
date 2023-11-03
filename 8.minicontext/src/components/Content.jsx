import React from "react";
import { Cart, Home } from "../components";
import { useStore, router } from "../context/StoreContext";
function Content() {
  const { section } = useStore();
  return (
    <>
      <div className=" w-full h-full">
        {section === router.Home && <Home />}
        {section === router.Cart && <Cart />}
      </div>
    </>
  );
}

export default Content;
