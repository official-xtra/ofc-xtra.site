import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId, top, left, right }) => (
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
        position: "absolute",
        width: "100%",
        height: "100%",
        top: `${top}`,
        left: `${left}`,
        right: `${right}`,
        zIndex: 10,
      }}
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired,
  left: PropTypes.string,
  right: PropTypes.string,
};

export default YoutubeEmbed;
