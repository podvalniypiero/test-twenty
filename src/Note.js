import React from "react";
{
  /* this component must not be modified */
}
export const Note = (props) => {
  const { item, ...restProps } = props;

  return (
    <div {...restProps} className="note">
      {item || ""}
    </div>
  );
};
