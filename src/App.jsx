import { useState } from 'react';
import reactLogo from './assets/react.svg';
import MainLayout from '@components/Layout/Layout';
import MyHeader from '@components/Header/Header';
import MyFooter from '@components/Footer/Footer';
import MyButton from './components/Button/Button';
import HomePage from './components/HomePage/HomePage';
import Info from './components/Info/Info';

function App() {
    return (
        <>
            <HomePage />
            <Info />
        </>
    );
}

export default App;
