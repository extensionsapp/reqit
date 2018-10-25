const reqit = require('./index');

reqit({url: 'https://api.ipify.org'}, (error, result) => {
    if (error) console.log(error);
    console.log(result);
});