import React from 'react';
import './loader.css';

export const ActivityIndicator = () => {

    const style = {
        width: '48px',
        height: '48px',
        backgroundColor: 'transparent',
        borderRadius: '50%',
        border: '8px solid rgba(0,0,0,0.3)',
        borderTopColor: 'rgba(0,0,0,0.75)'
      };

    return (
        <div className='containerActivityIndicator'>
             <div className="activityIndicator"  style={style}/>
        </div>
    )
}
