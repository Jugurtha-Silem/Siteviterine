import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFund = () => {
    return (
        <div className='notFound'>
            <div className="notFound-content">
                <h2>Error 404</h2>
                <NavLink to="/">
                    <h3>Retour à laccueil <i className='fas fa-home'></i></h3>
                </NavLink>
            </div>
            
        </div>
    );
};

export default NotFund;