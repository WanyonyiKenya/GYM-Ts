export  enum SelectedPage {
            Home = "home",
            Benefits= "benefits",
            OurClasses = "ourclasses",
            ContactUs = "contactus"
  }

  export interface BenefitType {
    icon:JSX.Element
    title:string
    description:string
  }
  export interface ClassTypes {
    name:string
    description?:string  //makes the descriptio field optional, 
    image:string
  }