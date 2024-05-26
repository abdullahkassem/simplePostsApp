import PageTitle from "./PageTitle";
import UserPP from "./UserPP";
import HamburgerMenu from "../../public/HamburgerMenu"
export default function Header({title}) {
  return (
    <header>
        <UserPP/>
        <PageTitle title={title}/>
        <HamburgerMenu width= "30" height="30"/>
    </header>
  )
}
