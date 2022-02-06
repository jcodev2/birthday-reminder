/* **************** Imports **************** */
import React from 'react'
/* **************** Variables **************** */

/* **************** Functions **************** */
const User = ({ userName, years, image }) => {
  return (
    <div className='user'>
      <div className='user-image'>
        <img src={image} alt='user' />
      </div>
      <div className='user-info'>
        <div className='user-name'>{userName}</div>
        <div className='user-years'>{years} years</div>
      </div>
    </div>
  )
}

/* **************** Code Execution **************** */
export default User
