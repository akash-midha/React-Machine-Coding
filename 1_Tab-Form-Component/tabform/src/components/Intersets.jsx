import React from 'react'
import { allInterests } from '../data';

const Intersets = ({ data, setData, error }) => {
    const { interests } = data;

    const setChecked = (e, item) => {
        setData((prevData) => {
            const updatedInterests = e.target.checked
                ? [...prevData.interests, item]
                : prevData.interests.filter((interest) => interest !== item);
            return {
                ...prevData,
                interests: updatedInterests,
            }
        })
    }
    return (
        <div className='interests'>
            <h2>Interests</h2>
            {allInterests.map((item, i) => {
                return <div key={i}>
                    <label>{item}</label>
                    <input type='checkbox' name={item} checked={interests.includes(item)} onChange={(e) => { setChecked(e, item) }} />
                </div>
            })}
            {error.interests && <div className='error'>{error.interests}</div>}
        </div>
    )
}

export default Intersets