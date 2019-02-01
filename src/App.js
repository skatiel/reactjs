import React from 'react';
import ReactDOM from 'react-dom';
import Blog from './app/components/Blog';
import WelcomeModal from './app/components/WelcomeModal';
import './app/styles/style.css';

const app = document.getElementById('root');

class App extends React.Component {
    render() {
        const blogItems = [
            {title: "Первая новость", url: "#modal1", text: "modal1", postBody: "Художественный стиль – это особый стиль речи, который получил широкое распространение как в мировой художественной литературе в целом, так и в копирайтинге в частности."},
            {title: "Вторая новость", url: "#modal2", text: "modal2", postBody: "Художественный стиль – это особый стиль речи, который получил широкое распространение как в мировой художественной литературе в целом, так и в копирайтинге в частности."},
            {title: "Третья новость", url: "#modal3", text: "modal3", postBody: "Художественный стиль – это особый стиль речи, который получил широкое распространение как в мировой художественной литературе в целом, так и в копирайтинге в частности."}
        ];
        return <div>
            <h1>React Web Application</h1>
            <Blog titleBlog='News:' items={blogItems}/>
            <WelcomeModal />
            </div>;
    }
}

ReactDOM.render(<App/>, app);