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
            "*.digitaloceanspaces.com",
            "chrome-extension://*",
            "moz-extension://*",
            "market-assets.strapi.io",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "*.digitaloceanspaces.com",
            "lon1.digitaloceanspaces.com",
            "*.lon1.digitaloceanspaces.com"
            ,
            "chrome-extension://*",
            "moz-extension://*",
            "market-assets.strapi.io",
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
