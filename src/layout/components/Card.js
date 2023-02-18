const Card = () => {
  return (
    <div className="card">
      <div className="card-image">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
      <div className="card-content">
        <p className="region">Indonesia</p>
        <h2 className="mt-1">Jarkata Bersatu Project</h2>
        <ul className="tags flex flex-row fg-2 mt-1">
          <li className="tag-item">Refugees</li>
          <li className="tag-item">Education</li>
          <li className="tag-item">Poverty</li>
        </ul>
        <p className="amount-raised mt-2">
          <span>$0.00</span>{' '}
          Raised
        </p>
        <div className="progress-bar">
          <label className="visually-hidden" htmlFor="fundraising-progress">Fundraising Progress</label>
          <progress className="progress" id="fundraising-progress" max="100" value="40"></progress>
        </div>
      </div>
    </div>
  );
}

export default Card;