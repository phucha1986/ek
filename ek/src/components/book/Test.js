import React, { useEffect, useState } from 'react';
import Title from './Title';
function Test(params) {
    console.log("test");
    const [text, setText] = useState('Test');
    const [num, setNum] = useState(0)
    console.log(num);
    return (
        <div>
            <Title text={text} />
            <button value={num} onClick={() => { setNum(num + 1)}}>{num}</button>
        </div>
    );
  }
  
  export default Test;
  