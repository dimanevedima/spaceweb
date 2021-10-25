  // eslint-disable-next-line

const Pagination = ({titlesPerPage, totalTitles, paginate}) => {
  const pageNumbers = [];

  for(let i = 1; i < Math.ceil(totalTitles/ titlesPerPage); i++){
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className = "pagination" style = {{listStyle: 'none', display: 'flex'}}>
        {
          pageNumbers.map(number => (
            <li
              style = {{marginRight: '20px', marginTop: '40px'}}
              onClick = {() => paginate(number)}
              key = {number}
              >
                <a href="#">{number}</a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Pagination;
