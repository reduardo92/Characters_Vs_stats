import React, { useContext } from 'react';
import styled from 'styled-components';
import HeroContext from '../../Context/Heros/HerosContext';

const Styled = styled.nav`
  .pagination {
    justify-content: center;
    flex-wrap: wrap;
  }

  .page-link {
    &:hover,
    &:focus,
    &.active {
      background-color: var(--primary);
      color: #fff;
    }
  }

  /* .pagination  */

  .page-item + .page-item {
    margin-left: 0.8em;
  }

  .page-item {
    padding: 0.5em 0;
  }
`;

const Pagination = () => {
  const {
    characterPerPage,
    totalCharacter,
    paginate,
    currentPage
  } = useContext(HeroContext);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCharacter / characterPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Styled className='pagination-nav'>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <div
              onClick={() => paginate(number)}
              className={`page-link ${number === currentPage ? 'active' : ''}`}
            >
              {number}
            </div>
          </li>
        ))}
      </ul>
    </Styled>
  );
};

export default Pagination;
