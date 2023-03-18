import React from "react";
import "../../css/PhotoAlbum.css";
import AlbumKayleenTristan from "../../data/Album/AlbumKayleenTristan";

const KayleenTristan = () => {
  return (
    <>
      <main>
        <h2 className="photo-album--header">Kayleen + Tristan</h2>
        <div className="photo-album--container">
          {AlbumKayleenTristan.map((photo) => {
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

export default KayleenTristan;
