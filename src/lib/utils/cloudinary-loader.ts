export default function imageLoader({ src, width, quality }) {
  const params = ["f_auto", "c_auto", `w_${width}`, `q_${quality || "auto"}`];
  return `https://res.cloudinary.com/${
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  }/image/upload/${params.join(",")}/driver-training/${src}`;
}
