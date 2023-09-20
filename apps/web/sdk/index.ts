import { PlentysystemsModuleType, plentysystemsModule } from '@plentymarkets/shop-sdk';
import { initSDK, buildModule } from '@vue-storefront/sdk';
import { createSharedComposable } from '@vueuse/core';

export const useSdk = createSharedComposable(() => {
  const sdkConfig = {
    plentysystems: buildModule<PlentysystemsModuleType>(plentysystemsModule, {
      apiUrl: 'https://ceres-demo.plentymarkets-cloud01.com/plentysystems',
    }),
  };

  return initSDK<typeof sdkConfig>(sdkConfig);
});
