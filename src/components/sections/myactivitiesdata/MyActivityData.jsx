import "./MyActivityData.css";

const MyActivityData = ({ pendingActivities = [] }) => {
  return (
    <div className="my-activities-container">
      {pendingActivities.length > 0 ? (
        <ul>
          {pendingActivities.map((activity) => (
            <li key={activity.id}>
              <img src={activity.ActivityPhoto} alt="Activity" />
              <span>{activity.title}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No pending activities</p>
      )}
    </div>
  );
};

export default MyActivityData;
