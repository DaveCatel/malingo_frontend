import './MyActivityData.css'
const MyActivityData = () => {
  const acceptActivityImg = "https://cdn.pixabay.com/photo/2020/11/28/19/18/girl-5785590_640.jpg";
  return (
    <div className="my-activities-container">
      {acceptActivityImg ? (

        <img src={acceptActivityImg} alt="my photo" className="accepted-activity-photo"/>
      ):(
        <div></div>
      )}
      <h3>Morning Run</h3>
    </div>
  )
}

export default MyActivityData
