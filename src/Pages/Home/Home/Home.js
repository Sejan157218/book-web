
import React from 'react';
import Authors from '../Authors/Authors';
import Banner from '../Banner/Banner';
import RecentView from '../RecentView/RecentView';
import ShowBookHome from '../ShowBookHome/ShowBookHome';
import ShowBookHome2 from '../ShowBookHome2/ShowBookHome2';
import ShowBookHome3 from '../ShowBookHome3/ShowBookHome3';

const Home = () => {
    return (
        <>
           <Banner></Banner>
           <ShowBookHome></ShowBookHome>
           <ShowBookHome2></ShowBookHome2>
           <ShowBookHome3></ShowBookHome3>
           <Authors></Authors>
           <RecentView></RecentView>
      
        </>
    );
};

export default Home;