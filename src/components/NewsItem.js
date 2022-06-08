import React, { Component } from 'react'

export class NewsItem extends Component {  
  render() {
    const {title,description,imageUrl,url} = this.props;
    return (
      <div className="card my-3" style={{width:"24rem"}} >
        <img className="card-img-top" src={imageUrl} alt="Card cap" height={200} width={200} />
          <div className="card-body">
            <h5 className="card-title">{title.length <=30 ? title : title.slice(0,30) + '.....' }</h5>
            <p className="card-text">{description.slice(0,70)}</p>
            <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary bg-dark">View Source</a>
          </div>
      </div>
    )
  }
}

export default NewsItem;
