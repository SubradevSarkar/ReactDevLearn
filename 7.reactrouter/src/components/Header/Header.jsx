import { Link, NavLink } from "react-router-dom";
function Header() {
  return (
    <header className="bg-slate-50 sticky top-0 z-20">
      <nav className="py-3 px-20 text-sm border-y">
        <div className="flex justify-between items-center">
          <div>
            <Link to="">
              <img src="/img/logo.png" width={80} alt="logo" />
            </Link>
          </div>
          <div className="flex gap-3 order-2">
            <button>Log in</button>
            <button className="bg-orange-600 px-3 py-2 rounded-md text-white hover:bg-orange-700">
              Sign up
            </button>
          </div>
          <div>
            <ul className="flex gap-3 items-center font-medium ">
              <li>
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/github">
                  <img src="/img/gitlogo.png" width={30} alt="" />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
