import React from "react";

// function Meet(){
//     return( <div>
//     <h1>Hello World</h1>
//     </div>
//     )
// }

export const Meet = ({name, heroName}) => {
    return (<div>
                <h1>{name} a.k.a {heroName}</h1>
                    {/* {props.children} */}
            </div>
    )
} 

// export const Meet = (props) => {
//     <h1>{props.name}</h1>
// }



// export default Meet