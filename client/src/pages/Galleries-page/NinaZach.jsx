import React from "react";
import "../../css/PhotoAlbum.css";
import AlbumNinaZach from "../../data/Album/AlbumNinaZach";
const NinaZach = () => {
  return (
    <>
      <main>
        <h2 className="photo-album--header">Nina + Zach</h2>
        <div className="photo-album--container">
          {AlbumNinaZach.map((photo) => {
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

export default NinaZach;
