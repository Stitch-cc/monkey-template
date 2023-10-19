import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";

import '../styles/main.scss'

export default createVuetify({
  defaults: {
    global: {
      ripple: false,
    },
    VTextField: {
      color: '#00aff0',
      // style: [{ '--v-field-padding-after': '4px' }]
    }
  },
  theme: {
    defaultTheme: 'default',
    themes: {
      default: {
        colors: {
          primary: '#00aff0',
          'on-surface': '#242529',
        }
      }
    }
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});
