import React from "react";

const NewsItem = (props) =>{
 
    let { title, description, imageUrl, newsUrl,author,date,source } = props;
    return (
      <div>
        <div className="card">

        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>
    {!source?' By NewsMonkey':source}  </span>
          <img
            src={
              !imageUrl
                ? "https://static.toiimg.com/thumb/msid-84292736,width-400,resizemode-4/84292736.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title} <span className="badge text-bg-primary">New</span></h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author?'unKnown':author} on {new Date(date).toGMTString()}</small></p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn  btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;
