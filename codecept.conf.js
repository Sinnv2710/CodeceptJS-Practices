require('ts-node');
const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
    tests: './tests/*.test.js',
    output: './output',
    helpers: {
        REST: {
            endpoint: 'http://localhost:3000/api',
        },
        JSONResponse: {},
    },
    include: {
        I: './steps_file.js',
    },
    name: 'CodeceptJS-Practices',
};
