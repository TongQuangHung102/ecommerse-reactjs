import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Hello from '@components/Hello/Hello';
import './App.css';
import MainLayout from '@components/Layout/Layout';
import MyHeader from '@components/Header/Header';
import MyFooter from '@components/Footer/Footer';
import MyButton from './components/Button/Button';

function App() {
    return (
        <>
            <MainLayout>
                <MyHeader />
            </MainLayout>
        </>
    );
}

export default App;
