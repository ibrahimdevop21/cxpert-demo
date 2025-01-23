import { getPermalink, getBlogPermalink } from './utils/permalinks';
import { NAVIGATION } from './config';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Services',
      href: getPermalink('/services'),
      links: [
        {
          text: 'HR Outsourcing',
          href: getPermalink('/services#hr-outsourcing'),
        },
        {
          text: 'IT Outsourcing',
          href: getPermalink('/services#it-outsourcing'),
        },
        {
          text: 'Marketing Consultation',
          href: getPermalink('/services#marketing-consultation'),
        },
        {
          text: 'Digital Solutions',
          href: getPermalink('/services#digital-solutions'),
        },
      ],
    },
    {
      text: 'Clients',
      href: getPermalink('/clients'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: NAVIGATION.footer[0].links.map(link => ({
        ...link,
        href: getPermalink(link.href),
      })),
    },
    {
      title: 'Company',
      links: NAVIGATION.footer[1].links.map(link => ({
        ...link,
        href: getPermalink(link.href),
      })),
    },
    {
      title: 'Support',
      links: NAVIGATION.footer[2].links.map(link => ({
        ...link,
        href: getPermalink(link.href),
      })),
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: NAVIGATION.social.map(({ name, url, icon }) => ({
    ariaLabel: name,
    icon: `tabler:brand-${icon}`,
    href: url,
  })),
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://cxpertseg.com/"> CXperts</a> · All rights reserved.
  `,
};
