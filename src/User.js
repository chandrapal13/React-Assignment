import React from 'react';

const User = (props) => {
const {data}= props
    return (

        <div>
 
       <h1>
          App Component
       </h1>
<h4>{data.age}</h4>
        </div>


    )
}
export default User;