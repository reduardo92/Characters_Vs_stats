import React, { useState } from 'react';
import styled from 'styled-components';

const Styled = styled.div`
  background-image: linear-gradient(
    to left top,
    #09162e,
    #0d1931,
    #111d35,
    #142038,
    #18243c,
    #182339,
    #182337,
    #182234,
    #141c2b,
    #111722,
    #0c111a,
    #040811
  );
  min-height: 100vh;
  padding: 10em 1em 2em;
  color: #fff;

  .container {
    display: grid;
    justify-items: center;
    align-items: center;
  }

  .profile--img {
    max-width: 420px;
  }

  .blur-img {
    background-color: #3e3e3e;
    filter: blur(2px);
    width: 100%;
    height: 343px;
  }

  .profile--head {
    text-align: center;
  }

  .publisher {
    font-size: 1.3rem;
    font-weight: bold;
    margin: 0.8em 0 0.2em;
  }

  .aligment {
    display: inline-block;
    background-color: ${props => props.allies};
    color: black;
    padding: 0.1em 1.7em;
    border-radius: 5px;
    font-weight: bold;
    font-style: italic;
    margin-bottom: 1.1em;
  }

  .profile--titles {
    text-align: center;
    padding-bottom: 2em;

    .name {
      font-size: 2.8rem;
      font-weight: bold;
      padding: 0.1em 0;
    }
    .identity {
      font-size: 1.4rem;

      .tag {
        display: block;
        font-size: 1.2rem;
      }
    }
  }

  .name-tag {
    position: relative;
    padding-bottom: 0.3em;
    margin-bottom: 0.8em;
    grid-column: 1 / 3;

    &::before {
      position: absolute;
      content: '';
      width: 80%;
      height: 1px;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: ${props => props.allies};
    }
  }

  .tag-n {
    font-weight: 600;
  }

  .tag {
    display: block;
    font-weight: normal;
  }

  .appearance,
  .power-stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .power-stats {
    grid-gap: 1em;
    .stats {
      &--name {
        margin-bottom: 0;
      }
    }
  }

  .btn {
    background-color: ${props => props.allies};
    color: #262626;
    font-weight: bold;
  }

  @media screen and (min-width: 760px) {
    padding-top: 15em;

    .profile--img {
      grid-area: 1 /1 /2/ 3;
    }

    .profile--head {
      grid-area: 1 / 3 /2 /5;
    }

    .profile--bio {
      grid-area: 2/ 1/3/5;
      margin-top: 2em;
      max-width: 90%;
    }

    .btn {
      grid-area: 1 /3 /1 /5;
      margin-top: 14em;
      width: 200px;
    }

    .publisher {
      font-size: 1.6rem;
    }

    .profile--titles {
      text-align: center;
      padding-bottom: 2em;

      .name {
        font-size: 4rem;
      }

      .identity {
        margin-bottom: 2em;
      }
    }

    .appearance {
      grid-template-columns: repeat(3, 1fr);

      .name-tag {
        grid-column: 1 / 4;
      }
    }

    .biography {
      display: flex;
      justify-content: flex-start;

      .tag-n + .tag-n {
        margin-left: 2em;
      }
    }

    .power-stats {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 2em;
    }

    .groupAffiliation,
    .relatives,
    .work,
    .base {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;

      .name-tag {
        flex: 100%;
      }

      .tag + .tag {
        margin-left: 2em;
      }
    }
  }
`;

