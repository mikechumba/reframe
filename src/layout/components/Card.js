import { formatAmount, hiphenate } from "@/utils";
import { useRef } from "react";

const Card = ({ org }) => {
  const link = useRef();
  const goToPage = (e) => {
    if (e.target.localName !== 'a') {
      link.current.click();
    }
  }

  return (
    <div className="card" onClick={goToPage}>
      <div className="card-image">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
      <div className="card-content">
        <p className="region">{org.country}</p>
        <h2 className="mt-1">
          <a className="h2" ref={link} href={`org/${hiphenate(org.name)}`} target="_blank">{org.name}</a>
        </h2>
        <ul className="tags flex flex-row fg-2 mt-1">
          {org.tags.map((tag, tagId) => (
            <li className="tag-item" key={`tag-${tagId+1}`}>{tag}</li>
          ))}
        </ul>
        <p className="amount-raised mt-2">
          <span>{formatAmount(org.total_funds)}</span>{' '}Raised
        </p>
        <div className="progress-bar">
          <label className="visually-hidden" htmlFor={`fundraising-progress-${org.id}`}>Fundraising Progress</label>
          <progress className="progress" id={`fundraising-progress-${org.id}`} max={org.target_amount} value={org.total_funds}></progress>
        </div>
      </div>
    </div>
  );
}

export default Card;