import { SelectedPage } from '@/files/types'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    page:string
    selectedPage:SelectedPage
    setSelectedPage: (value:SelectedPage) => void
}

const Link = ({page,selectedPage, setSelectedPage}:Props) => {

    const lower = page.toLowerCase().replace(/ /g, "") as SelectedPage //removes any space between two words to act as akey

  return (
    <AnchorLink
        className = {`${selectedPage === lower ? "text-primary-500" : ""}
        transition duration-500 hover:text-primary-300
        `}
        href={`#${lower}`}
        onClick = {()=>setSelectedPage(lower)}
    >
        {page}
    </AnchorLink>
  )
}

export default Link