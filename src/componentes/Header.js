import React, {Fragment} from 'react'

// function Header(props){

//     // console.log(props);

//     return(
//         // <h1>Hola Mundo</h1>
//         <Fragment>
//         <h1>{props.titulo}</h1>
//         </Fragment>
//     );
// }

const Header = ({titulo}) =>{
    return(
        <Fragment>
        <h1>{titulo}</h1>
        </Fragment>
    );
}



export default Header;