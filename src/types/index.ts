// Common types used across the application

// Media object type used in multiple components
export interface Media {
  alt: string;
  image: string;
}

// Common page metadata
export interface PageMeta {
  title: string;
  description?: string;
}

// Contact details type
export interface ContactDetails {
  telephone: number;
  email: string;
}

// Hero section props
export interface HeroProps {
  title: string;
  subTitle?: string;
  media: Media;
  phoneNumber: number;
}

// Common props for sections with media
export interface MediaSectionProps {
  title: string;
  subTitle?: string;
  backgroundMuted: boolean;
  media?: Media;
  media_position: "left" | "right";
}

// Page props with common attributes
export interface PageProps {
  attributes: {
    pageMeta: PageMeta;
    hero: Omit<HeroProps, "phoneNumber">;
    [key: string]: any;
  };
  contactDetails: ContactDetails;
  html?: any;
}

// Static props return type
export type StaticPropsReturn = {
  props: PageProps;
};
