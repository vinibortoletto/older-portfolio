import React, { useEffect } from "react";

// Images
import logo1 from "../../../images/projects/1/logo.svg";
import bg1 from "../../../images/projects/1/bg.jpg";

import logo2 from "../../../images/projects/2/logo.png";
import bg2 from "../../../images/projects/2/bg.jpg";

import logo3 from "../../../images/projects/3/logo.svg";
import bg3 from "../../../images/projects/3/bg.jpg";

import logo4 from "../../../images/projects/4/logo.svg";
import bg4 from "../../../images/projects/4/bg.jpg";

import logo5 from "../../../images/projects/5/logo.svg";
import bg5 from "../../../images/projects/5/bg.jpg";

import logo6 from "../../../images/projects/6/logo.svg";
import bg6 from "../../../images/projects/6/bg.jpg";

// Components
import Title from "../../../components/Title";
import ProjectCard from "../../../components/ProjectCard";

// Styles
import { Container } from "./styles";

function Projects({ lang }) {
  const dataEn = [
    {
      logo: logo1,
      bg: bg1,
      text: "Best quality pet food, acessories and health care",
      website: "https://marinho-agropecuaria.netlify.app/",
      github: "https://github.com/vinibortoletto/marinho-agropecuaria",
    },
    {
      logo: logo2,
      bg: bg2,
      text: "Logistics and solutions for public and road transportation ",
      website: "https://viacao-trevisan.netlify.app/",
      github: "https://github.com/vinibortoletto/ui-clone-viacao-trevisan",
    },
    {
      logo: logo3,
      bg: bg3,
      text: "Sustainable and minimalist clothing",
      website: "https://simplesmente.netlify.app/",
      github: "https://github.com/vinibortoletto/simples-mente",
    },
    {
      logo: logo4,
      bg: bg4,
      text: "Personal assistant service and expert help",
      website: "https://vital-ajuda.netlify.app/",
      github: "https://github.com/vinibortoletto/vital-ajuda",
    },
    {
      logo: logo5,
      bg: bg5,
      text: "Front-end web developer portfolio",
      website: "https://neo-dev.netlify.app/",
      github: "https://github.com/vinibortoletto/neo",
    },
    {
      logo: logo6,
      bg: bg6,
      text: "Digital fantasy artist bringing ideas to life",
      website: "https://ilustrador-digital.netlify.app/",
      github: "https://github.com/vinibortoletto/ilustrador-digital",
    },
  ];

  const dataBr = [
    {
      logo: logo1,
      bg: bg1,
      text: "Melhor qualidade em rações, acessórios e cuidados para animais",
      website: "https://marinho-agropecuaria.netlify.app/",
      github: "https://github.com/vinibortoletto/marinho-agropecuaria",
    },
    {
      logo: logo2,
      bg: bg2,
      text: "Logística e soluções para transportes públicos e rodoviários ",
      website: "https://viacao-trevisan.netlify.app/",
      github: "https://github.com/vinibortoletto/viacao-trevisan",
    },
    {
      logo: logo3,
      bg: bg3,
      text: "Roupas minimalistas e sustentáveis",
      website: "https://simplesmente.netlify.app/produtos.html",
      github: "https://github.com/vinibortoletto/simples-mente",
    },
    {
      logo: logo4,
      bg: bg4,
      text: "Serviçoes de assistênte pessoal e ajuda exclusiva",
      website: "https://vital-ajuda.netlify.app/",
      github: "https://github.com/vinibortoletto/vital-ajuda",
    },
    {
      logo: logo5,
      bg: bg5,
      text: "Criador e desenvedor front-end",
      website: "https://neo-dev.netlify.app/",
      github: "https://github.com/vinibortoletto/neo",
    },
    {
      logo: logo6,
      bg: bg6,
      text: "Ilustrador digital dando vida a ideias",
      website: "https://ilustrador-digital.netlify.app/",
      github: "https://github.com/vinibortoletto/ilustrador-digital",
    },
  ];

  return (
    <Container>
      <Title text={lang === "en" ? "recent projects" : "projetos recentes"} />

      {lang === "en"
        ? dataEn.map((item, index) => (
            <ProjectCard
              key={index}
              logo={item.logo}
              bg={item.bg}
              text={item.text}
              website={item.website}
              github={item.github}
              lang={lang}
            />
          ))
        : dataBr.map((item, index) => (
            <ProjectCard
              key={index}
              logo={item.logo}
              bg={item.bg}
              text={item.text}
              website={item.website}
              github={item.github}
              lang={lang}
            />
          ))}
    </Container>
  );
}

export default Projects;
