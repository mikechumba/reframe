import { formatAmount } from "@/utils";

const StatsBar = ({ org }) => {
  return (
    <section className="stats">
      <p className="stat-item">
        <span>{formatAmount(org?.total_funds)}</span>
        Raised
      </p>
      <hr />
      <p className="stat-item">
        <span>{formatAmount(org?.target_amount)}</span>
        Annual Spend
      </p>
      <hr />
      <p className="stat-item">
        <span>{org?.annual_beneficiary_reach}</span>
        Annual Beneficiary Reach
      </p>
      <hr />
      <p className="stat-item">
        <span>30</span>
        Donations
      </p>
    </section>
  );
};

export default StatsBar;
