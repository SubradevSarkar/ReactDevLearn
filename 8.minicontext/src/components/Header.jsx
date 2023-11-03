import { useTheme } from "../context/ThemeContext";
import { useStore, router } from "../context/StoreContext";
import cartIcon from "/cart.png";
function Header() {
  const { isDarkTheme, toggleTheme } = useTheme();
  const { cart, redirectRoute } = useStore();

  return (
    <header className="flex bg-slate-100 dark:bg-gray-800 dark:text-white justify-center py-3">
      <nav className="flex gap-11">
        <div>
          <ul className="flex gap-3 ">
            <li
              className=" cursor-pointer"
              onClick={() => redirectRoute(router.Home)}
            >
              Home
            </li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex">
          <button
            className="bg-slate-800 px-3 py-1 rounded-lg text-sm text-center text-gray-50 dark:bg-slate-100 dark:text-slate-900"
            onClick={toggleTheme}
          >
            {isDarkTheme ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
        <div>
          <div
            className="flex flex-col items-end text-xs text-white cursor-pointer"
            onClick={() => redirectRoute(router.Cart)}
          >
            {cart.length > 0 && (
              <div className=" z-50 -m-2 bg-red-600 w-5 h-5 flex justify-center items-center rounded-full">
                <span className="">{cart.length}</span>
              </div>
            )}

            <div className=" bg-white rounded-lg">
              <img src={cartIcon} alt="cart" width={25} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
