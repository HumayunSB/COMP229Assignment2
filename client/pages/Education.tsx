// -----------------------------------------------------------------------------
// Education.tsx — the /education page.
// Author: Humayun Butt
//
// Concepts introduced here:
//   • Deriving a value inside `.map()` before returning JSX. When the callback
//     needs a local variable, use a full function body with `return (...)`
//     instead of the concise arrow form `(x) => (...)`.
//   • Ternary expression `cond ? a : b` for picking between two values inline.
//   • Semantic HTML: <ol> ("ordered list") is used because the timeline has a
//     meaningful order (most recent first). Assistive tech announces it as a
//     numbered list.
// -----------------------------------------------------------------------------

type Qualification = {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startYear: number;
  endYear: number;
  detail: string;
  note?: string;
};

const QUALIFICATIONS: Qualification[] = [
  {
    id: 'centennial-ai',
    degree: 'Software Engineering Technology - Artificial Intelligence',
    institution: 'Centennial College',
    location: 'Toronto, Ontario, Canada',
    startYear: 2022,
    endYear: 2025,
    detail: 'Ontario College Advanced Diploma Program',
    note: 'September 2022 – Present'
  },
  {
    id: 'georgian-ai',
    degree: 'Artificial Intelligence – Architecture, Design, and Implementation',
    institution: 'Georgian College',
    location: 'Barrie, Ontario, Canada',
    startYear: 2020,
    endYear: 2021,
    detail: 'Ontario College Graduate Certificate program',
    note: 'Sept. 2020 – August 2021'
  },
  {
    id: 'dsu',
    degree: 'Business Analytics Certificate',
    institution: 'Dakota State University',
    location: 'Madison, South Dakota, U.S.A.',
    startYear: 2018,
    endYear: 2019,
    detail: 'Awards/Accomplishments: Graduated with Honours',
    note: 'Sept. 2018 – December 2019'
  },
  {
    id: 'umich',
    degree: 'Bachelor of Arts – Economics & Political Science',
    institution: 'University of Michigan',
    location: 'Ann Arbor, Michigan, U.S.A.',
    startYear: 1992,
    endYear: 1994,
    detail: '',
    note: 'Sept. 1992 – June 1994'
  }
];

export default function Education() {
  return (
    <section>
      <h1 className="section-title">Education</h1>
      <p className="lead">
        Formal qualifications and certifications, most recent first.
      </p>

      <ol className="list-none p-0 mt-6 grid gap-4">
        {QUALIFICATIONS.map((item) => {
          const yearLabel =
            item.startYear === item.endYear
              ? `${item.startYear}`
              : `${item.startYear} – ${item.endYear}`;

          return (
            <li
              key={item.id}
              className="card grid gap-5 items-start grid-cols-1 sm:grid-cols-[140px_1fr]"
            >
              <div className="font-bold text-accent text-[1.05rem]">{yearLabel}</div>
              <div>
                <h3 className="mb-1">{item.degree}</h3>
                <p className="text-text mb-1">{item.detail}</p>
                <p className="text-text mb-1">{item.institution}, {item.location}</p>
                {item.note && <p className="mb-0 text-muted">{item.note}</p>}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
