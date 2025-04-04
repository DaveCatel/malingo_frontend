import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const JoinRequestsPage = () => {
  const [pendingRequests, setPendingRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  // Get activityId from the route parameters
  const { activityId } = useParams();

  useEffect(() => {
    const fetchPendingRequests = async () => {
      try {
        const response = await fetch(`https://rrn24.techchantier.site/malingo/public/api/activities/${activityId}/join`, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
          },
        });

        if (!response.ok) throw new Error("Failed to fetch join requests");

        const data = await response.json();
        setPendingRequests(data.pendingRequests || []);
      } catch (err) {
        console.error("Error fetching join requests:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPendingRequests();
  }, [token, activityId]);  // Add activityId as a dependency

  const approveJoinRequest = async (joinRequestId) => {
    try {
      const response = await fetch(`https://rrn24.techchantier.site/malingo/public/api/join-request/${joinRequestId}/accept`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          joinRequest_id: joinRequestId,
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Approval failed");

      alert("Join request approved!");
      // Update the list to remove the approved request
      setPendingRequests((prev) =>
        prev.filter((request) => request.id !== joinRequestId)
      );
    } catch (err) {
      console.error("Approval failed:", err.message);
      alert("Something went wrong approving the request.");
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Pending Join Requests</h2>
      {pendingRequests.length === 0 ? (
        <p>No pending join requests</p>
      ) : (
        <ul>
          {pendingRequests.map((request) => (
            <li key={request.id}>
              <p>{request.user_id} wants to join your activity</p>
              <button onClick={() => approveJoinRequest(request.id)}>
                Approve
              </button>
            </li>
          ))}
        </ul>
      )}
      <Link to="/profile">Back to Profile</Link>
    </div>
  );
};

export default JoinRequestsPage;
