"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { isMobile } from "is-mobile";

export default function Landing() {
  const [isUserOnMobile, setIsUserOnMobile] = useState(false);

  useEffect(() => {
    setIsUserOnMobile(isMobile());
  }, []);

  return <div>{isUserOnMobile ? <LandingMobile /> : <LandingDesktop />}</div>;
}

export function LandingDesktop() {
  return (
    <div className="hero min-h-screen bg-dreamy-gradient" id="landing">
      <div className="hero-content text-center">
        <div className="avatar">
          <div className="w-60 mask mask-hexagon">
            <img src="/picture.png" />
          </div>
        </div>
        <div className="max-w-xl text-left">
          <h2 className="text-3xl ">ARTIFICIAL</h2>
          <h2 className="text-3xl ">INTELLIGENCE</h2>
          <h2 className="text-3xl ">PROFESSIONAL</h2>
          <h2 className="text-3xl ">FOR SCIENCE & INDUSTRY</h2>
          <h1 className="text-5xl font-bold pt-5">DONGYOUNG</h1>
          <h1 className="text-5xl font-bold">KIM, Ph.D.</h1>

          <div className="flex gap-2 pt-5 object-left w-96">
            <div>
              <a href="2023_2_cv_dongyoungkim.pdf">
                <button className="btn btn-primary">CV</button>
              </a>
            </div>
            <div>
              <a href="mailto:Dongyoung.kim@me.com">
                <button className="btn btn-neutral">e-mail</button>
              </a>
            </div>
            <div>
              <a href="https://velog.io/@dongyoungkim">
                <button className="btn btn-primary">Blog</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LandingMobile() {
  return (
    <div className="hero min-h-screen bg-dreamy-gradient" id="landing">
      <div className="hero-content text-center">
        <div className="grid grid-row-2">
          <div className="avatar">
            <div className="w-24 mask mask-hexagon">
              <img src="/picture.png" />
            </div>
          </div>

          <div className="max-w-xl text-left">
            <h2 className="text-3xl ">ARTIFICIAL</h2>
            <h2 className="text-3xl ">INTELLIGENCE</h2>
            <h2 className="text-3xl ">PROFESSIONAL</h2>
            <h2 className="text-3xl ">FOR SCIENCE & INDUSTRY</h2>
            <h1 className="text-5xl font-bold pt-5">DONGYOUNG KIM, Ph.D.</h1>

            <div className="flex gap-2 pt-5 object-left w-96">
              <div>
                <a href="2023_2_cv_dongyoungkim.pdf">
                  <button className="btn btn-primary">CV</button>
                </a>
              </div>
              <div>
                <a href="mailto:Dongyoung.kim@me.com">
                  <button className="btn btn-neutral">e-mail</button>
                </a>
              </div>
              <div>
                <a href="https://velog.io/@dongyoungkim">
                  <button className="btn btn-primary">Blog</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
