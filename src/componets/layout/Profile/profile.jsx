import React from 'react';
import Spinner from '../../common/spinner';
import useDataApi from '../../Hooks/useDataApi';
import ProfileCard from './profileCard/ProfileCard';

const Profile = ({ match, history }) => {
  const { data } = useDataApi(
    `https://akabab.github.io/superhero-api/api/id/${match.params.id}.json`,
    {}
  );

  return (
    <>
      {Object.keys(data).length === 0 ? (
        <Spinner />
      ) : (
        <ProfileCard character={data} back={history.goBack} />
      )}
    </>
  );
};

export default Profile;
