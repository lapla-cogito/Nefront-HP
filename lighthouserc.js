module.exports = {
  ci: {
    collect: {
      settings: {
        hostname: "127.0.0.1",
      },
      numberOfRuns: 1,
      startServerCommand: "npm run start",
      url: ["http://localhost:3000/"],
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
