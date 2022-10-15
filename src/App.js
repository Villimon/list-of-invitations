import React, { useEffect, useState } from 'react';
import Success from './components/Success/Success';
import Users from './components/Users/Users';
import './styles/styles.scss';

function App() {
  const [users, setUsers] = useState([])
  const [invites, setInvites] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [success, setSuccess] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(json => {
        setUsers(json.data)
      })
      .catch((err) => {
        console.warn(err)
        alert('Ошибка при получение пользователей')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  const onChangeSearchValue = (e) => {
    setSearchValue(e.target.value)
  }

  const onClickInvate = (id) => {
    if (invites.includes(id)) {
      setInvites(prev => prev.filter(_id => _id !== id))
    } else {
      setInvites((prev) => [...prev, id])
    }
  }

  const onClickSendInvites = () => {
    setSuccess(true)
  }

  return (
    <div className="app">
      {!success
        ? <Users
          users={users}
          isLoading={isLoading}
          searchValue={searchValue}
          onChangeSearchValue={onChangeSearchValue}
          onClickInvate={onClickInvate}
          invites={invites}
          onClickSendInvites={onClickSendInvites}
        />
        : <Success
          invites={invites}
        />
      }
    </div>
  );
}

export default App;
