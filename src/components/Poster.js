import React from 'react'

const Poster = ( detail ) => {
  console.log("???", detail);
  return (
    <div 
    className="banner"
    style={{
      backgroundImage: "url(" + 
      `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${detail.poster_path}` + 
      ")",
    }}
    >
     <div className="banner-info">
      <h1>{detail.title}</h1>
      <p>{detail.overview}</p>
     </div>
    </div>
  )
}

export default Poster