import React from 'react';

const FaceRecongnition = ({ imageUrl }) => {
    return (
        <div className='center'>
            <div className='absolute mt2'>
            <img alt='' src={imageUrl} width='500px' height='auto'></img>
            </div>
        </div>
    );
}


export default FaceRecongnition;