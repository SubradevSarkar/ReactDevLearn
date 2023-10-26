import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharacterAllowed, setIsCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passRef = useRef(null);

  const PasswordGenerate = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumberAllowed) str += "0123456789";
    if (isCharacterAllowed) str += "!@#$%&'()*+,-./";

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, isNumberAllowed, isCharacterAllowed, setPassword]);

  const copyPasswordToClipboard = () => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, length);
    window.navigator.clipboard.writeText(password);
  };

  useEffect(() => {
    PasswordGenerate();
  }, [length, isNumberAllowed, isCharacterAllowed, PasswordGenerate]);

  return (
    <div className="fixed w-full max-w-md mx-auto flex justify-center top-12 inset-x-0 px-2">
      <div className="flex flex-col justify-center  bg-slate-800 px-6 py-4 rounded-md">
        <h2 className="text-gray-50 text-center font-semibold pb-6">
          Gen Pass
        </h2>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            ref={passRef}
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            className="outline-none w-full px-3 py-1"
          />
          <button
            className="outline-none bg-sky-500 text-white  px-3  shrink-0"
            onClick={copyPasswordToClipboard}
          >
            copy
          </button>
        </div>
        <div className="flex text-orange-500 text-sm gap-x-3">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              className="cursor-pointer"
              value={length}
              min={6}
              max={100}
              onChange={(e) => setLength(e.target.value)}
            />
            <label>length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              className="cursor-pointer"
              value={isNumberAllowed}
              onChange={() => setIsNumberAllowed((prev) => !prev)}
            />
            <label>number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              className="cursor-pointer"
              value={isCharacterAllowed}
              onChange={() => setIsCharacterAllowed((prev) => !prev)}
            />
            <label>character</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
