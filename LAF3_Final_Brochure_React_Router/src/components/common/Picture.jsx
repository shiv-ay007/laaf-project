import { useState } from 'react';

// Real event photos, when linked externally, fall back to bundled LAF artwork.
export default function Picture({ src, alt, className = '', style }) {
  const [image, setImage] = useState(src);
  return (
    <img
      src={image}
      alt={alt}
      loading="lazy"
      style={style}
      className={className}
      onError={() => { if (image !== '/assets/brochure-cover.webp') setImage('/assets/brochure-cover.webp'); }}
    />
  );
}
