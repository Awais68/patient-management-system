import * as React from "react";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="w-[80%] mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="ml-3 text-3xl font-serif">EasyAppintment </span>
            <span className="ml-3 text-gray-400 mt-2">Just a Click Away </span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            {/* <Link  className="mr-5 hover:text-blue-500">Home</Link >
            <Link href={"/doctors"}  className="mr-5 hover:text-blue-500">Doctors</Link >
            <Link  className="mr-5 hover:text-blue-500">Hospital Facilities </Link >
            <Link  className="mr-5 hover:text-blue-500">Contact Us </Link >
             <Link href={"/About"} >About Us </Link> */}
          </nav> 

          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>DAS</MenubarTrigger>
              <MenubarContent>
                <Link href={"/profile"}>
                <MenubarItem>
                  Profile <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem></Link>
                <Link href={"/appointment"}>
                <MenubarItem>My Appointment </MenubarItem>
                <MenubarSeparator /></Link>
                <MenubarItem>Logout </MenubarItem>
                <MenubarSeparator />
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </header>
    </>
  );
}
