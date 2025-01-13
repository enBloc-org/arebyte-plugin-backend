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
    email: {
      config: {
        provider: "nodemailer",
        providerOptions: {
          host: env("SMTP_HOST"),
          port: env("SMTP_PORT"),
          auth: {
            user: env("SMTP_USERNAME"),
            pass: env("SMTP_PASSWORD"),
          },
          secure: false,
          requireTLS: true,
          tls: {
            rejectUnauthorized: false,
          },
        },
        settings: {
          defaultFrom: env("EMAIL_FROM"),
          defaultReplyTo: env("EMAIL_REPLY_TO"),
        },
      },
    },
    upload: {
      config: {
        provider: "strapi-provider-upload-do",
        providerOptions: {
          key: env("DO_SPACE_ACCESS_KEY"),
          secret: env("DO_SPACE_SECRET_KEY"),
          endpoint: env("DO_SPACE_ENDPOINT"),
          space: env("DO_SPACE_BUCKET"),
          directory: env("DO_SPACE_DIRECTORY"),
          cdn: env("DO_SPACE_CDN"),
        },
      },
    },
  };

  return config;
};
