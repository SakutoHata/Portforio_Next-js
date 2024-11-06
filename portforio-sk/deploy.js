// deploy.js
require('dotenv').config();
const ghpages = require('gh-pages');

ghpages.publish(
  'out',  // ディレクトリを指定
  {
    repo: `https://${process.env.GITHUB_TOKEN}@github.com/SakutoHata/Portforio_Next-js.git`
  },
  (err) => {
    if (err) console.error('Error:', err);
    else console.log('Deploy successful!');
  }
);
