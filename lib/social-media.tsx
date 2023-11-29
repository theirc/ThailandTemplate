// A module for handling social media.
import { SocialMediaProps } from '@ircsignpost/signpost-base/dist/src/header-banner';

import facebookImage from '../public/facebook.svg';

export interface SocialMediaLink {
  title: string;
  href: string;
}

// Serializable social media links
export interface SocialMediaLinks {
  facebookLink: SocialMediaLink;
}

export function getSocialMediaProps(
  socialMediaLinks: SocialMediaLinks
): SocialMediaProps[] {
  return [
    {
      ...socialMediaLinks.facebookLink,
      image: facebookImage,
    },
  ];
}
