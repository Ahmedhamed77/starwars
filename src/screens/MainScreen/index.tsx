import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {fetchCharactersData} from '../../redux/hero/actions'
import { Store } from '../../redux/store/types';


export const MainScreen = () => {
    const dispatch = useDispatch();
    const heroes  = useSelector((store:Store) => store.hero.heroes)
    const handlePress = () => {
         console.log('clicked');
         dispatch(fetchCharactersData(1))
    }
    return (
        <div>
            <button type="button" onClick={handlePress}>Click Me!</button>
        </div>
    )
}
