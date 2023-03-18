import React from "react";
import "../../css/PhotoAlbum.css";
import AlbumJessJordan from "../../data/Album/AlbumJessJordan";

const JessJordan = () => {
  return (
    <>
      <main>
        <h2 className="photo-album--header">Jess + Jordan</h2>
        <div className="photo-album--container">
          {AlbumJessJordan.map((photo) => {
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

export default JessJordan;
