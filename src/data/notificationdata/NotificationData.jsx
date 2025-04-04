import './NotificationData.css'
const NotificationData = () => {
  return (
    <div className='notification-data-container'>
      <div className="notification-crud">
        <div className="notification-title">
            <h2>Notification type</h2>
            <p>activity title</p>
            <p>requester name</p>
        </div>
        <div className="approve-decline">
          <button className='approve'>Approve</button>
          <button className='decline'>Decline</button>
        </div>
      </div>
      
    </div>
  )
}

export default NotificationData
