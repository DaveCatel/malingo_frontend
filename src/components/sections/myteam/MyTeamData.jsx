import "./MyTeamData.css";

const MyTeamData = () => {
    const memberImg = "https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_1280.png"
  return (
    <div>
      <div className="my-team-container">
        {memberImg ? (
          <img
            src={memberImg}
            alt="my photo"
            className="team-member-photo"
          />
        ) : (
          <div></div>
        )}
        <h3>Dave Catel</h3>
      </div>
    </div>
  );
};

export default MyTeamData;
