import React from "react";

import MediaButton from "./styles";

export const PlayButton = ({ href, target }) => (
  <MediaButton href={href} target={target}>
    <MediaButton.Icon />
  </MediaButton>
);

export default PlayButton;
