const env = process.env.NODE_ENV || 'development'
const hostName = 'localhost'
const serverPort = 3000

export default {
  CUSTOMER: 'customer',
  CREATOR: 'creator',
  CONTEST_STATUS_ACTIVE: 'active',
  CONTEST_STATUS_FINISHED: 'finished',
  CONTEST_STATUS_PENDING: 'pending',
  NAME_CONTEST: 'name',
  LOGO_CONTEST: 'logo',
  TAGLINE_CONTEST: 'tagline',
  OFFER_STATUS_REJECTED: 'rejected',
  OFFER_STATUS_WON: 'won',
  OFFER_STATUS_PENDING: 'pending',
  STATIC_IMAGES_PATH: '/staticImages/',
  ANONYM_IMAGE_PATH: '/staticImages/anonym.png',
  BASE_URL: `http://${hostName}:${serverPort}/api/`,
  WS_BASE_URL: `ws://${hostName}:${serverPort}`,
  ACCESS_TOKEN: 'accessToken',
  REFRESH_TOKEN: 'refreshToken',
  publicURL:
    env === 'production'
      ? `http://${hostName}:80/images/`
      : `http://${hostName}:${serverPort}/public/images/`,
  NORMAL_PREVIEW_CHAT_MODE: 'NORMAL_PREVIEW_CHAT_MODE',
  FAVORITE_PREVIEW_CHAT_MODE: 'FAVORITE_PREVIEW_CHAT_MODE',
  BLOCKED_PREVIEW_CHAT_MODE: 'BLOCKED_PREVIEW_CHAT_MODE',
  CATALOG_PREVIEW_CHAT_MODE: 'CATALOG_PREVIEW_CHAT_MODE',
  CHANGE_BLOCK_STATUS: 'CHANGE_BLOCK_STATUS',
  ADD_CHAT_TO_OLD_CATALOG: 'ADD_CHAT_TO_OLD_CATALOG',
  CREATE_NEW_CATALOG_AND_ADD_CHAT: 'CREATE_NEW_CATALOG_AND_ADD_CHAT',
  USER_INFO_MODE: 'USER_INFO_MODE',
  CASHOUT_MODE: 'CASHOUT_MODE',
  HEADER_ANIMATION_TEXT: [
    'a Company',
    'a Brand',
    'a Website',
    'a Service',
    'a Book',
    'a Business',
    'an App',
    'a Product',
    'a Startup'
  ],
  FooterItems: [
    {
      title: 'SQUADHELP',
      items: [
        { name: 'About', href: 'google.com' },
        { name: 'Contact', href: 'google.com' },
        { name: 'How It Works?', href: '/howitworks' },
        { name: 'Testimonials', href: 'google.com' },
        { name: 'Our Work', href: 'google.com' }
      ]
    },
    {
      title: 'RESOURCES',
      items: [
        { name: 'How It Works', href: 'google.com' },
        { name: 'Become a Creative', href: 'google.com' },
        { name: 'Business Name Generator', href: 'google.com' },
        { name: 'Discussion Forum', href: 'google.com' },
        { name: 'Blog', href: 'google.com' },
        { name: 'Download eBook', href: 'google.com' },
        { name: 'Pricing', href: 'google.com' },
        { name: 'Help & FAQs', href: 'google.com' }
      ]
    },
    {
      title: 'OUR SERVICES',
      items: [
        { name: 'Naming', href: 'google.com' },
        { name: 'Logo Design', href: 'google.com' },
        { name: 'Taglines', href: 'google.com' },
        { name: 'Premium Names For Sale', href: 'google.com' },
        { name: 'Creative Owned Names For Sale', href: 'google.com' },
        { name: 'Audience Testing', href: 'google.com' },
        { name: 'Trademark Research & Filling', href: 'google.com' },
        { name: 'Managed Agency Service', href: 'google.com' }
      ]
    },
    {
      title: 'LEGAL',
      items: [
        { name: 'Terms of Service', href: 'google.com' },
        { name: 'Privacy Policy', href: 'google.com' },
        { name: 'Cookie Policy', href: 'google.com' }
      ]
    }
  ]
}
