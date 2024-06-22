import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/amirkhan" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/amirkhan/" },
  { icon: <FaTwitter />, path: "https://twitter.com" },
  { icon: <FaYoutube />, path: "https://youtube.com" },
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
