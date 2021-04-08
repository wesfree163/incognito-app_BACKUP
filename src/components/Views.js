import React from 'react';
import { useState } from 'react';

const Views = () => {

    // The React Hook's block to handle string input, getElementById matches the 'input id'
    const [name, setName] = useState('');
    function nameInput(){
        setName(document.getElementById('InputHolder').value);
    }

    return(
        <div>
            {/* Visual representation for testing purposes... The block underneath as well as its variable hook {name} can be commented on/off safely.*/}
            {/* <input id="InputHolder" type="text" placeholder="Type here..." />
            <button onClick={() => nameInput()}>Action</button> */}
            
            {/* 1 x 4  Grid is flexible vertically. Columns are separate, rows extend down. */}
            <div className="ViewsContent">
                <div className="set1">
                    <div>
                        {/* The variable. It can be changed to request a value from database. e1 can be removed. */}
                        item{name}
                    </div>
                </div>
                <div className="set2">
                    <div>
                        {/* The variable can also go here. It can be changed to request a value from database. f1 can be removed */}
                        item
                    </div>
                </div>
                <div className="set3">
                    <div>
                        {/* The variable can also go here. It can be changed to request a value from database. g1 can be removed */}
                        item
                    </div>
                </div>  
                <div className="set4">
                    <div>
                        {/* The variable can also go here. It can be changed to request a value from database. h1 can be removed */}
                        item
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Views;