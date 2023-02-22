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
    setRegions(Array.from(new Set(regionData)));
  };

  const sortOrganizations = (sortBy, orgs) => {
    const sorted = orgs.sort((a, b) => {
      const key =
        sortBy === "Organization"
          ? "name"
          : sortBy === "Region"
          ? "country"
          : "total_funds";
      return a[key].localeCompare(b[key]);
    });
    setFilteredOrgs(sorted);
  };

  const filterOrganizations = (filterValues) => {
    const { category, region, sortBy, searchParam } = filterValues;
    const filtered = organizations.filter((org) => {
      const byCategory = category ? org.tags.includes(category) : true;
      const byRegion = region ? org.country === region : true;
      const bySearch = searchParam ? org.name.toLowerCase().includes(searchParam.toLowerCase()) : true
      return byCategory && byRegion && bySearch
    });

    if (sortBy) {
      sortOrganizations(sortBy, filtered)
    } else {
      setFilteredOrgs(filtered);
    }
    
  };

  useEffect(() => {
    getFilteringData();
  }, [organizations]);

  useEffect(() => {
    filterOrganizations(filterValues)
  }, [filterValues]);

  return (
    <section aria-label="Organization List">
      <SearchBar
        categories={categories}
        regions={regions}
        sortMethods={sortingMethods}
        updateFilterValues={setFilterValues}
      />
      <ol className="mt-4 organization-list">
        {filteredOrgs.map((org, i) => (
          <li key={`org-${i + 1}`}>
            <Card org={org} />
          </li>
        ))}
      </ol>
    </section>
  );
};
export default OrganizationList;
