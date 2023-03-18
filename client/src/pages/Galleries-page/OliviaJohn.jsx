import React from "react";
import "../../css/PhotoAlbum.css";
import AlbumOliviaJohn from "../../data/Album/AlbumOliviaJohn";

const OliviaJohn = () => {
  return (
    <>
      <main>
        <h2 className="photo-album--header">Olivia + John</h2>
        <div className="photo-album--container">
          {AlbumOliviaJohn.map((photo) => {
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

export default OliviaJohn;
