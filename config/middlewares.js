module.exports = ({ env }) => [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": [
            "'self'",
            "https:",
            "chrome-extension://*",
            "moz-extension://*",
          ],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            `${env("DO_SPACE_BUCKET")}.s3.${env(
              "DO_SPACE_REGION"
            )}.amazonaws.com`,
            `https://${env("DO_SPACE_BUCKET")}.s3.${env(
              "DO_SPACE_REGION"
            )}.amazonaws.com`,
            "chrome-extension://*",
            "moz-extension://*",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            `${env("DO_SPACE_BUCKET")}.s3.${env(
              "DO_SPACE_REGION"
            )}.amazonaws.com`,
            `https://${env("DO_SPACE_BUCKET")}.s3.${env(
              "DO_SPACE_REGION"
            )}.amazonaws.com`,
            "chrome-extension://*",
            "moz-extension://*",
          ],
          "default-src": [
            "'self'",
            "chrome-extension://*",
            "moz-extension://*",
          ],
          "script-src": [
            "'self'",
            "'unsafe-inline'",
            "chrome-extension://*",
            "moz-extension://*",
          ],
          upgradeInsecureRequests: null,
        },
      },
      cors: {
        enabled: true,
        origin: ["chrome-extension://*", "moz-extension://*"],
        credentials: true,
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
        headers: ["Content-Type", "Authorization", "Origin", "Accept"],
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
