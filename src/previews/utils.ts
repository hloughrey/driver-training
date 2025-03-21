export const processMedia = (media: any) => {
  if (!media) return media;

  // For preview, we need to handle image paths differently
  return {
    ...media,
    image: media.image
      ? // Use a direct Cloudinary URL for images
        typeof media.image === "string" && !media.image.startsWith("http")
        ? `https://res.cloudinary.com/latitude55/image/upload/f_auto,c_auto,w_800,q_auto/driver-training/${media.image}`
        : media.image
      : media.image,
  };
};

export const processEntryData = (entry: any) => {
  return entry.getIn(["data"]).toJS();
};
