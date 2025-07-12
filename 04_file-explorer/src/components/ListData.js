import { useState } from "react";

const ListData = ({ data }) => {
    const [expandedItems, setExpandedItems] = useState({});

    const toggleExpand = (itemName) => {
        setExpandedItems((prev) => ({
            ...prev,
            [itemName]: !prev[itemName],
        }));
    }
    return <div>
        {
            data.map((item) => {
                return <div key={item.name} className="folder-item">
                    <span className='folder-item__icon' onClick={() => toggleExpand(item.name)}>{item?.isFolder ? '🗂️' : '📄'}</span>
                    <span>{item?.name}</span>
                    {(item.children != null && expandedItems[item.name]) && <ListData data={item.children} />}
                </div>
            })
        }
    </div>
}

export default ListData;