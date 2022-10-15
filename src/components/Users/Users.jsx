import React from 'react';
import Skeleton from '../Skeleton/Skeleton';
import User from './User/User';


const Users = ({ users, isLoading, onChangeSearchValue, searchValue, onClickInvate, invites, onClickSendInvites }) => {
    return (
        <div className='users'>
            <div className="users__search">
                <input
                    type="text"
                    placeholder='Найти пользователя...'
                    className="users__input"
                    value={searchValue}
                    onChange={onChangeSearchValue}
                />
            </div>
            {isLoading
                ? <div className="users__skeletons">
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>
                : <ul className="users__list">
                    {users
                        .filter(user => {
                            const fullName = (user.first_name + user.last_name).toLowerCase();
                            return fullName.includes(searchValue.toLowerCase()) ||
                                user.email.toLowerCase().includes(searchValue.toLowerCase())
                        })
                        .map(user => <User
                            isInvate={invites.includes(user.id)}
                            key={user.id}
                            {...user}
                            onClickInvate={onClickInvate}
                        />)
                    }
                </ul>
            }
            {invites.length > 0 &&
                <button onClick={onClickSendInvites} className="users__btn">Отправить приглашение</button>
            }
        </div>
    );
}

export default Users;
