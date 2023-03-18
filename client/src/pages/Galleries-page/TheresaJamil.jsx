import React from "react";
import "../../css/PhotoAlbum.css";
import AlbumTheresaJamil from "../../data/Album/AlbumTheresaJamil";

const TheresaJamil = () => {
  return (
    <>
      <main>
        <h2 className="photo-album--header">Theresa + Jamil</h2>
        <div className="photo-album--container">
          {AlbumTheresaJamil.map((photo) => {
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

export default TheresaJamil;