const ProfileCard = ({ character, back }) => {
  const [loading, setLoading] = useState(false);

  return (
    <Styled
      allies={character.biography.alignment === 'good' ? '#eff50e' : '#d80000'}
    >
      <div className='container'>
        {!loading ? <div className='blur-img' /> : null}
        <div className='profile--img'>
          <img
            onLoad={() => setLoading(true)}
            src={character.images.lg}
            alt={character.name}
          />
        </div>
        <div className='profile--head'>
          <div className='publisher'>{character.biography.publisher}</div>
          <div className='aligment'>
            {character.biography.alignment === 'good'
              ? 'SUPER HERO'
              : 'VILLAIN'}
          </div>
          <div className='profile--titles'>
            <h2 className='name'>{character.name}</h2>
            <h3 className='identity'>
              SECRET IDENTITY
              <span className='tag'>({character.biography.fullName})</span>
            </h3>
          </div>
        </div>
        <div className='profile--bio'>
          <div className='appearance'>
            <h3 className='name-tag'>Biography</h3>
            <p className='height tag-n'>
              Height: {'  '}
              <span className='tag'>{character.appearance.height[0]}</span>
            </p>
            <p className='weight tag-n'>
              Weight: {'  '}
              <span className='tag'>{character.appearance.weight[0]}</span>
            </p>
            <p className='race tag-n'>
              Race:
              <span className='tag'>{character.appearance.race}</span>
            </p>
            <p className='gender tag-n'>
              Gender:
              <span className='tag'>{character.appearance.gender}</span>
            </p>
            <p className='hair tag-n'>
              Hair Color:
              <span className='tag'>{character.appearance.hairColor}</span>
            </p>
            <p className='eye tag-n'>
              Eye Color:
              <span className='tag'>{character.appearance.eyeColor}</span>
            </p>
          </div>
          <div className='biography'>
            <p className='placeOfBirth tag-n'>
              place of Birth:
              <span className='tag'>{character.biography.placeOfBirth}</span>
            </p>
            <p className='firstAppearance tag-n'>
              first Appearance:{' '}
              <span className='tag'>{character.biography.firstAppearance}</span>
            </p>
            <p className='alterEgos tag-n'>
              Alter Egos:{' '}
              <span className='tag'>{character.biography.alterEgos}</span>
            </p>
          </div>
          <div className='profile--stats'>
            <h3 className='name-tag'>powerstats</h3>
            <div className='power-stats'>
              <div className='stats'>
                <p className='stats--name'>Combat</p>
                <span className='stats--number'>
                  {character.powerstats.combat}
                </span>
              </div>
              <div className='stats'>
                <p className='stats--name'>Power</p>
                <span className='stats--number'>
                  {character.powerstats.power}
                </span>
              </div>
              <div className='stats'>
                <p className='stats--name'>strength</p>
                <span className='stats--number'>
                  {character.powerstats.strength}
                </span>
              </div>
              <div className='stats'>
                <p className='stats--name'>Speed</p>
                <span className='stats--number'>
                  {character.powerstats.speed}
                </span>
              </div>
              <div className='stats'>
                <p className='stats--name'>Durability</p>
                <span className='stats--number'>
                  {character.powerstats.durability}
                </span>
              </div>
              <div className='stats'>
                <p className='stats--name'>Intelligence</p>
                <span className='stats--number'>
                  {character.powerstats.intelligence}
                </span>
              </div>
            </div>
          </div>
          <div className='groupAffiliation'>
            <h3 className='name-tag'>Group Affiliation</h3>
            {character.connections.groupAffiliation
              .split(', ')
              .map((item, i) => (
                <p key={i} className='tag'>
                  {item}
                </p>
              ))}
          </div>
          <div className='relatives'>
            <h3 className='name-tag'>Family</h3>
            {character.connections.relatives.split(', ').map((item, i) => (
              <p key={i} className='tag'>
                {item}
              </p>
            ))}
          </div>
          <div className='work'>
            <h3 className='name-tag'>Work</h3>
            {character.work.occupation.split(', ').map((item, i) => (
              <p key={i} className='tag'>
                {item}
              </p>
            ))}
          </div>
          <div className='base'>
            <h3 className='name-tag'>Base</h3>
            {character.work.base.split(', ').map((item, i) => (
              <p key={i} className='tag'>
                {item}
              </p>
            ))}
          </div>
        </div>
        <button onClick={back} className='btn btn-lg btn-block'>
          Go Back
        </button>
      </div>
    </Styled>
  );
};

export default ProfileCard;
