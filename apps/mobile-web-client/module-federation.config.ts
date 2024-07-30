import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'mobile-web-client',
  exposes: {
    './Routes': 'apps/mobile-web-client/src/app/app.routes.ts',
  },
};
export default config;
