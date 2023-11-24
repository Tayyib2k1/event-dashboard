"use client"
import Image from "next/image"
import NavBar from "./components/nav-bar"
import SideBar from "./components/side-bar"
import EventList from "./components/event-list"
import CountsCards from "./components/counts-cards"
import UpcomingEvents from "./components/upcoming-events"
import TopEvent from "./components/top-event"
import SideBarMobile from "./components/side-bar-mobile"
import FavouriteEvents from "./components/fav-events"

import { useState, useEffect } from "react"


export default function Home() {
  const [selected, setSelected] = useState('grid')
  const [displaySideBar, setDisplaySideBar] = useState(false)
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 640;
  // const breakpoint = 910;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <>
      <NavBar toggleSidebar={setDisplaySideBar} />
      {displaySideBar && <SideBarMobile toggleSidebar={setDisplaySideBar} changeSelected={setSelected} />}
      <div className="flex clear-both h-fit flex-col-reverse sm:flex-row items-start justify-end sm:justify-start bg-slate-100 pt-6">
        {width < breakpoint && selected == 'grid' && <TopEvent />}
        <SideBar selected={selected} changeSelected={setSelected} />
        {selected == 'grid' ? <>
          <div className="sm:w-4/6 h-[80vh] w-full">
            <EventList />
            <CountsCards />
          </div>
          <div className="flex flex-col sm:block w-full sm:w-96 h-fit items-center px-6 mb-3 sm:mb-0">
            <UpcomingEvents />
            {width >= breakpoint && <TopEvent />}
          </div>
        </> : selected == 'heart' ? <>
          <FavouriteEvents />
        </> : <></>}

      </div>
    </>
  )
}
