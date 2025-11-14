// src/components/Resume.jsx

import Section from './Section';
import Education from './Education';

const Resume = ({ data }) => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>{data.name}</h1>
      <p>{data.email} | {data.phone} | {data.website}</p>

      <Section title="Profile">
        <p>{data.profile}</p>
      </Section>

      <Section title="Education">
        {data.education.map((edu, index) => (
          <Education key={index} {...edu} />
        ))}
      </Section>

      <Section title="Experience">
        {data.experience.map((exp, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <strong>{exp.position}</strong> — {exp.company} ({exp.year})
            <p>{exp.description}</p>
          </div>
        ))}
      </Section>

      <Section title="Skills">
        <ul>
          {data.skills.map((skill, index) => <li key={index}>{skill}</li>)}
        </ul>
      </Section>
    </div>
  );
};

export default Resume;
