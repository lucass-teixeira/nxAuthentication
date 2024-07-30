import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'mobile-web-client',
  webDir: '../../dist/apps/mobile-web-client',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https',
  },
};

export default config;
