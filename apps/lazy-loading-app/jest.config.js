module.exports = {
  name: "lazy-loading-app",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/lazy-loading-app/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
