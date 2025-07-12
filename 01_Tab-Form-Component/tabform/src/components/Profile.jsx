import React from 'react'

const Profile = ({ data, setData, error }) => {
    const { name, age, email, city } = data;

    const changeInput = (e, item) => {
        setData((prevData) => ({
            ...prevData,
            [item]: e.target.value,
        }));
    }
    return (
        <div className='profile'>
            <h2>Profile Details</h2>
            <div>
                <label>Name: </label>
                <input type='text' placeholder='Enter your name' value={name} name='name' onChange={(e) => changeInput(e, e.target.name)} />
                {error.name && <div className='error'>{error.name}</div>}
            </div>

            <div>
                <label>Age: </label>
                <input type='number' placeholder='Enter your age' value={age} name='age' onChange={(e) => changeInput(e, e.target.name)} />
                {error.age && <div className='error'>{error.age}</div>}
            </div>

            <div>
                <label>Email: </label>
                <input type='email' placeholder='Enter your email' value={email} name='email' onChange={(e) => changeInput(e, e.target.name)} />
                {error.email && <div className='error'>{error.email}</div>}
            </div>

            <div>
                <label>City: </label>
                <input type='text' placeholder='Enter your city' value={city} name='city' onChange={(e) => changeInput(e, e.target.name)} />
            </div>
        </div>
    )
}

export default Profile