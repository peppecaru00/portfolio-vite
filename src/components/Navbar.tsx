import '../styles/components/navbar.css'
import NavButton from './NavButton'

function Navbar() {
    return (
        <div className="navbar">
            <NavButton href="/" pageName="home" />
            <NavButton href="/designs" pageName="designs" />
            <NavButton href="/photos" pageName="photos" />
            <NavButton href="/videos" pageName="videos" />
        </div>
    )
}
export default Navbar;