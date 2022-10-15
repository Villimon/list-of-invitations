import React from 'react';
import Avatar from '../../../assets/images/avatar.png';
import Plus from '../../../assets/images/plus.svg';
import Minus from '../../../assets/images/minus.svg';

const User = ({ id, email, first_name, last_name, avatar, onClickInvate, isInvate }) => {
    return (
        <li className='user'>
            <div className="user__image">
                <img src={avatar || Avatar} alt="" />
            </div>
            <div className="user__info">
                <h3 className="user__name">{first_name} {last_name}</h3>
                <h4 className="user__mail">{email}</h4>
            </div>
            <div className="user__action">
                <img src={isInvate ? Minus : Plus} alt="" onClick={() => onClickInvate(id)} />
            </div>
        </li>
    );
}

export default User;
