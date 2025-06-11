import React, { useState } from 'react'
import Profile from './Profile';
import Intersets from './Intersets';
import Settings from './Settings';

const TabForm = () => {
    const tabs = [
        {
            name: "Profile",
            component: Profile,
            validation: (data, setError) => {
                const err = {}
                if (!data.name || data.name.length < 2) {
                    err.name = "Name is not valid";
                }
                if (!data.age || data.age < 18) {
                    err.age = "Age caanot be less than 18";
                }
                if (!data.email || data.email.length < 5) {
                    err.email = "Please enter valid email";
                }
                if (Object.keys(err).length > 0) {
                    setError(err);
                    return false;
                }
                setError({});
                return true;
            }
        },
        {
            name: "Interests",
            component: Intersets,
            validation: (data, setError) => {
                const err = {}
                if (!data.interests || data.interests.length < 1) {
                    err.interests = "Select atleast one interest";
                }
                if (Object.keys(err).length > 0) {
                    setError(err);
                    return false;
                }
                setError({});
                return true;
            }
        },
        {
            name: "Settings",
            component: Settings,
            validation: () => true,
        }
    ]
    const [activeTab, setActiveTab] = useState(0);
    const [data, setData] = useState({
        name: "",
        age: "",
        email: "",
        city: "",
        interests: ["Dancing", "Coding", "Singing"],
        food_preferences: "Veg",
    })

    const [error, setError] = useState({});

    const prevHandler = () => {
        setActiveTab((prev) => prev - 1);
    }
    const nextHandler = () => {
        if (tabs[activeTab].validation(data, setError)) {
            setActiveTab((prev) => prev + 1);
        }
    }

    const tabHandler = (index) => {
        if (activeTab >= index || tabs[activeTab].validation(data, setError)) {
            setActiveTab(index);
        }
    }

    const submitHandler = () => {
        const isValid = tabs.every((tab) => tab.validation(data, setError));
        if (isValid) {
            console.log(data);
        }
        else {
            console.log("validation failed. Fix errors before subitting.");
        }
    }

    const ActiveTabComponent = tabs[activeTab].component;

    return (
        <div className='tab-form'>
            <div className='tab-form__tabs'>
                {tabs.map((t, index) => {
                    return <div className='tab-form__tab' key={index} onClick={() => tabHandler(index)}>{t.name}</div>
                })}
            </div>
            <div className='tab-form__body'>
                <ActiveTabComponent data={data} setData={setData} error={error} />
            </div>
            <div>
                {activeTab > 0 && <button onClick={prevHandler}>Prev</button>}
                {activeTab < tabs.length - 1 && < button onClick={nextHandler}>Next</button>}
                {activeTab === tabs.length - 1 && < button onClick={submitHandler}>Submit</button>}
            </div>
        </div>
    )
}

export default TabForm