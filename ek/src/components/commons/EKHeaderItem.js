import React, { useState, useRef, useEffect } from 'react';
import EKLevel2HeaderItem from './EKLevel2HeaderItem';

function EKHeaderItem(params) {
  const {ItemText, ItemIndex, Level2} = params;
  const wrapperRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);


  useEffect(() => {      
      function handleClickOutside(event) {
          if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
              setIsClicked(false);
          }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleClickOutside);
      };
  }, [wrapperRef]);

  const onMenuClick = () => 
  {
    setIsClicked(true);
  }

  let level2 = Level2.map((item, i) => {    
    return <EKLevel2HeaderItem key={i} ItemIndex={i} Level3={item.Level3} ItemText={item.ItemText} IsShow={isClicked} CloseMenu={() => {setIsClicked(false);}} />
  });

  return (
    <li data-link-name={`mainnav-link-${ItemIndex+1}`} key={ItemIndex} className={isClicked ? 'active-menu' : ''} ref={wrapperRef}>
      <span className="mainnav-mobile-arrow-icon icon icon-chevron-down" aria-hidden="true"></span>
      <a onClick={onMenuClick} data-id="header_nav_section" className="js-megalinks-toplevel megalinks-toplevel" aria-expanded="false">{ItemText}</a>
      <div className="js-megalinks__secondlevel megalinks__secondlevel">
        <div className="megalinks__secondlevel--inner">
          <ul role="tablist">
            {level2}
          </ul>
        </div>
      </div>
    </li>
  );
}

export default EKHeaderItem;
