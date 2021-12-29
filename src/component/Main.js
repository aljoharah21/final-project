import React from 'react'
import Plants from './Plants'
import Sidbar from './Sidbar'
import Aboutus from './Aboutus'
import Nav from './Nav';

import "bootstrap/dist/css/bootstrap.min.css";


const Main = (props) => {

    return( 

<div className='container'>

  <Nav authedUser={props.authedUser} log={props.log} className="row "/>
  

  <div className='row '>
   <div className='col-md-8'>
   <Aboutus />
   <Plants />
     </div> 
  {/* <Plants className="col-md-9" /> */}
  <div className='col-md-4'>
  <Sidbar />

  </div>
 
  </div>
 




</div>
)

}
export default Main;