import React, { useState, useEffect } from 'react'

const ProgressBar = ({ progress }) => {
    const [animatedProgress, setAnimatedProgress] = useState(0);
    useEffect(() => {
        setAnimatedProgress(progress);
    }, [progress])
    return (
        <div
            className='progress-bar__outer'
            role='progressbar'
            aria-valuenow={progress}
            aria-valuemax='100'
            aria-valuemin='0'
            aria-label='Progress'
        >
            <div className='progress-bar__inner' style={{ transform: `translateX(${animatedProgress - 100}%)` }}>
                <span className='progress'>{progress}%</span>
            </div>
        </div>
    )
}

export default ProgressBar