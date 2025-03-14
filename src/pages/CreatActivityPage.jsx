import React, { useState } from 'react';
import Activity from '../components/Activity';
import '../styles/CreateActivity.css';

const CreatActivityPage = ({setActivityData}) => {
    const [values, setValues] = useState({
        title: "",
        ActivityPhoto: null,
        description: "",
        link: "",
        numberOfMem: "",
        location: "",
        time: ""
    });

    const inputs = [
        {
            id: 1,
            name: "title",
            type: "text",
            placeholder: "Activity Name",
            label: "Activity Name",
        },
        {
            id: 2,
            name: "ActivityPhoto",
            type: 'file',
            label: "Activity Photo",
            accept: "image/*",
        },
        {
            id: 3,
            name: "description",
            type: "textarea",
            placeholder: "Describe Activity Here",
            label: "Description",
        },
        {
            id: 4,
            name: "link",
            type: "text",
            placeholder: "Link to Activity Chat",
            label: "Link",
        },
        {
            id: 5,
            name: "numberOfMem",
            type: "text",
            placeholder: "Number of Expected Participants",
            label: "Number of Participants",
        },
        {
            id: 6,
            name: "location",
            type: "text",
            placeholder: "Location of Activity",
            label: "Location",
        },
        {
            id: 7,
            name: "time",
            type: "text",
            placeholder: "Date and Time of Activity",
            label: "Time"
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setActivityData(values);
        console.log(values);
    };

    const onChange = (e) => {
        const { name, type } = e.target;
        if (type === "file") {
            setValues({ ...values, [name]: e.target.files[0] });
        } else {
            setValues({ ...values, [name]: e.target.value });
        }
    };

    return (
        <div className="CreateActivity-container">
            <form onSubmit={handleSubmit}>
                {inputs.map((input) => (
                    <Activity key={input.id} {...input} onChange={onChange} />
                ))}
                {values.ActivityPhoto && (
                    <div className="image-preview">
                        <h4>Image Preview:</h4>
                        <img
                            src={URL.createObjectURL(values.ActivityPhoto)}
                            alt="Activity Preview"
                            className="activity-preview-image"
                        />
                    </div>
                )}
                <button 
                onClick={handleSubmit}
                type="submit">Create Activity</button>
            </form>
        </div>
    );
};

export default CreatActivityPage;