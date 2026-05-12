export default function CapBand() {
  const words: [string, string | null][] = [
    ['Brand', 'systems'],
    ['Web', 'design'],
    ['Engineering', null],
    ['SEO', '& growth'],
    ['Paid', 'media'],
    ['Graphic', 'design'],
    ['Conversion', null],
    ['Hosting', null],
  ];

  const items = [...words, ...words];

  return (
    <section className="cap-band">
      <div className="cap-band-track">
        {items.map(([a, b], i) => (
          <span key={i}>
            {a}
            {b && <em>&nbsp;{b}</em>}
          </span>
        ))}
      </div>
    </section>
  );
}
