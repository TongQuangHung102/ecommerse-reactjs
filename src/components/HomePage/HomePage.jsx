import MyHeader from '@components/Header/Header';
import Banner from '@components/Banner/Banner';
import styles from './styles.module.scss';
import AdvanceHeading from '@components/AdvanceHeading/AdvanceHeading';
import Info from '@components/Info/Info';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';
import { useEffect } from 'react';
import { getProducts } from '@/apis/productsService';
import PopularProduct from '@components/PopularProduct/PopularProduct';
import { useState } from 'react';
function HomePage() {
    const [listProducts, setListProducts] = useState([]);
    useEffect(() => {
        getProducts().then((res) => {
            setListProducts(res.contents);
        });
    }, []);
    return (
        <>
            <div>
                <MyHeader />
                <Banner />
                <Info />
                <AdvanceHeading />
                <HeadingListProduct data={listProducts.slice(0, 2)} />
                <PopularProduct
                    data={listProducts.slice(2, listProducts.length)}
                />
                <div style={{ height: '200px' }}></div>
            </div>
        </>
    );
}

export default HomePage;
