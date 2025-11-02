import { useState } from "react";
// CORRECTED: The path goes up from 'pages' to 'assets', then down to 'img/svg'.
import about from "../img/svg/about.svg";
import { FAQs, aboutContent } from "../../constants"; // Path also needs correction
import FAQ from "../../components/FAQ"; // Path also needs correction

const About = () => {
  const [visibleSection, setVisibleSection] = useState("");
  return (
    <div className="container">
      <h2 className="heading-text">About Us!</h2>
      <img className="display-img-md mbottom10" src={about} alt="About us graphic" />
      <h3 className="subheading-text">{aboutContent.title}</h3>
      <p className="paragraph">{aboutContent.description}</p>
      <div className="FAQ">
        <h3 className="subheading-text mtop10">Frequently Asked Questions</h3>
        {FAQs.map((FAQContent) => (
          <FAQ
            key={FAQContent.id}
            {...FAQContent}
            isVisible={visibleSection === FAQContent.id}
            setIsVisible={(display) => {
              setVisibleSection(display ? FAQContent.id : "");
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default About;