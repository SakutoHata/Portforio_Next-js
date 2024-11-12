// deploy.js
const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), '.env') });
const ghpages = require('gh-pages');

console.log('GITHUB_TOKEN:', process.env.GITHUB_TOKEN);

if (!process.env.GITHUB_TOKEN) {
  console.error('Error: GITHUB_TOKEN is not defined. Please check your .env file.');
  process.exit(1);
}

ghpages.publish(
  'out',
  {
    repo: `https://${process.env.GITHUB_TOKEN}@github.com/SakutoHata/Portforio_Next-js.git`,
    branch: 'gh-pages',
    add: false
  },
  (err) => {
    if (err) {
      console.error('Error:', err);
    } else {
      console.log('Deploy successful!');
    }
  }
);
