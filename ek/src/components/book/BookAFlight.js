import Title from "./Title";
import SearchBox from "./SearchBox";
import React, { useEffect } from 'react';

function BookAFlight() {

    useEffect(() => {
        document.title = "Book a Flight  | Account | Emirates Skywards | Emirates Vietnam";
     }, []);

    return (
        <>
            <Title />            
            <SearchBox />
        </>
    );
  }
  
  export default BookAFlight;