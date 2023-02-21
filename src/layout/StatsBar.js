import { commarize, formatAmount } from "@/utils";

const StatsBar = ({ org }) => {
  return (
    <section className="stats container">
      <p className="stats-item">
        <span>{formatAmount(org?.total_funds)}</span><br />
        Raised
      </p>
      <hr />
      <p className="stats-item">
        <span>{formatAmount(org?.target_amount)}</span><br />
        Annual Spend
      </p>
      <hr />
      <p className="stats-item">
        <span>{commarize(org?.annual_beneficiary_reach)}</span><br />
        Annual Beneficiary Reach
      </p>
      <hr />
      <p className="stats-item">
        <span>{commarize(30)}</span><br />
        Donations
      </p>
    </section>
  );
};

export default StatsBar;
