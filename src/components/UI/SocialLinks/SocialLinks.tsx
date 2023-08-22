import cl from './SocialLinks.module.css'

import Twitter from '../../../assets/Twitter-icon-orange.svg'
import Instagram from '../../../assets/Instagram-icon-orange.svg'
import LinkedIn from '../../../assets/LinkedIn-icon-orange.svg'
import messageIcon from '../../../assets/message-icon.svg'

const SocialLinks = () => {

    return (
      <div className={cl.socialLinks__wrapper}>
           <div className={cl.socialLinks__wrapper__media}>
                <img src={Twitter} alt="Twitter" />
                <img src={Instagram} alt="Instagram" />
                <img src={LinkedIn} alt="LinkedIn" />
           </div>
           <div className={cl.socialLinks__wrapper__messageIcon}>
                <img src={messageIcon} alt="" />
           </div>
      </div>
    );
};

export default SocialLinks;