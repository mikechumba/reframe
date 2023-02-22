import BulletMark from "@/assets/Bullet";

const ListSection = ({ org }) => {
  return (
    <section className="list" aria-labelledby="list-section-title">
      <h2 id="list-section-title" className="h2-small">
        Partners <span className="visually-hidden">{org?.name}</span>
      </h2>
      <div className="mt-2 partners">
        <h3>Current</h3>
        <ul className="mt-1">
          {org?.partners.current.map((partner, i) => (
            <li key={`current-partner-${i + 1}`}>
              <BulletMark /> {partner}
            </li>
          ))}
        </ul>
        <h3 className="mt-2">Previous</h3>
        <ul className="mt-1">
          {org?.partners.previous.map((partner, i) => (
            <li key={`current-partner-${i + 1}`}>
              <BulletMark /> {partner}
            </li>
          ))}
        </ul>
        <h3 className="mt-2">Affiliations</h3>
        <ul className="mt-1">
          {org?.partners.network_affiliations.map((partner, i) => (
            <li key={`current-partner-${i + 1}`}>
              <BulletMark /> {partner}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ListSection;
