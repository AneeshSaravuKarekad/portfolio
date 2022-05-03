import './HeroContent.scss';

import { FaGithub } from 'react-icons/fa';
import { AiOutlineDownload } from 'react-icons/ai';

const HeroContent = () => {
  return (
    <div className="hero-text__container">
      <div className="hero-text__container-inner">
        <h1 className="intro">Hi!, I'm Aneesh Saravu Karekad</h1>
        <span className="sub-intro">
          A creative Frontend engineer with proficient server side skills
        </span>

        <div className="cta-container">
          <button className="cta github">
            <FaGithub />
            <a href="https://github.com/AneeshSaravuKarekad" target="_blank">
              Github
            </a>
          </button>
          <button className="cta resume">
            <AiOutlineDownload size={20} />
            <a href="../../../resume.pdf" download="AneeshSaravuKarekad-Resume">
              Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
