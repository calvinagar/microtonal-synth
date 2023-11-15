import './index.css';
import {HashRouter, Route} from "react-router-dom";
import {Outlet, Routes} from "react-router";
import NavLink from "./ui/NavLink";
import * as React from 'react';
import Play from './pages/play/Play';
import {Learn} from "./pages/Learn";
import {Download} from "./pages/Download";
import {Contact} from "./pages/Contact";
import {Splash} from "./pages/Splash"
import PlayProvider from "./pages/play/PlayProvider";
import {ReactJSXElement} from "@emotion/react/types/jsx-namespace";

export default function App(): ReactJSXElement {
    return (
        <PlayProvider>
            <HashRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Splash />}/>
                        <Route path="learn" element={<Learn />}/>
                        <Route path="play" element={<Play />}/>
                        <Route path="download" element={<Download />}/>
                        <Route path="contact" element={<Contact />}/>
                    </Route>
                </Routes>
            </HashRouter>
        </PlayProvider>
    );
}

const Layout = (): ReactJSXElement => {
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 2xl:py-7 xl:py-6 lg:py-5 md:py-4 sm:py-3 xs:py-2 bg-bglight border-b-2 border-gold">
        <span className="2xl:text-xl xl:text-lg lg:text-md md:text-sm sm:text-xs xs:text-xs font-agrandir-wide leading-relaxed inline-block mr-4 px-5 whitespace-nowrap uppercase text-white">MICROTONAL SYNTHESIZER PROJECT</span>
          <span className="2xl:mr-10 xl:mr-9 lg:mr-8 md:mr-7 sm:mr-6 xs:mr-5">
            <NavLink to="/learn" end><div className="hover:underline">LEARN</div></NavLink>
            <NavLink to="/play"><div className="hover:underline">PLAY</div></NavLink>
            <NavLink to="/download"><div className="hover:underline">DOWNLOAD</div></NavLink>
            <NavLink to="/contact"><div className="hover:underline">CONTACT</div></NavLink>
          </span>
      </nav>

      <Outlet />
    </>
  )
}

