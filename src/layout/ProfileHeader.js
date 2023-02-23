import CheckMark from "@/assets/CheckMark";

const ProfileHeader = ({ org }) => {
  return (
    <div className="profile-header">
      <div className="right">
        <div className="avatar">
          <img src={org?.avatar} role="presentation" alt="" />
        </div>
        <div className="details">
          <h1 className="header-2 flex flex-row align-items-center fg-2">
            {org?.name} <span className="checkmark checkmark-sm">{org?.verified === "true" && <CheckMark />}</span>
          </h1>
          <p className="region">{org?.country}</p>
          <ul className="tags flex flex-row fg-2">
            {org?.tags.map((tag, i) => (
              <li className="tag-item" key={`tag-${i+1}`}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="left">
        <a href="">
          <button className="btn btn-outline">Website</button>
        </a>
        <button className="btn btn-primary">Donate</button>
      </div>
    </div>
  );
};

export default ProfileHeader;
