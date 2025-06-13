import { motion } from 'framer-motion';

interface NavButtonProps {href: string, pageName: string}

function NavButton( {href, pageName}: NavButtonProps) {
    return (
        <motion.div whileHover={{ background: 'rgba(255,255,255,0.2)' }}
            className="nav-button"
            transition={{ duration: 0.1, type: "tween", bounce: .5 }}>
            <a href={href} className="navlink">{pageName}</a>
        </motion.div>
    )
}
export default NavButton;