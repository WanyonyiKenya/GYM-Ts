import React,{useState, useEffect} from 'react';
import {Bars3Icon, XmarkIcon} from '@heroicons/react'
import Logo from "@/assets/Logo.png"

type Props = {}

const Index = (props:Props) => {
    const FlexString = "flex items-center justify-between"
  return (
    <nav>
        <div
          className={`${FlexString} fixed top-0 z-30 w-full py-6`}
        >
            <div className={`${FlexString} mx-auto w-5/6`}>
                <div className={`${FlexString}  w-full gap-16`}>
                    {/* left */}
                    <img
                        alt='logo'
                        src={Logo}
                    />

                    {/* right side */}
                    <div className={`${FlexString} w-full `}></div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Index