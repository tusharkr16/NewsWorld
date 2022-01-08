import React from "react";

const Newsitem = (props) => {
    let {
      title = "",
      description = "",
      Imageurl = "",
      newsUrl = "",
      time = "",
      source =""
    } = props;
    return (
      <div className="">
        <div
          className="card shadow-lg p-3"
          style={{
            backgroundColor: "#d9e4f5",
            backgroundImage: "linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 74%)",
          }}
        >
          <img src={Imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left: '0% !important' , zIndex:'1'}}>
              {source}
              <span class="visually-hidden">unread messages</span>
            </span>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-primary">
                On {new Date(time).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target="_blank" rel='noopener' className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }

  export default Newsitem ;
