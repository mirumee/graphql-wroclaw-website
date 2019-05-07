import React from "react";
import Footnote from "./styles";
import Logo from "../../icons";

const Footer = () => (
  <Footnote>
    <Footnote.Copyright>
      COPYRIGHT © 2009–
      {new Date().getFullYear()}
      {` `}
      MIRUMEE SOFTWARE
    </Footnote.Copyright>
    <Logo.PoweredByMirumee />
  </Footnote>
);

export default Footer;
