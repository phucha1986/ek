import EKDropdownItems from "./EKDropdownItems";
import React, { useState } from 'react';

const EKDropdown = (params) => {  
  const [isShow, setIsShow] = useState(false);
  const [isDropDownItemFocus, setIsDropDownItemFocus] = useState(false);
  const [title, setTitle] = useState(params.Title);
  const [descriptions, setDescriptions] = useState(params.Descriptions);
  //const dropdownPopup = <EKDropdownItems Items={params.Items} ParentID={params.ID} Visible={isShow} />;
  //const selectedItem = params.Items.find(item => item.Selected);
  function onDropdownFocus()
  {    
    setIsShow(true);    
  }

  function onDropdownBlur()
  {
    setTimeout(function(){
      if(isShow && !isDropDownItemFocus)
      {
        setIsShow(false);
      }
    }, 500);
    
  }

  return (
    <div id={params.ID} role="combobox" aria-owns="auto-suggest_1_list" aria-expanded="true" aria-haspopup="true" onBlur={onDropdownBlur} onClick={onDropdownFocus}>
      <button type="button" className="hidden-control nofocus" aria-hidden="true" tabindex="-1"></button>
      <span className={`${params.DropdownType != "Airport" ? "passenger-selector__input" : ""} input-field input-field--active`}>
        <span className="input-field__field">
          <input aria-labelledby="auto-suggest_1_label" className="input-field__input ellipsis" aria-describedby="auto-suggest_1_aria-described-by" id="auto-suggest_1" aria-autocomplete="list" aria-controls="auto-suggest_1_list" type="text" autocomplete="off" value={descriptions}/>
        </span>
        <label for="auto-suggest_1" id="auto-suggest_1_label" aria-label={title} className="input-field__placeholder">{title}</label>
        {params.DropdownType == "Airport" &&
          <button type="button" className="input-field__button-icon nofocus" tabindex="-1" aria-hidden="true">
            <span dir="auto" className="close-icon--small pictogram-wrapper" aria-hidden="true">
              <i className="icon icon-close"></i>
            </span>
          </button>
        }
        {params.DropdownType != "Airport" &&
          <a class="link call-to-action-icon call-to-action">
            <span dir="auto" className="close-icon--small pictogram-wrapper">
              <i classNames="icon icon-chevron-down"></i>
            </span>
          </a>
        }
      </span>
      <span className="hidden-control" id="auto-suggest_1_aria-described-by">{params.Title}</span>
      <p role="region" aria-live="polite" className="auto-suggest__error-msg"></p>
      <EKDropdownItems Items={params.Items} isDropDownItemFocus={isDropDownItemFocus} setIsDropDownItemFocus={setIsDropDownItemFocus} ParentID={params.ID} Visible={isShow} SetTitle={setTitle} SetDescriptions={setDescriptions} />
    </div>
  );
}

export default EKDropdown;
