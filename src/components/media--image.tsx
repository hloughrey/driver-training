import Image, { ImageProps } from "next/image";

// import { absoluteURL } from "lib/utils/absolute-url";
import { MediaProps } from "./media";
import landingHero from "../../public/imgs/landing-hero.jpg";

interface MediaImageProps extends MediaProps, Partial<ImageProps> {}

export function MediaImage({
  media,
  // layout = "responsive",
  // objectFit,
  // width = "100",
  // height = "100",
  ...props
}: MediaImageProps) {
  const image = media?.field_media_image;

  if (!image) {
    return null;
  }

  return (
    <Image
      // src={absoluteURL(image.uri.url)}
      // src="/landing-hero.jpg"
      src={landingHero}
      // layout={layout}
      // objectFit={objectFit}
      width={image.resourceIdObjMeta?.width || 150}
      height={image.resourceIdObjMeta?.height || 150}
      // alt={image.resourceIdObjMeta.alt || "Image"}
      // title={image.resourceIdObjMeta.title}
      alt="hero"
      title="hero"
      {...props}
    />
  );
}
