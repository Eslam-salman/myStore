import React from 'react';
function Titel({name,titel}){
return(
    <div className="row">
        <div className="col-10 mx-auto my-2 text-center Text-titlel">
            <h1 className="text-capitalize font-weight-bold">{name}
                <strong className="text-blue px-2">{titel}
                </strong>
            </h1>
        </div>
    </div>
)
}
export default Titel;