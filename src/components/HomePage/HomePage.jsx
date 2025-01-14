import MyHeader from '@components/Header/Header';
import Banner from '@components/Banner/Banner';
import styles from './styles.module.scss';
import AdvanceHeading from '@components/AdvanceHeading/AdvanceHeading';
import Info from '@components/Info/Info';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';
import { useEffect } from 'react';
import { getProducts } from '@/apis/productsService';
function HomePage() {
    useEffect(() => {
        getProducts();
    }, []);
    return (
        <>
            <div>
                <MyHeader />
                <Banner />
                <Info />
                <AdvanceHeading />
                <HeadingListProduct />
                <div style={{ height: '200px' }}></div>
            </div>
        </>
    );
}

export default HomePage;
