import React from 'react';
import { FaWhatsapp, FaTwitter } from 'react-icons/fa';
import { IconBaseProps } from 'react-icons';

export interface Link {
  id: number;
  url: string;
  text: string;
}

export const links: Link[] = [
  
  {
    id: 3,
    url: '/projects',
    text: 'sign in',
  },
  {
    id: 4,
    url: '/contact',
    text: 'sign up',
  },
  
];

export interface SocialIcon {
  id: number;
  url: string;
  icon: React.ComponentType<IconBaseProps>;
}

export const social: SocialIcon[] = [
  
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: FaTwitter,
  },
  {
    id: 2,
    url: 'https://www.linkedin.com',
    icon: FaWhatsapp,
  },
  
];
