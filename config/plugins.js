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
        provider: "aws-s3",
        providerOptions: {
          credentials: {
            accessKeyId: env("DO_SPACE_ACCESS_KEY"),
            secretAccessKey: env("DO_SPACE_SECRET_KEY"),
          },
          region: "lon1",
          endpoint: env("DO_SPACE_ENDPOINT"),
          baseUrl: `https://s3.${env("DO_SPACE_REGION")}.amazonaws.com/${env(
            "DO_SPACE_BUCKET"
          )}`,
          params: {
            Bucket: env("DO_SPACE_BUCKET"),
          },
          forcePathStyle: true,
        },
        actionOptions: {
          upload: {
            ACL: null,
          },
          uploadStream: {
            ACL: null,
          },
          delete: {},
        },
      },
    },
  };

  return config;
};
