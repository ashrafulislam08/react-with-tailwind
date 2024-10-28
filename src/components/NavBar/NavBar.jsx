import { RiMenu2Line } from "react-icons/ri";
import Link from "../Link/Link";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/blog", name: "Blog" },
  ];

  return (
    <nav className="bg-yellow-200 text-black p-6">
      <div className="cursor-pointer" onClick={() => setOpen(!open)}>
        {open ? (
          <IoClose className="text-2xl" />
        ) : (
          <RiMenu2Line className="text-2xl md:hidden" />
        )}
      </div>
      <ul
        className={`${
          open ? "block" : "hidden -top-60"
        } md:flex absolute md:static bg-yellow-200 text-black w-full md:w-auto text-center md:text-left md:p-1 p-5 mt-6 md:m-0 duration-150 `}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route} />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
