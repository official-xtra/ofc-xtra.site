import React from "react";
import PropTypes from "prop-types";

export const YoutubeEmbedDesktop = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "-24px",
        left: "-24px",
        zIndex: 10,
      }}
    />
  </div>
);

YoutubeEmbedDesktop.propTypes = {
  embedId: PropTypes.string.isRequired,
};
