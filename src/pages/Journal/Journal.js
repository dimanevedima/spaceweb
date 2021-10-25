import React, {useEffect, useState, useRef} from 'react';
import classNames  from 'classnames';

import useXml from '../utils/useXml';
import useTitles from '../utils/useTitles';
import spinner from '../utils/spinner.svg';


import {Title, Pagination} from '../../components';

import styles from './styles.module.scss';

import arrow from '../../img/arrow.svg';

const Journal = () => {

  const xmlDoc = useXml();
  const titles = useTitles(xmlDoc);

  const [article, setArticle] = useState();
  const [activeIndex, setActiveIndex] = useState();

  const newRef = useRef(null);

  useEffect(() => {
    if(newRef.current){

      newRef.current.innerHTML = article;
      newRef.current.children[0].innerHTML = '';

    }
  }, [activeIndex, article]);

const handleArticle = (title, index) => {

  if(index === activeIndex){
      newRef.current.innerHTML = null;
      setActiveIndex(null);
  }else{
    if(newRef.current){
      newRef.current.innerHTML = null;
    }
    setActiveIndex(null);

    let n = Array.from(xmlDoc.querySelectorAll('item'))
      .filter(item => item.children[0].innerHTML === title)[0]
        .querySelector('content').innerHTML;
    n = n.slice(0, n.length - 3)


    setActiveIndex(index);
    setArticle(n);
  }

};

const [currentPage, setCurrentPage] = useState(1);
const [titlesPerPage] = useState(5);

const lastTitleIndex = currentPage * titlesPerPage;
const firstTitleIndex = lastTitleIndex - titlesPerPage;
const currentTitle = titles.slice(firstTitleIndex, lastTitleIndex);

const paginate = pagenumber => {
  setCurrentPage(pagenumber)
};



  return (
  <>
  <div>
    <Title tag = 'h3' text = 'Бортовой журнал'/>
    <Title tag = 'h2' text = 'Бортовой журнал'/>
  </div>
  <div className={styles.articles}>
    { xmlDoc ? (
        currentTitle && currentTitle.map((title, index) => (
      <div
        className={classNames(styles.articles__item, {
          [styles.active]: index === activeIndex
        }) }
        key = {index}
        onClick = {() => handleArticle(title, index)}
        >

          <div className={styles.article__header}>
              <p>{title}</p>
              <img src={arrow} alt="arrow"/>
          </div>
          <div
             ref = {index === activeIndex ? newRef : null}
              className={styles.article__body}>
          </div>
      </div>
    ))
  )
  :
    <div className = {styles.loading}>
        <img src={spinner} alt="spinner"/>
    </div>
  }
    <Pagination
      titlesPerPage = {titlesPerPage}
      totalTitles = {titles.length}
      paginate = {paginate}
      />
  </div>
  </>
  );
};

export default Journal;
