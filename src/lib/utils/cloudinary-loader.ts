export default function imageLoader({ src }) {
  // If the src already starts with a slash, use it as is
  // Otherwise, prepend /images/ to it
  const imagePath = src.startsWith("/") ? src : `/images/${src}`;

  // Return the local image path
  return imagePath;
}
