import Link from 'next/link'

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa'

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/Amit-Dey' },
    { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/amitdey9020/' },
    { icon: <FaYoutube />, path: 'https://www.youtube.com/@CodeWith-Amit' },
    { icon: <FaTwitter />, path: 'https://x.com/Amitdey01346816' },
]

const Social = ({ containerStyles, iconStyles }: { containerStyles: string, iconStyles: string }) => {
    return <div className={containerStyles}>
        {socials.map((social, index) => (
            <Link key={index} href={social.path} className={iconStyles} target='blank'>
                {social.icon}
            </Link>
        ))}

    </div>

}

export default Social