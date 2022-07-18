import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {useEffect} from "react";

const axiosInstance = axios.create({
    baseURL: 'https://dev.cloudax.co/api',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

const register = (data) => {
    // return fetch('https://dev.cloudax.co/api/auth/register', {
    //   method: 'POST',
    //   body: JSON.stringify(data),
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json',
    //   },
    // });
    return axiosInstance.post(
        '/auth/register',
        data,
    );
};


const catFact = () => {
    return axiosInstance.get('https://catfact.ninja/fact');
};

function App() {
    useEffect(() => {
        register({firstName: '', lastName: '', email: '', password: ''}).then((response) => {
            console.log(response)
        })
        catFact().then((response) => {
            console.log(response)
        })
    }, [])
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
