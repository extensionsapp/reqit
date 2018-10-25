# Simple request for NodeJS.

<p align="center"><img src="https://raw.githubusercontent.com/extensionsapp/reqit/master/logo.png" alt="reQit, npm package for NodeJS" title="reQit, npm package for NodeJS"></p>


### Installation
```
npm i regit
```

### Usage

Get Google status, title and body:

```javascript
const reqit = require('reqit');

reqit({
    url: 'https://www.google.com', 
    charset: 'utf-8'}, 
    (error, result) => {
        console.log(result);
});
// {status: 200, title: 'Google', body: '...'}
```

© 2018 ExtensionsApp