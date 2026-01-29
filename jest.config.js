import { resolve } from 'path';
/** @type {import('jest').Config} */

const config = {
  setupFilesAfterEnv: [resolve('./common/helpers/expect-to-be-valid-syntax.js')],
  verbose: true,
};

export default config;
// export default {
//   setupFilesAfterEnv: [resolve('./common/helpers/expect-to-be-valid-syntax.js')],
//   testEnvironment:'node',
//     url: 'http://localhost/',
//   config: {
//     verbose:true
//   }
// };