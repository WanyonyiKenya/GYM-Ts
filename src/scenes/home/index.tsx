import React from 'react'
import { SelectedPage } from '@/files/types'
import ActionButton from '@/files/ActionButton'
import useMediaQuery from '@/hooks/useMedia'
import HomePageText from "@/assets/HomePageText.png"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'




type Props = {
    setSelectedPage: (value:SelectedPage)=>void
}

const Index = ({setSelectedPage}: Props) => {
    const aboveMediumScreens = useMediaQuery('(min-width:1060px)')

  return (
    <section
          id='home'
          className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'
      >
          {/* image and main header */}
          <motion.div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
                      onViewportEnter={()=>setSelectedPage(SelectedPage.Home)}
          >
              {/* page header */}
              <div className='z-10 mt-32 md:basis-3/5' >
                  {/* headings */}
                  <motion.div className=' md:-mt-20'
                              initial = "hidden"
                              whileInView="visible"
                              viewport={{once:true, amount:0.5}}
                              transition = {{duration: 2.5}}
                              variants = {{
                                hidden: {opacity: 0, x:-75},
                                visible:{ opacity:1, x: 0}
                              }}
                  >
                      <div className='relative'>
                          <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext'>
                              <img alt='homepage' src={HomePageText} />
                          </div>
                      </div>
                      <p className='mt-8 text-sm '>
                          Come and feel the thrill,pain, fun and results of working out with us
                          We are the Leading Gym Enterprise around the Globe.Be sure to check for
                          our services in your nearby town.
                      </p>
                  </motion.div>

                  {/* action buttons */}
                  <motion.div className='mt-8 flex items-center  gap-8'
                              initial = "hidden"
                              whileInView="visible"
                              viewport={{once:true, amount:0.5}}
                              transition = {{ delay:0.2, duration: 2.5}}
                              variants = {{
                                hidden: {opacity: 0, x:-100},
                                visible:{ opacity:1, x: 0}
                              }}
                  >
                    <ActionButton  setSelectedPage={setSelectedPage}>
                        Join Us
                    </ActionButton>
                    <AnchorLink
                      className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
                      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                      href = {`#${SelectedPage.ContactUs}`}
                    >
                        <p>
                            Learn More
                        </p>
                    </AnchorLink>
                  </motion.div>
              </div>
                  {/*image  */}
                  <div className='flex basis-3/5 justify-center md:z-10
                        md:ml-40 md:mt-16 md:justify-items-end'>
                    <img alt='homepagegraphic' src={HomePageGraphic}/>
                  </div>
          </motion.div> 
          {
            aboveMediumScreens && (
                <div className = "h-[150px] w-full bg-primary-100 py-10">
                    <div className='mx-auto w-5/6'>
                        <div className = 'flex w-3/5 items-center justify-between gap-8'>
                            <img alt='redbull' src = {SponsorRedBull}/>
                            <img alt='forbes' src = {SponsorForbes}/>
                            <img alt='fortune' src = {SponsorFortune}/>
                        </div>
                    </div>
                </div>
            )
          }   
    </section>
  )
}
  export default Index;