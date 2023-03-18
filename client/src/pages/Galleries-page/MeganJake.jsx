import React from "react";
import "../../css/PhotoAlbum.css";
import AlbumMeganJake from "../../data/Album/AlbumMeganJake";

const MeganJake = () => {
  return (
    <>
      <main>
        <h2 className="photo-album--header">Megan + Jake</h2>
        <div className="photo-album--container">
          {AlbumMeganJake.map((photo) => {
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

export default MeganJake;
