import {useState, useEffect} from 'react';

export default function useTitles(xmlDoc){
    const [titles, setTitles] = useState([]);

    useEffect(() => {
      if(xmlDoc){
        const items =  Array.from(xmlDoc.querySelectorAll('item title')).map(title => title.innerHTML);
        setTitles(items);
      }
    }, [xmlDoc]);

  return titles;
};
