module.exports = ({ env }) => {
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
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          accessKeyId: env('DO_SPACE_ACCESS_KEY'),
          secretAccessKey: env('DO_SPACE_ACCESS_SECRET'),
          endpoint: env('DO_SPACE_ENDPOINT'),
          params: {
            Bucket: env('DO_SPACE_BUCKET'),
          },
          region: 'LON1'
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        }
      },
    }  
  };

  return config;
};