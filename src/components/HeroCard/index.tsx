import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './heroCard.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { addHeroFavorite, removeHeroFavorite } from '../../redux/heroFavorite/actions';

interface HeroCardProps {
  hero: any;
}
export const HeroCard: React.FC<HeroCardProps> = ({hero}) => {
  const imgURL = 'https://starwars-visualguide.com/assets/img/characters/';
  const dispatch = useDispatch();
  
  const data = JSON.parse(localStorage.getItem('star-wars')|| '[]');
  const [arr, setArr] = useState<any[]>([])
  useEffect(() => {
    setArr(data)
  },[])
 


  function getId(url: any) {
    return url.split('/')[url.split('/').length - 2];
  }

  const saveToLocalStorage = (items:any) => {
		localStorage.setItem('star-wars', JSON.stringify(items));
	};

  const exists = (hero: any) => {
    if (arr?.filter(item => item.name === hero.name).length > 0) {
      return true;
    }
    return false;
  };

  const addToFav = (hero: any) => {
    const data = JSON.parse(localStorage.getItem('star-wars')|| '[]');
    const items = [...data,hero];
    dispatch(addHeroFavorite(hero));
    saveToLocalStorage(items)
  };

  const removeFromFav = (hero: any) => {
    dispatch(removeHeroFavorite(hero));
    const newArrList = arr.filter(item => item.name !== hero.name);
    saveToLocalStorage(newArrList);
  };
  return (
    
      <div className="card">
        <img
          className="img-hero"
          src={`${imgURL + getId(hero.url)}.jpg`}
          alt="hero"
        />
        <div className="detailsContainer">
        <div>
            <p className="hero-name">{hero.name}</p>
          </div>

          <div
            className="hero-icon"
            onClick={() =>
              {exists(hero) ? removeFromFav(hero) : addToFav(hero);
              console.log(Boolean(exists(hero)));
              }
            }>
            <FavoriteIcon style={{color: exists(hero) ? 'red' : 'grey'}} />
          </div>
        </div>
         
     
      </div>
  );
};
