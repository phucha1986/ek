import React, { useState, useRef, useEffect } from 'react';
import { Link} from 'react-router-dom';

function EKLevel2HeaderItem(params) {
  const {ItemText, ItemIndex, CloseMenu, IsShow, Level3} = params;
  const wrapperRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);
  const [numberClicked, setNumberClicked] = useState(0);

  useEffect(() => {      
    function handleClickOutside(event) {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
          if(ItemIndex == 0)             
          {
            setNumberClicked(numberClicked + 1);
          }
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

  useEffect(() => {
    setNumberClicked(0);
  }, [IsShow]);

  const onMenuClick = () => 
  {    
    setIsClicked(true);
    console.log(Level3)
  }

  let level3 = typeof Level3 != 'undefined' && typeof Level3.Items != 'undefined' ? Level3.Items.map((item, i) => {  
    let subItems = item.map((subItem, subI) => {
      return <li key={subI} className={subI == 0 ? 'link-heading' : ''}>
        <Link className="third-level-mobile-heading" title="Search for a flight" to={subItem.Link}  data-id="header_nav_link">
          <span className="no-underline no-external-link">
            <i className="thirdlevel__menu-link">{subItem.Title}</i>
            <span aria-hidden="true" class="arrow-indicator icon icon-chevron-right"></span>
          </span>
        </Link>      
      </li>});
    return <div className="thirdlevel-1-column" key={i}>
      <ul className="thirdlevel-1-column">
        {subItems}
      </ul>
    </div>;
    
    }) : '';

  return (
    <li className={isClicked || (numberClicked == 0 && ItemIndex == 0) ? 'second-level-active-list' : ''} role="presentation" key={ItemIndex} ref={wrapperRef}>
      <a aria-controls="submenu-0-0" role="tab" className="js-secondlevel-link secondlevel-link" data-id="header_nav_section" onClick={onMenuClick} data-submenu="0-0">{ItemText}<span className="secondlevel-mobile-arrow-icon icon icon-chevron-down" aria-hidden="true"></span></a>
      <div role="tabpanel" id="submenu-0-0" className="megalinks__thirdlevel">
        <div className="js-megalinks-thirdlevel-inner megalinks__thirdlevel-inner">
          <div className="thirdlevel-title-holder" role="heading" aria-level="2">
            <a className="thirdlevel-title" title="Fly Better" data-id="header_nav_link">{typeof Level3 != 'undefined' ? Level3.Title : ''}</a>
            <span className="arrow-indicator icon icon-chevron-right" aria-hidden="true"></span>
          </div>
          <div className="thirdlevel__link-list">
            {level3}
          </div>
          <a className="js-thirdlevel-close-btn thirdlevel-close-btn icon icon-delete-light" href="#" onClick={CloseMenu}><span className="sr-only">Fly Better</span></a></div></div>
    </li>
  );
}

export default EKLevel2HeaderItem;
