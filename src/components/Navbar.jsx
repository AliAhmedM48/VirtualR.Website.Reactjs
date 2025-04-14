import { useState } from "react";
import { Menu, X } from "lucide-react";

import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Button } from "./Button";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNav = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a className="flex items-center flex-shrink-0" href="#Hero">
              <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
              <span className="text-xl tracking-tight">VirtualR</span>
            </a>
            {/* Navigation Links */}
            <ul className="hidden lg:flex ml-14">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="py-5 px-3 hover:text-orange-500 transition-colors duration-500"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            {/* Login Button & Sign Up Button */}
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <Button>Sign In</Button>
              <Button bg>Create an account</Button>
            </div>
            {/* Mobile Navigation */}
            <div className="lg:hidden md:flex flex-col justify-end">
              <button
                className="cursor-pointer hover:text-orange-500"
                onClick={toggleNav}
              >
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {/* Mobile Navigation Drawer */}
          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full py-12 flex flex-col justify-center items-center lg:hidden">
              <ul className="w-full">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="py-4 text-center  w-full block hover:text-white hover:bg-orange-500 transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-6 mt-6">
                <Button>Sign In</Button>
                <Button bg>Create an account</Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
