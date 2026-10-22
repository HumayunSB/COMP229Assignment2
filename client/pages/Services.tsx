// -----------------------------------------------------------------------------
// Services.tsx — the /services page.
// Author: Humayun Butt
//
// Structurally almost identical to Projects.tsx: a constant array of objects
// mapped to card elements. The takeaway is that this list-of-cards pattern
// scales to almost any "gallery" page in a small site.
// -----------------------------------------------------------------------------
// Each service card uses a visual asset to communicate the kind of work quickly,
// while the copy below explains the actual offering in plain language.
import aiServiceImage from '../assets/artificial-intelligence.jpg';
import dataScienceImage from '../assets/data-science.jpg';
import analyticsServiceImage from '../assets/analytics.jpg';

type Service = {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    id: 'ai',
    title: 'AI',
    image: aiServiceImage,
    imageAlt: 'Illustration of AI lady',
    description:
      'Clean, well-tested code across all AI libraries related to NLP, CV, and ML. Python, PyTorch, TensorFlow, and Hugging Face.'
  },
  {
    id: 'ds',
    title: 'Data Science',
    image: dataScienceImage,
    imageAlt: 'Illustration of a data scientist at work',
    description:
      'Data analysis and visualization with Python, R, and SQL. Statistical modeling and machine learning.'
  },
  {
    id: 'analytics',
    title: 'Analytics',
    image: analyticsServiceImage,
    imageAlt: 'Illustration of analytics dashboard',
    description:
      'Data-driven insights and reporting with advanced analytics tools and techniques.'
  }
];

export default function Services() {
  return (
    <section>
      <h1 className="section-title">Services</h1>
      <p className="lead">Areas I take on for freelance and contract work.</p>

      {/* One-column stack below md, three columns above. `md:grid-cols-3`
          is the responsive form of `grid-cols-3`. */}
      <div className="grid gap-5 mt-6 grid-cols-1 md:grid-cols-3">
        {SERVICES.map((service) => (
          <article
            key={service.id}
            className="card flex flex-col items-center text-center gap-1"
          >
            <img
              className="w-24 h-24 my-2"
              src={service.image}
              alt={service.imageAlt}
              loading="lazy"
            />
            <h3 className="mb-1">{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
