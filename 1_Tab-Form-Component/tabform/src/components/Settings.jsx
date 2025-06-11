import React from 'react';

const Settings = ({ data, setData }) => {
    const { food_preferences } = data;

    const handleChange = (e) => {
        setData((prevData) => ({
            ...prevData,
            food_preferences: e.target.value, // Update food preferences
        }));
    };

    return (
        <div className='settings'>
            <h2>Settings</h2>
            <div>
                <div>
                    <label>Veg</label>
                    <input
                        type="radio"
                        name="food_preferences"
                        value="Veg"
                        checked={food_preferences === "Veg"} // Check if current selection is "Veg"
                        onChange={handleChange} // Update state on change
                    />
                </div>
                <div>
                    <label>Non-Veg</label>
                    <input
                        type="radio"
                        name="food_preferences"
                        value="Non-Veg"
                        checked={food_preferences === "Non-Veg"} // Check if current selection is "Non-Veg"
                        onChange={handleChange} // Update state on change
                    />
                </div>
            </div>
        </div>
    );
};

export default Settings;