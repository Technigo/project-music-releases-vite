import "./Footer.css";

export const Footer = () => {
  const socialInfo = [
    {
      id: "linkedin",
      link: "https://www.linkedin.com/in/pernilla-sterner/",
      icon: "./assets/social-icons/linkedIn.svg",
      alt: "Linkedin",
    },
    {
      id: "github",
      link: "https://github.com/pernillasterner",
      icon: "./assets/social-icons/github.svg",
      alt: "GitHub",
    },
    {
      id: "instagram",
      link: "https://www.instagram.com/pernillasterner.se/",
      icon: "./assets/social-icons/instagram.svg",
      alt: "Instagram",
    },
  ];

  const renderFooter = socialInfo.map((social) => (
    <a key={social.id} href={social.link}>
      <img src={social} alt={social.alt} />
    </a>
  ));

  return <footer>{renderFooter}</footer>;
};
