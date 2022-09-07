import React from "react";
import { withAuth0 } from '@auth0/auth0-react';
class Welcome extends React.Component{




   


render(){

    return(
                  
   <h1>Wecome to our website</h1>
   
                    

    )
}
}



export default withAuth0(Welcome);