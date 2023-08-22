import cl from './Header.module.css'
import logo from '../../assets/LLI4U-logo-header.svg'
import logo2 from '../../assets/LLI4U-logo-footer.svg'

import MyButton from '../UI/Button/MyButton'
import { useState } from 'react'
import SocialLinks from '../UI/SocialLinks/SocialLinks'
import Typography from '../UI/Typography/Typography'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <>
        <header style={{display: showMenu ? 'none' : 'flex'}} className={cl.header__container}>
            <span className={cl.image__helper}>
            <img src={logo} alt="" className={cl.header__logo} />
            </span>
            <span
                onClick={() => setShowMenu(!showMenu)}
                className={cl.header_hamburger}>
                <span className={cl.hamburger__lines}></span>
                <span className={cl.hamburger__lines__short}></span>
                <span className={cl.hamburger__lines}></span>
            </span>

            <nav className={cl.header_navigation}>
                <Typography variant='body1'>
                    <ul className={cl.navigation__list}>
                        <li className={cl.header__list__item}>Про курс</li>
                        <li className={cl.header__list__item}>Програма</li>
                        <li className={cl.header__list__item}>Куратори</li>
                    </ul>
                </Typography>
            </nav>

            <MyButton>Проконсультувати мене</MyButton>
        </header>
            {showMenu && (
                    <HeaderHamburgerMenu
                        setShowMenu={setShowMenu}
                        showMenu={showMenu}
                    />
                )}
        </>
    )
}

export default Header

interface HeaderHamburgerMenuProps {
    setShowMenu: (arg: boolean) => void
    showMenu: boolean
}

const HeaderHamburgerMenu = ({setShowMenu,showMenu,}: HeaderHamburgerMenuProps) => {

    return (
        <header className={cl.hamburger}>
            <div className={cl.hamburger__container}>
                <img src={logo2} alt="" className={cl.header__logo} />

                <span
                    onClick={() => setShowMenu(!showMenu)}
                    className={cl.hamburger_hamburger}>
                    <span className={`${cl.hamburger__line} ${cl.hamburger__line__close1}`}></span>
                    <span className={`${cl.hamburger__line} ${cl.hamburger__lines__close2}`}></span>
                </span>
            </div>

            <nav className={cl.hamburger__navigation}>
                <Typography variant='body1'>
                    <ul className={cl.navigation__list}>
                        <li className={`${cl.hamburger__list__item} body__text__1 `}>Про курс</li>
                        <li className={`${cl.hamburger__list__item} body__text__1 `}>Програма</li>
                        <li className={`${cl.hamburger__list__item} body__text__1 `}>Куратори</li>
                    </ul>
                </Typography>
            </nav>

            <MyButton>Проконсультувати мене</MyButton>

            <div className={cl.socialLinks__wrapper}>
                <SocialLinks />
            </div>
        </header>
    )
}
