// components/Gallery.js

import React from "react";
import Pictures from "./Pictures"

const gallery = () => {
  return (
    <div className = "gallery">
        <h1>Here's a bunch of pictures I really like:</h1>

<div className = "layout">
<Pictures/>
</div>
    </div>
  );
};

export default gallery;
