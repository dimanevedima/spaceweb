import {useState, useEffect} from 'react';

export default function useXml(){
  const [xmlDoc, setXmlDoc] = useState();
  const getXml = async () => {
    await fetch('https://sweb.ru/export/turbojournal/')
      .then(data => data.text())
        .then(data => {
          const xml = new DOMParser().parseFromString(data, 'text/xml');
          setXmlDoc(xml);
        });
  };
  useEffect(() => {
    getXml();
  },[]);

  return xmlDoc;

};
