import { SocialIcon } from 'react-social-icons';

import './SocialIcons.scss'

const SocialIcons = () => {
    return (
        <div className="relative">
            <div className="flex gap-2 md:gap-5 pt-4 md:pt-3 place-content-center mr-3 z-20 ">
                <SocialIcon className="social-icon" style={{ height: 27, width: 27 }} network="github" url="https://github.com/leandrofiadone/" target="_blank"/>
                <SocialIcon className="social-icon" style={{ height: 27, width: 27 }} url="https://www.linkedin.com/in/leandro-fiadone/" target="_blank"/>
                <SocialIcon className="social-icon" style={{ height: 27, width: 27 }} network='whatsapp' url="https://wa.link/nwjb5i" target="_blank"/>
            </div>
            
        </div>
    )
}

export default SocialIcons;
