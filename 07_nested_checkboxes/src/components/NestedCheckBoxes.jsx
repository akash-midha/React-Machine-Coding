import React from 'react'
import { data } from '../data/data'

const NestedCheckBoxes = () => {

    const NestedboxesComponent = ({data}) => {
        return <div>
            {
                data.map((item, i) => {
                    return <div key={item.id} className='item'>
                        <div className=''>
                            <input type='checkbox' checked />
                            {item.name}
                        </div>
                        {item?.children && <NestedboxesComponent data={item?.children} />}
                    </div>
                })
            }
        </div>
    }

    return (
        <div>
            <NestedboxesComponent data={data} />
        </div>
    )
}

export default NestedCheckBoxes