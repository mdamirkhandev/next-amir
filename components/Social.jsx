import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/mdamirkhandev" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/amir-khan-aa7886156?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  { icon: <FaTwitter />, path: "#" },
  { icon: <FaYoutube />, path: "#" },
];
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link
          href={social.path}
          target="_blank"
          key={index}
          className={`${iconStyles}`}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
