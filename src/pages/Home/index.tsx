import React from 'react'

export const Home = () => {
  return (
    <div style={{
      width: '80vw',
      height: '100vh',
      margin: '0 auto',
      border: '1px solid black',
      backgroundColor: 'white',

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{
        width: '80%',
        height: '50%',
        margin: '0 auto',
        border: '1px solid black',
        backgroundColor: 'brown',

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
    </div>
  )
}
