import React from "react";

const YoutubeItem = (props) => {
  return (
    <div className="YoutubeItem">
      <div className="youtubeImage">
        <img src={props.image} alt="" />
      </div>
      <div className="youtubeInfo">
        <img src={props.avata} alt="" className="youtubeAvt" />
        <div className="youtubeTitle">
          <h3 className="title">{props.title}</h3>
          <h4 className="author">{props.author}</h4>
        </div>
      </div>
    </div>
  );
};

export default YoutubeItem;
