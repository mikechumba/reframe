const ProfileHeader = ({ org }) => {
  return (
    <div className="profile-header">
      <div className="right">
        <div className="avatar">
          <img src="" alt="" />
        </div>
        <div className="details">
          <h1>{org?.name}</h1>
          <p>{org?.country}</p>
          <ul className="tags">
            {org?.tags.map((tag, i) => {
              <li className="tag-item">{tag}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="left">
        <a href="">
          <button className="primary">Website</button>
        </a>
        <button className="primary">Donate</button>
      </div>
    </div>
  );
};

export default ProfileHeader;
