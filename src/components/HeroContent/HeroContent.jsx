import './HeroContent.scss';

import { BsChatSquareDots } from 'react-icons/bs';
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
            <BsChatSquareDots />
            <a href="/contact">Let's Talk</a>
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
