import React from 'react'

export const About = () => {
  return (
    <div style={{
      width: '80vw',
      height: '100vh',
      backgroundColor: 'blue',
      border: '1px solid black',

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
          width: '80%',
          height: '50%',
          backgroundColor: 'white',
          border: '1px solid black',

          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          wordBreak: 'break-word',
      }}>
    
      <h1 style={{color: "black"}}>About in development</h1>
      </div>
    </div>
  )
}

