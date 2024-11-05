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
          s3Options: {
            accessKeyId: env('DO_SPACE_ACCESS_KEY'),
            secretAccessKey: env('DO_SPACE_ACCESS_SECRET'),
            region: env("DO_SPACE_REGION"),
            params: {
              Bucket: env('DO_SPACE_BUCKET'),
            },
          },   
        },
        actionOptions: {
          upload: {
            ACL: null
          },
          uploadStream: {
            ACL: null
          },
          delete: {},
        }
      },
    }  
  };

  return config;
};