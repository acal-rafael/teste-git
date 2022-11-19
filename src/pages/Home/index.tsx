import React from 'react'

export const Home = () => {
  return (
    <div style={{
      width: '80vw',
      height: '100vh',
      margin: '0 auto',
      border: '1px solid black',
      backgroundColor: 'red',

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <h1 style={{
        width: '200px',
        height: '100px',
        color: "white",

        border: '1px solid black',
      }}>Home</h1>
    </div>
  )
}
