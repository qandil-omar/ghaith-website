const fs = require('fs');

const enPath = 'd:/غيث/ghaith-website/src/locales/en.json';
const arPath = 'd:/غيث/ghaith-website/src/locales/ar.json';

const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const arData = JSON.parse(fs.readFileSync(arPath, 'utf8'));

enData.product_categories.cats['beans-legumes'] = enData.product_categories.cats.beans;
delete enData.product_categories.cats.beans;

arData.product_categories.cats['beans-legumes'] = arData.product_categories.cats.beans;
delete arData.product_categories.cats.beans;

fs.writeFileSync(enPath, JSON.stringify(enData, null, 2));
fs.writeFileSync(arPath, JSON.stringify(arData, null, 2));

console.log('JSON updated successfully');
