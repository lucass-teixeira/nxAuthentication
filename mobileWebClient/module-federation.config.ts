import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'mobileWebClient',
  exposes: {
    './Routes': 'mobileWebClient/src/app/remote-entry/entry.routes.ts',
    './mobile-web-client': 'apps/mobile-web-client/src/app/app.routes.ts',
  },
};
export default config;
