import React from 'react';

export default class Login extends React.Component {
  render () {
    return <div>
      <label>Введите логин и пароль:</label><br />
      <input type="text" placeholder="Логин" /><br />
      <input type="password" placeholder="Пароль" /><br />
      <button>Войти</button>
    </div>;
  }
}