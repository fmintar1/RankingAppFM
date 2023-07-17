import React, {useState, useEffect} from 'react';

const RankItems = () => {

    const [items, setItems] = useState([]);
    const dataType = 1;

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`item/${dataType}`);
            const data = await response.json();
            setItems(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [dataType]);

    return(
        <main>
            {items.length > 0 ? items.map((item) => <h3 key={item.id}>{item.title}</h3>) : (<div>Loading...</div>)}
        </main>
    )
}

export default RankItems;