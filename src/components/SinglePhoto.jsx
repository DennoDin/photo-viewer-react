import React from "react";
import * as _ from "lodash";

export const SinglePhoto = (props) => {
  // console.log(`props inside SinglePhoto ${props}`);
  return (
    <div>
      {/* {console.log(props.key)} */}
      <img
        className="SinglePhoto"
        key={props.image}
        src={"http://react.sprint.s3.amazonaws.com/" + props.image}
        alt="piece of crap"
      />
    </div>
  );
};
