import { useState } from "react";
import conf from "./conf/conf.js";

import "./App.css";

function App() {
  console.log(505, conf.appwriteUrl);
  const [count, setCount] = useState(0);

  return <>count{count}</>;
}

export default App;
