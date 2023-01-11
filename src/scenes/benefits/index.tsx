import React from 'react'
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon
} from "@heroicons/react/24/solid"
import useMediaQuery from '@/hooks/useMedia'
import { BenefitType, SelectedPage } from '@/files/types'
import { motion } from "framer-motion"
import Heading from '@/files/Heading'
import Benefit from './Benefit'
import ActionButton from '@/files/ActionButton'

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className='h-6 w-6' />,
        title: "State of Art facilities",
        description: "We have leading gym facilities, clean and medically certified gym services. The Gyms available globally conform to the health and sport rules and regulations as stated ny the individual states."
    },
    {
        icon: <UserGroupIcon className='h-6 w-6' />,
        title: "100's  of Diverse classes",
        description: "What distinguishes Evo from other Gyms is the way classes are made to suit your needs as our customer. 100% customer consulted classes."
    },
    {
        icon: <AcademicCapIcon className='h-6 w-6' />,
        title: "Expert and Pro Trainers",
        description: "The price of quality is expensive and thats what we implement here at Evo, We have proffessional trainers that have can aid you to achieve your fitness target quickly."
    }
]

const stagger = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Index = ({ setSelectedPage }: Props) => {
    return (
        <section
            id='benefits'
            className='mx-auto min-h-full w-5/6 py-20'
        >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            >
                {/* Heading section */}
                <div className='md:my-5 md:w-3/5'>
                    <Heading>More than a Gym</Heading>
                    <p className='my-5 text-sm '>
                        we offer world call gym services.We have the best and latest exercise equipments
                        with the trainers you need; they are all proffessional.The classes we have
                        created get you to your ultimate fitness goal with ease. We also have a free medical center
                        available in all our gym branches.
                        We specialize in quality, care and body goals
                    </p>
                </div>
                {/* benefits section */}
                <motion.div className='md:flex items-center justify-between gap-8 mt-5'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={stagger}
                >
                    {
                        benefits.map((benefit) => (
                            <Benefit
                                key={benefit.title}
                                icon={benefit.icon}
                                title={benefit.title}
                                description={benefit.description}
                                setSelectedPage={setSelectedPage}
                            />
                        ))
                    }
                </motion.div>
                {/* image and desc */}
                <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
                    {/* image */}
                    <img
                        className='mx-auto '
                        alt='benefitsimage'
                        src={BenefitsPageGraphic}
                    />

                    {/* desc */}
                    <div>
                        <div className='relative'>
                            <div className='before:absolute before:-top-20 before:-left-20 before:z[1] before:content-abstractwaves'>
                                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition = {{ duration:0.5}} variants={{ hidden: { opacity: 0, x:50 }, visible: { opacity: 1, x: 0 } }}>
                                    <Heading>
                                        LET US GET FIT TOGETHER,YOUR FITNESS GOALS IS OUR  {" "}
                                        <span className='text-primary-500'>ULTIMATUM</span>
                                    </Heading>
                                </motion.div>
                            </div>
                        </div>

                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition = {{delay:0.2, duration:0.5}} variants={{ hidden: { opacity: 0, x:50 }, visible: { opacity: 1, x: 0 } }}>
                            <p className='my-5'>Exercising regularly, every day if possible, is the single most important thing you can do for your health.
                                In the short term, exercise helps to control appetite, boost mood, and improve sleep. In the long term,
                                it reduces the risk of heart disease, stroke, diabetes, dementia, depression, and many cancers.
                                When it comes to exercise and fitness for seniors, most can begin without consulting a doctor—but there are exceptions.
                                If you have a major health condition like diabetes, high blood pressure, heart or lung disease, osteoprosis or a neurological disease,
                                definitely talk to your doctor first. People with mobility issues such as poor balance or arthritis should also get advice from their doctor.
                            </p>
                            <p className='mb-5'>
                                What can improve your mood, boost your ability to fend off infection, and lower your risk for heart disease,
                                diabetes, high blood pressure, and colon cancer? The answer is regular exercise. It may seem too good to be true, but it's not.
                            </p>
                        </motion.div>

                        <div className='relative mt-16'>
                            <div className='before:absolute before:-bottom-20 before:right-40 rfore:-z[-1] before:content-sparkles'>
                                <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                            </div>
                        </div>

                    </div>
                </div>
            </motion.div>
        </section >
    )
}

export default Index