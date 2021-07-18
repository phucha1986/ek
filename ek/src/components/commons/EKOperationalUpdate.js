import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';

function EKOperationalUpdate() {

  return (
    <div className="operational-updates operational-updates--multiple ou0" style={{backgroundColor: "#fef8d5"}}>
      <div className="operational-update operational-update--not-dismissed operational-update--main ou1" data-id="4427">
        <div className="g-site-container operational-update__wrapper ou2" >
          <p className="operational-update__label ou3">
            <span className="operational-update__label--bold ou4">
              <i className="icon icon-information ou5"></i>
              <span className="ou6">Important:</span>
            </span>
            <a href="/vn/english/help/travel-updates/#4427" className="operational-update__anchor ou7"> Notice for customers whose flights are cancelled or impacted by suspensions</a>
          </p>
          <span className="operational-update__expander js-expand-operational-updates ou8">
            <a href="#" className="operational-update__expander--closed ou9">
              <span className="ou10">Show more</span>
              <i className="icon icon-chevron-down ou11"></i>
            </a>
            <a href="#" className="operational-update__expander--opened hidden ou12">
              <span className="ou13">Show less</span>
              <i className="icon icon-chevron-up ou14"></i>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default EKOperationalUpdate;
