import React, { useEffect, useState } from 'react';
function Title(params) {
    console.log("Title");
    useEffect(() => {
        console.log("Title useeffect");
    });
    useEffect(() => {
        console.log("Title useeffect []");
    }, []);
    useEffect(() => {
        console.log("Title useeffect text");
    }, [params.text]);
    return (
        <div id="66025" data-organism="g-o-c-008-4-page-header">{params.text}<div class="e-container--separator"><div data-auto="page-header" class="page-header"><div class="e-container--separator page-header__content-header"><div class="content-header"><p class="content-header__section" aria-hidden="false">Book</p><h1 class="content-header__text content-header__text--large reset-h">Book a flight</h1><div class="rich-text content-header__subtext content-header__subtext--large content-header__subtext--bottom">Search for Emirates flights and book online. See our routes and schedules, and discover more about the experience you can look forward to on board.</div></div></div></div></div></div>
    );
  }
  
  export default Title;
  