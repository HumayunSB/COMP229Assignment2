// -----------------------------------------------------------------------------
// Blog.tsx — the /blog listing page.
// Author: Humayun Butt
// -----------------------------------------------------------------------------

const CERTIFICATIONS = [
  {
    name: 'CompTIA IT Fundamentals (ITF+)',
    date: 'January 2024'
  },
  {
    name: 'CompTIA Data+',
    date: 'January 2024'
  },
  {
    name: 'CompTIA Project+',
    date: 'July 2024'
  },
  {
    name: 'CompTIA DataSys+',
    date: 'July 2024'
  }
].sort((a, b) => {
  const monthOrder = {
    January: 1,
    July: 7
  } as const;

  const monthA = a.date.split(' ')[0] as keyof typeof monthOrder;
  const monthB = b.date.split(' ')[0] as keyof typeof monthOrder;

  const yearA = Number(a.date.split(' ')[1]);
  const yearB = Number(b.date.split(' ')[1]);

  if (yearA !== yearB) return yearB - yearA;
  return (monthOrder[monthB] ?? 0) - (monthOrder[monthA] ?? 0);
});

export default function Blog() {
  return (
    <section>
      <h1 className="section-title">Certifications</h1>

      <ul className="list-none p-0 mt-6 grid gap-4">
        {CERTIFICATIONS.map((certification) => (
          <li key={certification.name} className="card grid gap-2 sm:grid-cols-[1fr_auto] sm:items-center">
            <span className="text-text font-medium">{certification.name}</span>
            <span className="text-muted sm:text-right">{certification.date}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
