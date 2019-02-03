import React from 'react';
import ReactDOM from 'react-dom';
//import Login from './Login';
import Menu from './Menu';
import Login from './Login';

const app = document.getElementById('root');

class App extends React.Component {
    render() {
        const menuItems = [
            {href: "http://mywebsite.com/", title: "Главная"},
            {href: "http://mywebsite.com/about/", title: "О компании"},
            {href: "http://mywebsite.com/catalog/", title: "Каталог"},
            {href: "http://mywebsite.com/contacts/", title: "Контакты"},
        ];
        return <div>
            <h1>React Web Application</h1>
            <Menu titleMenu='Основное меню:' items={menuItems} /><br />
            <Login />
            </div>;
    }
}

ReactDOM.render(<App/>, app);