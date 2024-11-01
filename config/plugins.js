module.exports = ({ env }) => {
  const isProduction = env('NODE_ENV') === 'production';

  const config = {
    transformer: {
      enabled: true,
      config: {
        responseTransforms: {
          removeAttributesKey: true,
          removeDataKey: true,
        },
        requestTransforms: {
          wrapBodyWithDataKey: true,
        },
      },
    },
    "user-permissions": {
      config: {
        jwt: {
          expiresIn: "128d",
        },
      },
    },
  };

  // Only add Digital Ocean upload config in production
  if (isProduction) {
    config.upload = {
      config: {
        provider: "strapi-provider-upload-do", 
        providerOptions: {
          key: env('DO_SPACE_ACCESS_KEY'),
          secret: env('DO_SPACE_SECRET_KEY'),
          endpoint: env('DO_SPACE_ENDPOINT'),
          space: env('DO_SPACE_BUCKET'),
        }
      },
    };
  }

  return config;
};