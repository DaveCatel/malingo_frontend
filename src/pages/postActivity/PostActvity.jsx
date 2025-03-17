import './PostActivity.css'

const PostActvity = () => {
  return (
    <div className='post-activity-container'>
      <div className="sidebar-area">
        side bar appears here
      </div>
      <div className="post-activity">
        <div className="post-container">
          <h3>Create an activity</h3>
          <form action="">
            <div className="post-activity-inputs">
              <div className="title-input">
                <label htmlFor="title">Title</label>
                <input type="text" id='title' placeholder='Enter activity title here' />
              </div>
              <div className="activity-photo">
                <label htmlFor="activityPhoto">Activity photo</label>
                <input
                type="file" 
                id='activityPic' 
                accept='image/*'/>
              </div>
              <div className="text-area">
                <label htmlFor="description">Description</label>
                <input type="textarea" id='desc' placeholder='Activity description' className='text-area-input'/>
              </div>
              <div className="chat-link">
                <label htmlFor="chat">Link</label>
                <input type="text" id='link' placeholder='Enter link to chat'/>
              </div>
              <div className="location-container">
                <div className="number-of-mem">
                  <label htmlFor="numberofmembers">Number of members</label>
                  <input type="text" id='numberofmem' placeholder='Enter number of members'/>
                </div>
                <div className="activity-date">
                  <label htmlFor="date">Date</label>
                  <input 
                  min={new Date().toISOString().slice(0, -8)}
                  type="datetime-local" id='date' />
                </div>
              </div>
            </div>
          </form>
        </div>

      </div>
      
    </div>
  )
}

export default PostActvity
