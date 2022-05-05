import './About.scss';

import { Icon } from '@mdi/react';
import {
  mdiSpeedometer,
  mdiCellphoneLink,
  mdiRocket,
  mdiLightbulbOutline,
} from '@mdi/js';
import SkillsCarousel from '../../components/3DCarousel/SkillsCarousel';

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about__header">
        <h2>About</h2>
      </div>
      <div className="services">
        <div className="hexagon-wrapper">
          <div className="hexagon">
            <Icon path={mdiSpeedometer} color="white" title="fast & reliable" />
          </div>

          <h3>Fast</h3>
          <p>
            Fast load times and lag free interactions are my highest priority
          </p>
        </div>

        <div className="hexagon-wrapper">
          <div className="hexagon">
            <Icon
              path={mdiCellphoneLink}
              color="white"
              title="fast & reliable"
            />
          </div>

          <h3>Responsive</h3>
          <p>My layouts will work on any device, big or small</p>
        </div>

        <div className="hexagon-wrapper">
          <div className="hexagon">
            <Icon
              path={mdiLightbulbOutline}
              color="white"
              title="responsive design"
            />
          </div>

          <h3>Intuitive</h3>
          <p>Strong preference for easy to use, intuitive UX/UI</p>
        </div>

        <div className="hexagon-wrapper">
          <div className="hexagon">
            <Icon path={mdiRocket} color="white" title="fast & reliable" />
          </div>

          <h3>Dynamic</h3>
          <p>
            Websites don't have to be static, I love making pages come to life
          </p>
        </div>
      </div>

      <div className="about" id="About">
        <div className="about__content">
          <div className="profile-image hexagon"></div>
          <div>
            <h2 className="about__content-heading">Me, Myself & I</h2>
            <p className="about__content-paragraph">
              I'm a Full stack Javascript developer located in Canada. I focus
              on giving users a creative, intuitive and dynamic experience.
            </p>
            <p className="paragraph2">
              I am a well-organized person, problem solver, independent
              developer with high attention to detail.
            </p>
          </div>
        </div>

        <div className="about__skills">
          <SkillsCarousel />
        </div>
      </div>
    </div>
  );
};

export default About;
