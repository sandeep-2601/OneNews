import React, { Component } from 'react'

export class Footer extends Component {
  footerStyle = {
    height: "100px",
    backgroundColor: "black",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center", 
  }
  render() {
    return (
      <footer className="fixed-bottom" style={this.footerStyle} > 
        Made with <span style={{color:"red"}}>  ♥</span>by Sandeep 
      </footer>
    )
  }
}

export default Footer
