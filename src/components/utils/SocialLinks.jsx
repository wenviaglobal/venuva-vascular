import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { useSettings } from "../../context/ContentContext";

const SocialLinks= () => {
    const socialLinks = useSettings("social");
    const socialIcons = [
        { Icon: FaFacebook, link: socialLinks.facebook, color: '#0866FF' },
        { Icon: FaInstagram, link: socialLinks.instagram, color: '#FF0069' },
        { Icon: FaYoutube, link: socialLinks.youtube, color: '#FF0000' },
        { Icon: FaWhatsapp, link: socialLinks.whatsapp, color: '#25D366' }
    ].filter((s) => s.link);

    return (
        <div className="flex gap-4">
            {socialIcons.map(({ Icon, link, color }, i) => {
                const isWhatsApp = (link || '').includes('wa.me');
                return (
                    <a 
                      key={i} 
                      href={link} 
                      target={isWhatsApp ? "_self" : "_blank"} 
                      rel="noopener noreferrer"
                      className="transition-all duration-300 hover:-translate-y-1 hover:brightness-125"
                      style={{ color: color }}
                    >
                        <Icon size={24} />
                    </a>
                );
            })}
        </div>
    );
}

export default SocialLinks;