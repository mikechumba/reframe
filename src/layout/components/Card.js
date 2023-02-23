import { useRef } from "react";
import Image from "next/image";
import { formatAmount, hiphenate } from "@/utils";
import CheckMark from "@/assets/CheckMark";

const Card = ({ org }) => {
  const link = useRef();
  const goToPage = (e) => {
    if (e.target.localName !== "a") {
      link.current.click();
    }
  };

  return (
    <div className="card" onClick={goToPage}>
      <div className="card-image">
        <span>
          <Image
            src={org.avatar}
            width="240"
            height="240"
            placeholdder="blur"
            priority="true"
            alt=""
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8Ug8AAk0BZU1+kw8AAAAASUVORK5CYII="
          />
        </span>
      </div>
      <div className="card-content mt-1">
        <p className="region">{org.country}</p>
        <h2 className="mt-1 flex flex-row align-items-center fg-1">
          <a
            className="h2"
            ref={link}
            href={`org/${hiphenate(org.name)}`}
            target="_blank"
          >
            {org.name}
          </a>
          <div aria-hidden="true" className="checkmark checkmark-sm">{org?.verified === "true" && <CheckMark />}</div>
        </h2>
        <ul className="tags flex flex-row fg-2 mt-2">
          {org.tags.map((tag, tagId) => (
            <li className="tag-item" key={`tag-${tagId + 1}`}>
              {tag}
            </li>
          ))}
        </ul>
        <p className="amount-raised mt-2">
          <span>{formatAmount(org.total_funds)}</span> Raised
        </p>
        <div className="progress-bar">
          <label
            className="visually-hidden"
            htmlFor={`fundraising-progress-${org.id}`}
          >
            Fundraising Progress
          </label>
          <progress
            className="progress"
            id={`fundraising-progress-${org.id}`}
            max={org.target_amount}
            value={org.total_funds}
          ></progress>
        </div>
      </div>
    </div>
  );
};

export default Card;
