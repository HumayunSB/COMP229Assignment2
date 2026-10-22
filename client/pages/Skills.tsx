// -----------------------------------------------------------------------------
// Skills.tsx — the /skills page.
// -----------------------------------------------------------------------------
import './Skills.css';

const HARD_SKILLS = [
  'Data Analysis: Python / R / SQL',
  'Machine Learning: TensorFlow / Keras / Scikit-learn',
  'Visualization: Tableau / Power BI / SAS VA',
  'Web Development: HTML / CSS / Javascript',
  'Coding: Java / C#',
  'Cloud Technologies: AWS / Azure',
  'MS Office',
  'Project Management: Jira / MS Project.'
];

const SOFT_SKILLS = [
  'Leadership',
  'Teamwork',
  'Coaching & Mentoring',
  'Effective Communication',
  'Problem-Solving',
  'Analytical',
  'Decision-Making',
  'Empathy',
  'Visionary Thinking',
  'Initiative'
];

export default function Skills() {
  return (
    <section className="skills-page mx-auto max-w-4xl">
      <div className="skills-page-heading rounded-lg shadow-md">
        <h1 className="section-title">Skills</h1>
      </div>

      <div className="skills-page-lists mt-6 grid gap-4 md:grid-cols-2">
        <div className="card transition-transform duration-200 hover:-translate-y-1">
          <h2 className="mb-4">Hard Skills</h2>
          <ul className="list-disc pl-5 m-0 grid gap-2 text-text leading-relaxed">
            {HARD_SKILLS.map((skill) => (
              <li key={skill} className="pl-1">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="card transition-transform duration-200 hover:-translate-y-1">
          <h2 className="mb-4">Soft Skills</h2>
          <ul className="list-disc pl-5 m-0 grid gap-2 text-text leading-relaxed">
            {SOFT_SKILLS.map((skill) => (
              <li key={skill} className="pl-1">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}