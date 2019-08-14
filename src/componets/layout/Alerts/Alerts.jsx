import React, { useContext } from 'react';
import HeroContext from '../../Context/Heros/HerosContext';
import styled from 'styled-components';

const Styled = styled.div`
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 700;
  position: fixed;
  top: 136px;
  left: 0;
  right: 0;
  z-index: 5;
`;

const Alerts = () => {
  const { alerts } = useContext(HeroContext);
  return (
    alerts.length > 0 &&
    alerts.map(alert => (
      <Styled key={alert.id} className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle' /> {alert.msg}
      </Styled>
    ))
  );
};

export default Alerts;
