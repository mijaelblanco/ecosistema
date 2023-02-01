// path: ./my-app/src/admin/app.js

import AuthLogo from './extensions/logo.png';
import MenuLogo from './extensions/logo.png';
import favicon from './extensions/favicon.ico';

export default {
  config: {
    // Replace the Strapi logo in auth (login) views
    auth: {
      logo: AuthLogo,
    },
   // Replace the favicon
    head: {
      favicon: favicon,
    },
    // Add a new locale, other than 'en'
    locales: ['es'],
    // Replace the Strapi logo in the main navigation
    menu: {
      logo: MenuLogo,
    },
    // Override or extend the theme
    theme: {
      // overwrite light theme properties
      light: {
        colors: {
          primary100: '#f6ecfc',
          primary200: '#e0c1f4',
          primary500: '#ac73e6',
          primary600: '#9736e8',
          primary700: '#8312d1',
          danger700: '#b72b1a'
        },
      },
      
      // overwrite dark theme properties
      dark: {
         // ...
      }
    },
    // Extend the translations
    translations: {
      en: {
        'app.components.LeftMenu.navbrand.title': 'Dashboard',
        'Auth.form.welcome.title': 'Welcome',
        'app.components.HomePage.welcomeBlock.content.again': '',
        'app.components.HomePage.button.blog': '',
        'Auth.form.welcome.subtitle': 'Log in to your account',
        'Auth.form.email.placeholder': 'e.g. mijael@info7.mx',
      },
      es: {
        'app.components.LeftMenu.navbrand.title': 'Panel de Control',
        'Auth.form.welcome.title': 'Bienvenido',
        'app.components.HomePage.welcomeBlock.content.again': '...',
        'app.components.HomePage.button.blog': '...',
        'Auth.form.email.placeholder': 'e.g. mijael@info7.mx',
        'Auth.form.welcome.subtitle': 'Inicia sesión en tu cuenta',
      }
    },
   // Disable video tutorials
    tutorials: false,
   // Disable notifications about new Strapi releases
    notifications: { release: false },
  },

  bootstrap() {},
};

