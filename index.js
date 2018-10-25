const url   = require('url');
const https = require('https');
const iconv = require('iconv-lite');

const reqit = (options, callback) => {
    let def_options = {
        charset: 'utf-8'
    };
    options = Object.assign(def_options, options);

    if (options.url) {
        options = Object.assign(options, url.parse(options.url));
    }

    if (!options.host) {
        return callback(`Not URL`);
    }

    https.get(options, response => {
        let res = {};
        res.status = response.statusCode;
        res.title = '';
        res.body = '';
        if (res.status !== 200) {
            return callback(`Status code ${res.status}`);
        }
        response.pipe(iconv.decodeStream(options.charset)).collect((error, body) => {
            if (error) {
                return callback(`Charset ${error}`);
            }
            let title = body.match(/<title[^>]*>([^<]+)<\/title>/i);
            res.title = title && title[1] ? title[1] : '';
            res.body = body;
            callback(null, res);
        });
    }).on('error', (e) => {
        callback(`${e.message}`);
    });
};

module.exports = reqit;