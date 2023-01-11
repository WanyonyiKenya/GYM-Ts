import { SelectedPage } from '@/files/types'
import React from 'react'
import { useForm } from 'react-hook-form'
import {motion} from "framer-motion"
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
import Heading from '@/files/Heading'


type Props = {setSelectedPage:(value:SelectedPage)=> void

    }

const Index = ({setSelectedPage}: Props) => {
    const {
        register,
        trigger,
        formState:{errors}
    } = useForm()

    const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`


    const handleSubmit = async (e : any) => {

     
        const isValid = await trigger()
        if (!isValid){
            e.preventDefault()
        }
    }

  return (
    <section className='mx-auto w-5/6 pt-24 pb-32'>
        <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.ContactUs)}>
            <motion.div
                className='md:w-3/5'
                initial = "hidden"
                whileInView="visible"
                viewport={{once:true, amount:0.5}}
                transition = {{duration: 0.75}}
                variants = {{
                hidden: {opacity: 0, x:-75},
                visible:{ opacity:1, x: 0}
                }}
            >
                <Heading>
                    <span className='text-primary-500'>JOIN NOW</span> TO GET IN SHAPE
                </Heading>
                <p className='my-5'>
                    Join us and subscribe to our membership plan. We have introduced Group Fitness. All group fitness classes are included in your membership at no additional cost!
                    Group fitness classes are offered on a drop-in basis. You don't have to pre-register for group fitness 
                    and classes are filled on a first come first served basis.
                </p>
            </motion.div>
            {/* imade &form */}
            <div className='mt-10 justify-between gap-8 md:flex'>
                <motion.div
                  className='mt-10 basis-3/5 md:mt-0'
                  initial = "hidden"
                  whileInView="visible"
                  viewport={{once:true, amount:0.5}}
                  transition = {{duration: 0.75}}
                  variants = {{
                  hidden: {opacity: 0, y:50},
                  visible:{ opacity:1, x: 0}
                  }}
                >
                    <form
                      target='_blank'
                      onSubmit={handleSubmit}
                      method= "POST"
                      action='https://formsubmit.co/kruger@gmail.com'
                    >
                        <input
                            className={inputStyles}
                            type ='text'
                            placeholder='NAME'
                            {...register("name", {
                                required:true,
                                minLength:3
                            })}
                        />
                       { errors.name && (
                            <p className='mt-1 text-primary-500 '>
                               { errors.name.type === "required" && "This field is required."}
                               { errors.name.type === "minLength" && "Maimun length is 3 characters"}
                            </p>
                        )}
                        <input
                            className={inputStyles}
                            type ='text'
                            placeholder='EMAIL'
                            {...register("email", {
                                required:true,
                                pattern : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                        />
                       { errors.email && (
                            <p className='mt-1 text-primary-500 '>
                               { errors.email.type === "required" && "This field is required."}
                               { errors.email.type === "pattern" && "Enter a valid email address"}
                            </p>
                        )}
                        <textarea
                        className={inputStyles}
                        rows = {4}
                        cols = {50}
                        placeholder='MESSAGE'
                        {...register("message", {
                            required:true,
                            minLength:10
                        })}
                    />
                   { errors.message && (
                        <p className='mt-1 text-primary-500 '>
                           { errors.message.type === "required" && "This field is required."}
                           { errors.message.type === "minLength" && "Min char of 10"}
                        </p>
                    )}
                    <button type='submit' 
                        className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'
                    >
                        Submit
                    </button>
                    </form>
                </motion.div>
                <motion.div 
                  className='relative mt-16 basis-2/5  md:mt-0'
                   initial = "hidden"
                   whileInView="visible"
                   viewport={{once:true, amount:0.5}}
                   transition = {{duration: 0.75}}
                   variants = {{
                   hidden: {opacity: 0, y:50},
                   visible:{ opacity:1, x: 0}
                   }}
                >
                    <div className='md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]'>
                        <img
                            className='w-full'
                            alt='contact'
                            src={ContactUsPageGraphic}
                        />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default Index