import Card from "./components/Card";
import SearchBar from "./SearchBar";

const OrganizationList = ({ organizations }) => {
  return (
    <section aria-label="Organization List">
      <SearchBar />
      <ol className="mt-4 organization-list">
        {organizations.map((org, i) => (
          <li key={`org-${i + 1}`}>
            <Card org={org} />
          </li>
        ))}
      </ol>
    </section>
  );
};
export default OrganizationList;
