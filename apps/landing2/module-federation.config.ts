import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'landing2',
  exposes: {
    './Routes': 'apps/landing2/src/app/remote-entry/entry.routes.ts',
    './monorepo': 'apps/monorepo/src/app/app.routes.ts',
  },
};
export default config;
