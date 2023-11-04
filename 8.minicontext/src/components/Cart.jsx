import { useStore } from "../context/StoreContext";
import { Card } from "../components";

function Cart() {
  const { cart } = useStore();
  return (
    <div>
      <h1 className=" dark:text-white text-center text-lg font-semibold">
        total - {cart.reduce((a, b) => a + b.price, 0)}
      </h1>
      <div className="flex flex-wrap justify-center">
        {cart &&
          cart.map((product) => <Card key={product.id} product={product} />)}
      </div>
    </div>
  );
}

export default Cart;
