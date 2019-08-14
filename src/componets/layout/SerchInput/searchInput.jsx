import React, { useState, useContext } from 'react';
import HeroContext from '../../Context/Heros/HerosContext';
import styled from 'styled-components';

const Styled = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 0 1em;

  .fas {
    font-size: 1.15rem;
  }
`;

const SearchInput = () => {
  const [values, setValues] = useState({
    search: ''
  });

  const { handlefilterSearch } = useContext(HeroContext);

  // Handle Submit
  const handleSubmit = e => e.key === 'Enter' && e.preventDefault();

  // handle Change
  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // handle keydown
  const handleKeydown = () => handlefilterSearch(values.search);

  // clear fields
  const clearField = e => {
    e.preventDefault();
    handlefilterSearch('');
    setValues({ search: '' });
  };

  return (
    <Styled>
      <form
        className='text-center'
        // onSubmit={handleSubmit}
        onKeyPress={handleSubmit}
      >
        <div className='input-group mb-3'>
          <div className='input-group-prepend'>
            <label
              className='input-group-text fas fa-search'
              htmlFor='search'
            />
          </div>
          <input
            type='text'
            id='search'
            className='form-control'
            name='search'
            value={values.search}
            placeholder='search character'
            aria-label='search character'
            aria-describedby='search'
            onChange={handleChange}
            onKeyUp={handleKeydown}
          />
          <div className='input-group-prepend'>
            <button className='btn btn-light' onClick={clearField}>
              clear
            </button>
          </div>
        </div>
      </form>
    </Styled>
  );
};

export default SearchInput;
