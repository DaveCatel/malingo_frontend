import './UserData.css'

const UserData = () => {
  const contactData = {
    Title: "Telecom Engineer",
    Phone: "671178346",
    Email: "davecatel02@gmail.com.com",
  };
  return (
    <div className="user-info-table">
        <table>
            <tbody>
                {Object.entries(contactData).map(([key, value]) => 
                (<tr key={key}>
                    <td className='label'>{key}</td>
                    <td className='value'>{value}</td>
                </tr>))}
            </tbody>
        </table>
    </div>
  );
};

export default UserData;
