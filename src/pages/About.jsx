import { useState } from "react";
// This is the definitive correct path for your structure
import about from "../assets/img/svg/about.svg";
import { FAQs, aboutContent } from "../constants";
import FAQ from "../components/FAQ";

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