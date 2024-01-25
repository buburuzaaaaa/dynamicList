import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Accordion = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const toggleAccordion = (sectionIndex) => {
    setActiveSection(activeSection === sectionIndex ? null : sectionIndex);
  };

  const accordionData = [
    {
      title: 'Hobbies',
      content: 'I love working on cars, I go to the gym and I am training to become a firefighter',
    },
    {
      title: 'School',
      content: 'I attend Mountain Ridge HighSchool and west-mec NEC',
    },
  ];

  const handleAccordionClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`accordion-container ${expanded ? 'expanded' : ''}`} onClick={handleAccordionClick}>
      <div className="accordion">
        {accordionData.map((section, index) => (
          <div key={index} className="accordion-section">
            <div className="accordion-header" onClick={() => toggleAccordion(index)}>
              <h3>{activeSection === index ? <FaMinus /> : <FaPlus />} {section.title}</h3>
            </div>
            {activeSection === index && (
              <div className="accordion-content">
                <p>{section.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
