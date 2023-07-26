import React from 'react'

const Success = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
      <img
        alt='logo'
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1h4J7nBbqeaBUY9emjXqScfoi0IAk_NJpzwizYuAVRpiPKIncISrBk9K58HLOxeB3TBk&usqp=CAU'
        style={{
          width: "10vw",
          height: "20vh"
        }}
      />
      <p
        style={{
          backgroundColor: "teal",
          color: "white",
          padding: "20px",
          borderRadius: "10px"
        }}
      >SUCCESSFUL</p>
      <p>Thanks for shopping with FAZ.</p>
    </div>
  )
}

export default Success