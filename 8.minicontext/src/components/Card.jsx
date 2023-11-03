/* eslint-disable react/prop-types */
import { useStore, router } from "../context/StoreContext";
function Card({ product }) {
  const { addToCart, section, removeFromCart } = useStore();

  const handelAddToCart = () => {
    addToCart(product);
  };
  const handelRemoveFromCart = () => {
    removeFromCart(product);
  };
  return (
    <div>
      <div className="flex flex-col justify-center  items-center rounded p-2 m-5 w-40 h-50 shadow-md">
        <div className=" bg-slate-400 rounded w-20 h-20 mb-2"></div>
        <div className=" text-center">
          <h3 className=" font-semibold">{product.name}</h3>
          <p className=" text-sm">
            {product.price} <span>Rs</span>
          </p>
        </div>
        {section === router.Home && (
          <button
            className=" bg-blue-500 text-white px-2 rounded mt-3"
            onClick={handelAddToCart}
          >
            + add to cart
          </button>
        )}
        {section === router.Cart && (
          <button
            className=" bg-red-500 text-white px-2 rounded mt-3"
            onClick={handelRemoveFromCart}
          >
            remove
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
