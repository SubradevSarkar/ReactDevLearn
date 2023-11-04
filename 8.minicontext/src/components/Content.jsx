import { Cart, Home } from "../components";
import { useStore, router } from "../context/StoreContext";
function Content() {
  const { section } = useStore();
  return (
    <>
      <div className=" w-full h-full dark:bg-gray-900">
        {section === router.Home && <Home />}
        {section === router.Cart && <Cart />}
      </div>
    </>
  );
}

export default Content;
