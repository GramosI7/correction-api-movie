import React from "react";

export default function Movie(props) {
  //   console.log(props.propsMovie);
  return (
    <div>
      <h1>{props.propsMovie.title}</h1>
      <iframe src={`http://www.youtube.com/embed/${props.propsIdVideo}`} />
      <p>{props.propsMovie.overview}</p>
    </div>
  );
}
