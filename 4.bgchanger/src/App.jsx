import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#250B5E");

  const bgColors = [
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "violet",
    "purple",
    "olive",
  ];

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap bottom-10 justify-center inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white rounded-xl  px-3 py-2">
          {bgColors &&
            bgColors.map((color) => (
              <button
                key={color}
                className="px-3 py-1 rounded-lg text-gray-50"
                style={{ backgroundColor: color }}
                onClick={() => setColor(color)}
              >
                {color}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
