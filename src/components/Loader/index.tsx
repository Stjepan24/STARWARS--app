import React from 'react';
import './index.scss';

const Loader = (): JSX.Element => {
    return (
        <div className='loader'>
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loader;
