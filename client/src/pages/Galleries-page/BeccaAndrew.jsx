import React from "react";
import "../../css/PhotoAlbum.css";
import AlbumBeccaAndrew from "../../data/Album/AlbumBeccaAndrew";

const BeccaAndrew = () => {
  return (
    <>
      <main>
        <h2 className="photo-album--header">Becca + Andrew</h2>
        <div className="photo-album--container">
          {AlbumBeccaAndrew.map((photo) => {
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

export default BeccaAndrew;
