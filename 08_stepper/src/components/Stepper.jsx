import React from 'react'

const Stepper = () => {
    const stepperData = [
        {
            id: 1,
            name: 'Customer info',
            description: 'Provide your contact details'
        },
        {
            id: 2,
            name: 'Shipping info',
            description: 'Enter your shipping address'
        },
        {
            id: 3,
            name: 'Payment',
            description: 'Complete payment for your order'
        },
        {
            id: 4,
            name: 'Delivered',
            description: 'Your order has been delivered'
        },
    ]
    return (
        <div>
            {stepperData.map((item) => {
                return <div className='stepper'>
                    <span className='stepper_item'>
                        <div className='stepper_item_number'>{item.id}</div>
                        {item.id < stepperData.length ? <div className='line'></div> : <span></span>}
                        {/* <span className='stepper_item_desc'>{item.name}</span> */}
                    </span>
                </div>
            })}
        </div>
    )
}

export default Stepper