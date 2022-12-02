import * as React from "react";
import {Button} from "antd";
import { Link } from "react-router-dom";

const DisplayButton = (props) => {
  return (
    <Button
      variant={props.type}
      style={{
        ...props.style
      }}
      onClick={() => {
        // alert("clicked");
        props.onPress();
      }}
      disabled={props.disabled}
    >
      <p
        style={{
          ...props.textStyle
        }}
      >
        {props.text}
      </p>
    </Button>
  );
};

export { DisplayButton };
