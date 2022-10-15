import React from 'react'

export default function Footer() {
  let footerStyle = {
    position : "relative",
    top : "80vh",
    width : "100%",
    border : "2px solid red"
  }
  return (
    <div className='bg-dark text-light my-3 py-3' style={footerStyle}>
      <p className='text-center'>
        Copyright &copy; todolist.com
      </p>
    </div>
  )
}