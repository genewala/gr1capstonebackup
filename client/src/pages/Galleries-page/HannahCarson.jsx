import React from "react";
import "../../css/PhotoAlbum.css";
import AlbumHannahCarson from "../../data/Album/AlbumHannahCarson";

const HannahCarson = () => {
  return (
    <>
      <main>
        <h2 className="photo-album--header">Hannah + Carson</h2>
        <div className="photo-album--container">
          {AlbumHannahCarson.map((photo) => {
            const { imgSrc, imgID } = photo;

            return (
              <div className="each-photo--container" key={imgID}>
                <img src={imgSrc} alt="" />
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default HannahCarson;
