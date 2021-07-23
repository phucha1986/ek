import SearchBox from "./SearchBox";
import React, { useEffect } from 'react';
import CovidInformation from "../commons/CovidInformation";
import StatementWiget from "../myaccount/StatementWiget";
import ProductWiget from "../myaccount/ProductWiget";
import ExperienceBlock from "./ExperienceBlock";
import LocalMarket from "./LocalMarket";
import FeaturedLocation from "./FeaturedLocation";
import LocalMarketStudent from "./LocalMarketStudent";
import AboutUs from "./AboutUs";


function BookAFlight() {

    useEffect(() => {
        document.title = "Book a Flight  | Account | Emirates Skywards | Emirates Vietnam";
     }, []);

    return (
        <>
            {/* <Title />             */}
            <SearchBox />
            <StatementWiget />
            <ProductWiget />
            <ExperienceBlock />
            <LocalMarket />
            <FeaturedLocation />
            <LocalMarketStudent />
            <AboutUs />
            {/* <CovidInformation /> */}
        </>
    );
  }
  
  export default BookAFlight;