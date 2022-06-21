import React from 'react'

function Footer() {

  const footerStyle = {
    minHeight: "75px",
    backgroundColor: "black",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent:"center"
  }
  return (
    <footer style={footerStyle}>
      <p className="footer-heart">
        Made with <g-emoji className="g-emoji" alias="heart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png">
          <img className="emoji" alt="heart" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png" /></g-emoji> by <a href="https://www.linkedin.com/in/sandeep-kolla-31b0b8201" target={"_blank"} rel="noreferrer">Sandeep </a>
      </p>
      <p> &nbsp;powered by <a href='https://newsapi.org/' target={"_blank"} rel="noreferrer"> News Api </a>
      </p>   
    </footer>
  )
}

export default Footer

