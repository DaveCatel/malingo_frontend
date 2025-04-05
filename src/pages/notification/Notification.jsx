import { useEffect, useState } from 'react';
import HomeNavBar from '../../components/sections/homeNavBar/HomeNavBar';
import NotificationData from '../../data/notificationdata/NotificationData';
import './Notification.css';

const Notification = ({ onClick }) => {
    const [pendingRequests, setPendingRequests] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Fetch pending requests for the creator
    const fetchPendingRequests = async () => {
        setLoading(true);
        setError(null); // Reset error before making a new request
        try {
            const response = await fetch(`https://rrn24.techchantier.site/malingo/public/api/join-request/${joinRequest_id}/accept`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setPendingRequests(data);
        } catch (error) {
            setError("Failed to fetch pending requests. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // Approve join request
    const approveJoinRequest = async (joinRequest_id, userId) => {
      const token = localStorage.getItem("token");
      
      // Validate token exists
      if (!token) {
          setError("Authentication token not found. Please log in again.");
          return;
      }
      
      setLoading(true);
      try {
          // Log request details for debugging
          console.log("Making request to:", 
              `https://rrn24.techchantier.site/malingo/public/api/join-request/${joinRequest_id}/accept`);
          console.log("With token:", token);
          
          const response = await fetch(`https://rrn24.techchantier.site/malingo/public/api/join-request/${joinRequest_id}/accept`, {
              method: "POST",
              headers: {
                  "Authorization": `Bearer ${token}`,
                  "Content-Type": "application/json",
                  "Accept": "application/json",
              },
              body: JSON.stringify({ joinRequest_id: joinRequest_id }),
          });
          
          // Log response status for debugging
          console.log("Response status:", response.status);
          
          const responseData = await response.json();
          console.log("Response data:", responseData);
          
          if (!response.ok) {
              throw new Error(responseData.message || "Failed to approve request");
          }
  
          const groupChatLink = `https://chat.example.com/group/${joinRequest_id}`;
          await sendApprovalMessage(userId, groupChatLink);
          alert("Join request approved!");
  
          // Update state after successful request
          setPendingRequests(prevState => prevState.filter(request => request.id !== joinRequest_id));
      } catch (error) {
          console.error("Error approving request:", error);
          setError(error.message || "Failed to approve request. Please try again.");
      } finally {
          setLoading(false);
      }
  };

    // Decline join request
    const declineJoinRequest = async (joinRequest_id) => {
        const token = localStorage.getItem("token");

        setLoading(true);
        try {
            const response = await fetch(`https://rrn24.techchantier.site/malingo/public/api/join-request/${joinRequest_id}/decline`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({ joinRequest_id }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to decline request");
            }

            alert("Join request declined!");
            setPendingRequests(prevState => prevState.filter(request => request.id !== joinRequest_id));
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    // Send a message with the group chat link
    const sendApprovalMessage = async (userId, groupChatLink) => {
      const token = localStorage.getItem("token");
      const messageData = {
          userId,
          message: `Your join request has been approved! Join the group chat here: ${groupChatLink}`,
      };
  
      try {
          // Use the full URL here
          const response = await fetch('https://rrn24.techchantier.site/malingo/public/api/send-message', {
              method: "POST",
              headers: {
                  "Authorization": `Bearer ${token}`,
                  "Content-Type": "application/json",
                  "Accept": "application/json",
              },
              body: JSON.stringify(messageData),
          });
          
          if (!response.ok) {
              const errorData = await response.json();
              throw new Error(errorData.message || "Failed to send approval message");
          }
      } catch (error) {
          console.error("Error sending approval message:", error);
          // Handle error but don't break the approval flow
      }
  };

    // Fetch pending requests on component mount
    useEffect(() => {
        fetchPendingRequests();
    }, []);

    return (
        <div onClick={onClick} className='notification-container'>
            <HomeNavBar />
            <div className="notification-container-main">
                <div className="notification-area">
                    <h2>Pending Join Requests</h2>
                    {loading && <p>Loading...</p>}
                    {error && <p className="error">{error}</p>}
                    <ul>
                        {pendingRequests.map((request) => (
                            <li key={request.id}>
                                {request.userName}
                                <button disabled={loading} onClick={() => approveJoinRequest(request.id, request.userId)}>Approve</button>
                                <button disabled={loading} onClick={() => declineJoinRequest(request.id)}>Decline</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <NotificationData />
            </div>
        </div>
    );
};

export default Notification;
