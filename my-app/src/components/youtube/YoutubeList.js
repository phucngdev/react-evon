import React from "react";
import { YoutubeData } from "../../Data";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = (props) => {
  return (
    <div class="youtubeList">
      {props.children}
      {YoutubeData.map((item, index) => {
        return (
          <YoutubeItem
            key={item.id}
            image={item.image}
            avata={item.avata || item.image}
            title={item.title || "this is title"}
            author={item.author}
          ></YoutubeItem>
        );
      })}
    </div>
  );
};

export default YoutubeList;
