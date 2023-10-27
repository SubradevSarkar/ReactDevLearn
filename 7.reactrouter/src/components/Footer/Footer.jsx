import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="py-10 border-y">
      <div className="flex justify-evenly items-start ">
        <div>
          <Link to="">
            <img src="/img/logo.png" width={80} alt="logo" />
          </Link>
        </div>
        <div className="flex gap-28">
          <div>
            <h5>Resources</h5>
            <ul className="font-medium ">
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-orange-500">Newsletter Subscribe</h3>
            <input
              className="bg-slate-200 rounded px-3 py-1"
              type="text"
              placeholder="enter your email"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
