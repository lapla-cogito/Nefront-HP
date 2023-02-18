const prod = process.env.NODE_ENV === "production";

module.exports = {
  // time in seconds of no pages generating during static
  // generation before timing out
  staticPageGenerationTimeout: 1000,
  images: {
    loader: "akamai",
    path: "",
    domains: ["laplaciancpp.github.io"]
  },
  // assetPrefix: process.env.NODE_ENV === "production" ? "/Nefront-HP" : "",
  "process.env.BACKEND_URL": prod ? "/Nefront-HP" : "",
};
