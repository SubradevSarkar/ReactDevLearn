import { useStore } from "../context/StoreContext";
import { Card } from "../components";

function Home() {
  const { products } = useStore();
  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {products &&
          products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default Home;
