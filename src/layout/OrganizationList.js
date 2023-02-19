import { sortingMethods } from "@/utils/constants";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import SearchBar from "./SearchBar";

const OrganizationList = ({ organizations }) => {
  const [categories, setCategories] = useState([]);
  const [regions, setRegions] = useState([]);
  const [filteredOrgs, setFilteredOrgs] = useState(organizations);
  const [filterValues, setFilterValues] = useState({});

  const getFilteringData = () => {
    let categoryData = [];
    let regionData = [];
    for (let i = 0; i < organizations.length; i++) {
      const org = organizations[i];
      regionData.push(org.country);
      categoryData.push(...(org.tags || []));
    }
    setCategories(Array.from(new Set(categoryData)));
    setRegions(regionData);
  };

  const sortOrganizatins = (sortBy) => {
    const sorted = filteredOrgs.sort((a, b) => {
      const key =
        sortBy === "Organization"
          ? "name"
          : sortBy === "Region"
          ? "country"
          : "total_funds";
      return a[key] - b[key];
    });
    setFilteredOrgs(sorted);
  };

  const categoryFilter = (category) => {
    const filtered = organizations.filter((org) => org.tags.include(category));
    setFilteredOrgs(filtered);
  };

  const regionFilter = (region) => {
    const filtered = organizations.filter((org) => org.country === region);
    setFilteredOrgs(filtered);
  };

  useEffect(() => {
    getFilteringData();
  }, [organizations]);

  return (
    <section aria-label="Organization List">
      <SearchBar
        categories={categories}
        regions={regions}
        sortMethods={sortingMethods}
        sortOrgs={sortOrganizatins}
        updateFilterValues={setFilterValues}
      />
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
