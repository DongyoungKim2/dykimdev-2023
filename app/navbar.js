"use client";

import "./globals.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { isMobile } from "is-mobile";

export default function Navbar() {
  const [isUserOnMobile, setIsUserOnMobile] = useState(false);

  useEffect(() => {
    setIsUserOnMobile(isMobile());
  }, []);

  return <div>{isUserOnMobile ? <NavbarMobile /> : <NavbarDesktop />}</div>;
}

// navbar function
export function NavbarMobile() {
  return (
    <div className="navbar bg-opacity-80 z-50 bg-neutral text-neutral-content fixed top-0 left-0 w-full ">
      <div className="flex-1 pr-32">
        <a className="btn btn-ghost normal-case text-xl">
          DONGYOUNG KIM, Ph.D.
        </a>
      </div>
      <div className="flex-1">
        <div className="flex items-stretch">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost rounded-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-justify"
                viewBox="0 0 16 16"
              >
                {" "}
                <path
                  fill-rule="evenodd"
                  d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                />{" "}
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content p-2 shadow bg-neutral rounded-box w-52 mt-4"
            >
              <li>
                <Link href="#landing">Home</Link>
              </li>
              <li>
                <Link href="#experience">Experience</Link>
              </li>
              <li>
                <Link href="#education">Education</Link>
              </li>
              <li>
                <Link href="#project">Project</Link>
              </li>
              <li>
                <Link href="#award">Award</Link>
              </li>
              <li>
                <Link href="#patent">Patent</Link>
              </li>
              <li>
                <Link href="#publication">Publication</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// navbar function
export function NavbarDesktop() {
  return (
    <div className="navbar bg-opacity-80 z-50 bg-neutral text-neutral-content fixed top-0 left-0 w-full ">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">
          DONGYOUNG KIM, Ph.D.
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="#landing">Home</Link>
          </li>
          <li>
            <Link href="#experience">Experience</Link>
          </li>
          <li>
            <Link href="#education">Education</Link>
          </li>
          <li>
            <Link href="#project">Project</Link>
          </li>
          <li>
            <Link href="#award">Award</Link>
          </li>
          <li>
            <Link href="#patent">Patent</Link>
          </li>
          <li>
            <Link href="#publication">Publication</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
