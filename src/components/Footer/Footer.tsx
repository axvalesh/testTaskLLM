import logo from '../../assets/LLI4U-logo-footer.svg'
import MyButton from '../UI/Button/MyButton'
import SocialLinks from '../UI/SocialLinks/SocialLinks'
import Typography from '../UI/Typography/Typography'
import cl from './Footer.module.css'

const Footer = () => {
    return (
        <div className={cl.container}>
            <div className={cl.first__part}>
            <img src={logo} alt="" />
            <Typography color='white' variant="body1">
                <ul className={cl.list__links}>
                    <ul>
                        <li>Про курс</li>
                        <li>Програма</li>
                        <li>Куратори</li>
                    </ul>
                    <ul>
                        <li>Про LLI4U</li>
                        <li>Команда LLI4U </li>
                        <li>Робота в LLI4U</li>
                    </ul>
                </ul>
            </Typography>
            <span className={cl.button__helper}>
            <MyButton>Проконсультувати мене</MyButton>
            </span>
            </div>
            <div className={cl.second__part}>
                <span className={cl.social__links}>
                    <SocialLinks />
                </span>

                <span className={cl.h6__first}>
                    <Typography variant="subtitle">Публічна оферта. Курси та Професіуми</Typography>
                </span>
                <span className={cl.h6__second}>
                <Typography variant="subtitle">
                    Політика
                    використання Cookie Політика конфіденційності
                </Typography>
                </span>
                <span className={cl.copyright}>
                    <Typography variant="subtitle">
                        ©2015-2023 LLI4U
                    </Typography>
                </span>
            </div>
        </div>
    )
}

export default Footer
