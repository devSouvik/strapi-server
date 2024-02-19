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
      hooks: {
        preResponseTransform: (ctx) => {
          console.log("Executing preResponseTransform hook!");
          // Recursively remove "createdAt", "updatedAt", and "publishedAt" fields from the response data
          const removeDateFields = (data) => {
            if (Array.isArray(data)) {
              data.forEach(removeDateFields);
            } else if (data && typeof data === "object") {
              delete data.createdAt;
              delete data.updatedAt;
              delete data.publishedAt;
              Object.values(data).forEach(removeDateFields);
            }
          };
          // Remove the fields from the response data
          if (ctx.body && ctx.body.data) {
            removeDateFields(ctx.body.data);
          }
          // Remove the "meta" section from the response
          delete ctx.body.meta;
        },
        postResponseTransform: (/** @type {any} */ ctx) =>
          console.log("hello from the postResponseTransform hook!"),
      },
    },
  },
});
