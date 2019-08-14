import React from 'react';

export default () => {
  return (
    <>
      <div className='d-flex justify-content-center align-items-center min-vh-100 '>
        <div style={{ marginBottom: '20rem' }} className='text-center'>
          <div className='spinner-grow text-danger' />
          <div className='spinner-grow text-secondary' />
          <div className='spinner-grow text-danger' />
          <div className='spinner-grow text-secondary' />
          <div className='spinner-grow text-danger' />
          <div className='spinner-grow text-secondary' />
          <strong className='h1 text-dark d-block'>Loading...</strong>
        </div>
      </div>
    </>
  );
};
