const fs = require('fs');

const enPath = 'd:/غيث/ghaith-website/src/locales/en.json';
const arPath = 'd:/غيث/ghaith-website/src/locales/ar.json';

const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const arData = JSON.parse(fs.readFileSync(arPath, 'utf8'));

// EN
const enReadyProducts = enData.products_page.cats_data['ready-to-eat'].products.map(p => ({
  ...p,
  name: p.name + ' (Ready to Eat)'
}));

enData.products_page.cats_data['canned-vegetables'].products = [
  ...enData.products_page.cats_data['canned-vegetables'].products,
  ...enReadyProducts
];

delete enData.products_page.cats_data['ready-to-eat'];
delete enData.product_categories.cats['ready-to-eat'];

// AR
const arReadyProducts = arData.products_page.cats_data['ready-to-eat'].products.map(p => ({
  ...p,
  name: p.name + ' (جاهز للأكل)'
}));

arData.products_page.cats_data['canned-vegetables'].products = [
  ...arData.products_page.cats_data['canned-vegetables'].products,
  ...arReadyProducts
];

delete arData.products_page.cats_data['ready-to-eat'];
delete arData.product_categories.cats['ready-to-eat'];

fs.writeFileSync(enPath, JSON.stringify(enData, null, 2));
fs.writeFileSync(arPath, JSON.stringify(arData, null, 2));

console.log('JSON updated successfully');
