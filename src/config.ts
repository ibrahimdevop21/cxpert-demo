import type { AstroConfig } from 'astro';

export const SITE = {
  name: 'CXperts',
  description: 'Leading Business Process Outsourcing company delivering exceptional customer experience services',
  defaultLanguage: 'en',
  site: 'https://cxpertseg.com',
  base: '/',
  trailingSlash: false,
};

export const METADATA = {
  title: {
    default: 'CXperts - Excellence in Customer Experience',
    template: '%s — CXperts',
  },
  description: 'CXperts is an Egyptian-based BPO company specializing in delivering exceptional customer experience services across various fields.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    site_name: 'CXperts',
    images: [
      {
        url: '~/assets/images/default.png',
        width: 1200,
        height: 628,
      },
    ],
    type: 'website',
  },
  twitter: {
    handle: '@cxpertseg',
    site: '@cxpertseg',
    cardType: 'summary_large_image',
  },
};

export const COMPANY = {
  name: 'CXperts',
  address: 'Ai Bustan Mall, 18 Al Bustan Street, Downtown, 9th Floor, APT 7, Cairo, Egypt',
  contact: {
    email: 'contact@cxpertseg.com',
    phone: {
      egypt: '1099049595',
      spain: '(+34) 290002124',
    },
  },
};

export const NAVIGATION = {
  main: [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Services', href: '/services' },
    { text: 'Clients', href: '/clients' },
    { text: 'Careers', href: '/careers' },
    { text: 'Contact', href: '/contact' },
  ],
  footer: [
    {
      title: 'Services',
      links: [
        { text: 'HR Outsourcing', href: '/services#hr-outsourcing' },
        { text: 'IT Outsourcing', href: '/services#it-outsourcing' },
        { text: 'Marketing Consultation', href: '/services#marketing-consultation' },
        { text: 'Digital Solutions', href: '/services#digital-solutions' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Clients', href: '/clients' },
        { text: 'Careers', href: '/careers' },
        { text: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Terms of Service', href: '/terms' },
        { text: 'Privacy Policy', href: '/privacy' },
      ],
    },
  ],
  social: [
    { name: 'Twitter', url: 'https://twitter.com/cxpertseg', icon: 'twitter' },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/cxperts', icon: 'linkedin' },
    { name: 'Facebook', url: 'https://facebook.com/cxpertseg', icon: 'facebook' },
  ],
};

export const APP_BLOG = {
  isEnabled: true,
  postsPerPage: 6,
  list: {
    pathname: 'blog',
  },
  post: {
    permalink: '/%slug%',
  },
  category: {
    pathname: 'category',
  },
  tag: {
    pathname: 'tag',
  },
};
