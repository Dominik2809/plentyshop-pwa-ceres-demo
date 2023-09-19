import dotenv from 'dotenv';
dotenv.config();

const config = {
  integrations: {
    plentysystems: {
      location: '@plentymarkets/shop-api/server',
      configuration: {
        api: {
          url: 'https://ceres-demo.plentymarkets-cloud01.com/'
        }
      },
    }
  },
};

export default config;
