import React from 'react';

const contactMedia = ({icon: Icon, contactMedium, value, link}) => {
  return (
    <div className='d-flex align-items-center text-light gap-4'>
      <div className='bg-info rounded-circle p-3 px-4 d-flex align-items-center'> 
        <Icon />
      </div>

      <div>
        <p className='text-white-50'>{contactMedium}</p>
        <a className='fw-bolder text-info' style={{textDecoration: "none"}} href={link} target='_blank'>{value}</a>
      </div>

    </div>
  )
}

export default contactMedia