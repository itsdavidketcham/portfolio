import React, { useState } from "react";
import { ImageOff } from "lucide-react";

/**
 * Drop-in editorial image frame: rounded corners, hover zoom,
 * optional caption. Until the real file exists at `src`, it
 * shows a labelled placeholder instead of a broken-image icon —
 * so you can wire up every section now and just swap file paths
 * in src/data/content.js later.
 */
export default function ImageFrame({ src, alt, ratio = "4 / 5", caption, className = "", frameClassName = "" }) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className={className}>
      <div className={`image-frame ${frameClassName}`} style={{ aspectRatio: ratio }}>
        {failed ? (
          <div className="image-placeholder">
            <ImageOff size={20} />
            <span>Add image at</span>
            <code>{src}</code>
          </div>
        ) : (
          <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
        )}
      </div>
      {caption && <figcaption className="image-caption">{caption}</figcaption>}
    </figure>
  );
}
