module.exports = ({ env }) => ({
  // ..
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
  // ..
});
