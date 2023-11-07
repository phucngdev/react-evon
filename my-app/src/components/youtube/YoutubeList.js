import React from "react";
import { YoutubeData } from "../../Data";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = () => {
  return (
    <div class="youtubeList">
      {YoutubeData.map((item, index) => {
        return (
          <YoutubeItem
            key={item.id}
            image={item.image}
            avata={item.avata}
            title={item.title}
            author={item.author}
          ></YoutubeItem>
        );
      })}
    </div>
  );
};

export default YoutubeList;
