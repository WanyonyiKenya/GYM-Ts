import { ClassTypes, SelectedPage } from '@/files/types'
import React from 'react'
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import {motion} from "framer-motion"
import Heading from '@/files/Heading'
import Class from  "./Class"

const classes: Array<ClassTypes> = [
    {
        name:"Weight Training Classes",
        description:'This class will focus on the basics of weight lifting. Topics covered will include: toning vs. building, theory of program design, training with dumbbells, selectorized equipment, free weight exercises for all muscle groups, flexibility, and proper nutrition for weight training.',
        image: image1
    },
    {
        name:"Yoga and Aerobics Classes",
        description:' slow-paced flow through physical dynamic movements focused on proper alignment and breathing, this type of practice is great for easing anxiety, improving your balance, as well as improving your fitness and stamina. During our classes, you can expect to move through a variety of poses that are great for all levels.',
        image: image2
    },
    {
        name:"Ab-Core Classes",
        description:'Targeting your upper body, this class is designed to strengthen your shoulders, biceps, triceps and back muscles. This class consists of weight training combined with functional core exercises to increase muscular strength and fitness. You can expect a lower impact, high strength class through various exercises and timed blocks.',
        image: image3
    },
    {
        name:"Adventure Classes",
        image: image4
    },
    {
        name:"Fitness Classes",
        description:'This class is designed for participants of all fitness levels and will challenge all major muscle groups using traditional strength training exercises and a variety of equipment. We will use circuits as well as group formats to encourage you to go a little further and feel stronger with each class.',
        image: image5
    },
    {
        name:" Training Classes",
        description:'This class is a mix of dynamic and static stretching to get the body moving while allowing for some recovery of muscle aches, soreness, and tightness. Whether you join the class after a hard workout or after a long day at a desk, the stretches and movements will provide some flexibility and a reset for your body',
        image: image6
    }
]

type Props = {
    setSelectedPage:(value:SelectedPage)=>void
}

const Index = ({setSelectedPage}: Props) => {
  return (
    <section
        id='ourclasses' className='w-full bg-primary-100 py-40'
    >
        <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.OurClasses)}>
            <motion.div 
                className='mx-auto w-5/6'
                initial = "hidden"
                whileInView="visible"
                viewport={{once:true, amount:0.5}}
                transition = {{ duration: 0.75}}
                variants = {{
                  hidden: {opacity: 0, x:-50},
                  visible:{ opacity:1, x: 0}
                }}
            >
                <div className='md:w-3/5'>
                    <Heading>Our Classes</Heading>
                    <p className='py-5 '>
                    There is no doubt that there is some value in requiring people to participate in gym classes. A Gym class has a respectable
                     mission: “The healthy, physically active member is more likely to be productive, motivated, alert, and successful,”
                      However, some question whether going to the Gym is effective and if its value is worth the time and resources, I advise you to visit
                      Evo Gym,it is not worth time and resources, it is worth a { " "}
                      <span className='text-bold text-primary-500'>LIFETIME</span>
                    </p>
                </div>
            </motion.div>
            <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
                <ul className='w-[2800px] whitespace-nowrap'>
                    {
                        classes.map((item:ClassTypes, index)=> (
                            <Class
                                key= {`${item.name}-${index}`}
                                name = {item.name}
                                image = {item.image}
                                description = {item.description}
                            />
                        ))
                    }
                </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default Index