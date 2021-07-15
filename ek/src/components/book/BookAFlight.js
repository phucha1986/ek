import Title from "./Title";
import SearchBox from "./SearchBox";
import React, { useEffect } from 'react';
import CovidInformation from "../commons/CovidInformation";

function BookAFlight() {

    useEffect(() => {
        document.title = "Book a Flight  | Account | Emirates Skywards | Emirates Vietnam";
     }, []);

    return (
        <>
            <Title />            
            <SearchBox />
            <CovidInformation />
        </>
    );
  }
  
  export default BookAFlight;