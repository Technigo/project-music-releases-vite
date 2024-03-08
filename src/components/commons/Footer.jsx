import "./Footer.css";
import instagram from "../../assets/social/instagram.svg";
import github from "../../assets/social/github.svg";
import linkedin from "../../assets/social/linkedIn.svg";

export const Footer = () => {
  const socialInfo = [
    {
      id: "linkedin",
      link: "https://www.linkedin.com/in/pernilla-sterner/",
      icon: linkedin,
      alt: "Linkedin",
    },
    {
      id: "github",
      link: "https://github.com/pernillasterner",
      icon: github,
      alt: "GitHub",
    },
    {
      id: "instagram",
      link: "https://www.instagram.com/pernillasterner.se/",
      icon: instagram,
      alt: "Instagram",
    },
  ];

  const renderFooter = socialInfo.map((social) => (
    <a
      key={social.id}
      href={social.link}
      target="__blank"
      rel="noopener noreferrer"
    >
      <img src={social.icon} alt={social.alt} />
    </a>
  ));

  return <footer>{renderFooter}</footer>;
};
