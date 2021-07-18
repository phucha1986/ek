import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';

function EKHeaderItem(params) {
  const {ItemText, ItemIndex} = params;
  const wrapperRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);


  useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
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



  const onMenuClick = (event) => 
  {
    setIsClicked(true);
  }

  return (
    <li data-link-name={`mainnav-link-${ItemIndex+1}`} key={ItemIndex} className={isClicked ? 'active-menu' : ''} ref={wrapperRef}>
      <span className="mainnav-mobile-arrow-icon icon icon-chevron-down" aria-hidden="true"></span>
      <a onClick={onMenuClick} data-id="header_nav_section" data-link="BOOK" className="js-megalinks-toplevel megalinks-toplevel" aria-expanded="false">{ItemText}</a>
      <div className="js-megalinks__secondlevel megalinks__secondlevel">
        <div className="megalinks__secondlevel--inner">
          <ul role="tablist">
            <li role="presentation">
              <a aria-controls="submenu-0-0" role="tab" className="js-secondlevel-link secondlevel-link" data-id="header_nav_section" href="/vn/english/book/" data-submenu="0-0" data-link="BOOK:Book">Book<span className="secondlevel-mobile-arrow-icon icon icon-chevron-down" aria-hidden="true"></span></a>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
}

export default EKHeaderItem;
