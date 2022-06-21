import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    const { title, description, imageUrl, url, author, date, source } = this.props;
    return (

      <div className="card my-3" >
        {source && (<div style={{display:"flex",justifyContent:"flex-end",position:'absolute',right:'0'}}><span className="badge rounded-pill bg-danger" >
         {source}
        </span></div>)}
        <img className="card-img-top" src={imageUrl} alt="Not available" height={200} width={200} />
        <div className="card-body">
          <h5 className="card-title">{title.length <= 30 ? title : title.slice(0, 30) + '.....'}   </h5>
          <p className="card-text">{description.slice(0, 70)}</p>
          <p className="card-text">By {author} on {(new Date(date)).toGMTString()} </p>
          <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary bg-dark">View Source</a>
        </div>
      </div>
    )
  }
}

export default NewsItem;
