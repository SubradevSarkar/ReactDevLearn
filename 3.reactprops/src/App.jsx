import "./App.css";
import Card from "./components/Card";

const img = {
  1: "https://images.pexels.com/photos/2076596/pexels-photo-2076596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  2: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

function App() {
  return (
    <>
      <Card name="Suvo" btnTxt="Click me" imgType={img[1]} />
      <Card name="Mukul" imgType={img[2]} />
    </>
  );
}

export default App;
