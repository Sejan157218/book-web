import React from "react";
import useAuth from "../../../hook/useAuth";
import Authors from "../Authors/Authors";
import Banner from "../Banner/Banner";
import RecentView from "../RecentView/RecentView";
import ShowBookHome from "../ShowBookHome/ShowBookHome";

const Home = () => {
  const { allData } = useAuth();
  const adventure = allData.filter(
    (item) => item.category.title === "Adventure"
  );
  const Drama = allData.filter((item) => item.category.title === "Drama");
  const Thriller = allData.filter((item) => item.category.title === "Thriller");
  return (
    <>
      <Banner></Banner>
      <ShowBookHome items={adventure} title={"Adventure"}></ShowBookHome>
      <ShowBookHome items={Drama} title={"Drama"}></ShowBookHome>
      <Authors></Authors>
      <ShowBookHome items={Thriller} title={"Thriller"}></ShowBookHome>
      {/* <RecentView></RecentView> */}
    </>
  );
};

export default Home;
