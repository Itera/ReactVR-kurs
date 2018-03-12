// Hack for react-dom to work, otherwise the console spits out
// a `process is not defined error`, in what looks like react's initialization:
// if (process.env.NODE_ENV === 'production') {
//   module.exports = require('./cjs/react.production.min.js');
// } else {
//   module.exports = require('./cjs/react.development.js');
// }
window.process = {
  env: {
    NODE_ENV: 'production',
  },
};

if (__DEV__) {
  window.process.env.NODE_ENV = 'development';
}
