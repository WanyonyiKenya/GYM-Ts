import Logo from "@/assets/Logo.png"

const Index = () => {
  return (
    <footer className="md:flex items-center justify-between bg-primary-300 p-10">
        
        <div className="py-5 md:w-1/2 p-10">
            <img
                src={Logo}
            />
            <p className="my-5">
            Anyone of any skill level can attend our classes! Our instructors are skilled at adpating the class specific to your abilities,
            new Registration is only required for Cycle classes.Members who Arrive 5-10 minutes early are likely to get a spot,
            obe reminded that classes are 45-minutes unless otherwise noted. To all new members introduce yourself to the instructor,
            they LOVE to meet their participants!. Last and not Least HAVE FUN! 
            </p>
            <p>&copy; Evo2023</p>
        </div>
        <div className="gap-5 mb-10 flex flex-col md:w-1/4 ml-0">
            <h3 className="font-bold font-montserrat text-center">Links</h3>
            <button>Facebook</button>
            <button>Twitter</button>
            <button>Linkedin</button>
        </div>
        <div className="gap-5 mb-10 pb-10 md:w-1/4">
            <h3 className="font-bold font-montserrat mb-5">Contact us</h3>
            <p className="w-full mb-5">Our hotline service is 24/7</p>
            <p>(254)786134012</p>
        </div>
    </footer>
  )
}

export default 
Index