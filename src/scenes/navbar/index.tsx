import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/files/types";
import useMediaQuery from "@/hooks/useMedia";
import ActionButton from "@/files/ActionButton";

type Props = {
  isTopPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Index = ({ isTopPage, selectedPage, setSelectedPage }: Props) => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const FlexString = "flex items-center justify-between";
  const aboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const navBackground = isTopPage ? "" : "bg-primary-100 drop-shadow"
  return (
    <nav>
      <div className={`${navBackground} ${FlexString} fixed top-0 z-30 w-full py-6`}>
        <div className={`${FlexString} mx-auto w-5/6`}>
          <div className={`${FlexString}  w-full gap-16`}>
            {/* left */}
            <img alt="logo" src={Logo} />

            {/* right side */}
            {aboveMediumScreens ? (
              <div className={`${FlexString} w-full `}>
                <div className={`${FlexString} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${FlexString} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2 text-white "
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                <Bars3Icon className="h-6 w-5 " />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* mobile menu view */}
      {!aboveMediumScreens && toggleMenu && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* Close Icon */}
          <div className="flex justify-end p-12">
            <button onClick={() => setToggleMenu(!toggleMenu)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          {/* menu */}
          <div className='ml-[33%] flex flex-col gap-10 text-2xl'>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
        </div>
      )}
    </nav>
  );
};

export default Index;
