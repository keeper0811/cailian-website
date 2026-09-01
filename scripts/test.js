'use strict';

var assert = require('assert');
var fs = require('fs');
var path = require('path');
var site = require('../src/site');

var root = path.resolve(__dirname, '..');
var dist = path.join(root, 'dist');
var checks = 0;

function read(relativePath) {
  return fs.readFileSync(path.join(dist, relativePath), 'utf8');
}

function check(condition, message) {
  checks += 1;
  assert.ok(condition, message);
}

check(fs.existsSync(dist), 'dist/ must exist; run npm run build first');

var websiteDocumentPath = path.join(root, '網站說明.md');
check(fs.existsSync(websiteDocumentPath), 'website discussion document exists');
var websiteDocument = fs.readFileSync(websiteDocumentPath, 'utf8');
['# 采蓮紋繡形象網站說明', '## 網站頁面', '## LINE 預約方式', '## 待確認與替換資料', '## 決策紀錄'].forEach(function (heading) {
  check(websiteDocument.indexOf(heading) !== -1, 'website discussion document contains ' + heading);
});

site.languageCodes.forEach(function (language) {
  site.pageKeys.forEach(function (page) {
    var slug = site.pageSlugs[page];
    var relative = slug ? path.join(language, slug, 'index.html') : path.join(language, 'index.html');
    var html = read(relative);
    check(html.indexOf('<html lang="' + language + '">') !== -1, relative + ' has the correct language');
    check(html.indexOf('data-line-trigger') !== -1, relative + ' contains a LINE entry point');
    check(html.indexOf('data-line-modal') !== -1, relative + ' contains the desktop QR dialog');
    check(html.indexOf('<form') === -1, relative + ' must not collect form data');
    check(html.indexOf('<input') === -1, relative + ' must not collect input data');
    check(html.indexOf('googletagmanager') === -1 && html.indexOf('analytics') === -1, relative + ' must not include tracking');
    site.languageCodes.forEach(function (alternate) {
      check(html.indexOf('hreflang="' + alternate + '"') !== -1, relative + ' links language ' + alternate);
    });
  });
});

site.languageCodes.forEach(function (language) {
  var services = read(path.join(language, 'services', 'index.html'));
  var booking = read(path.join(language, 'booking', 'index.html'));
  check(services.indexOf('data-faq-button') !== -1, language + ' services page contains FAQ');
  check(booking.indexOf('data-booking-page') !== -1, language + ' booking page is present');
  check(booking.indexOf('Google Maps') !== -1, language + ' booking page links to Google Maps');
});

var css = read(path.join('assets', 'styles.css'));
var script = read(path.join('assets', 'app.js'));
var sitemap = read('sitemap.xml');

check(css.indexOf('#786253') !== -1, 'earth-tone secondary color is defined');
check(css.indexOf('#06c755') !== -1, 'official LINE green is defined');
check(css.indexOf('@media (max-width: 767px)') !== -1, 'mobile breakpoint exists');
check(css.indexOf('@media (max-width: 900px)') !== -1, 'tablet service breakpoint exists');
check(/@media \(max-width: 900px\)[\s\S]*?\.service-detail\s*\{[^}]*grid-template-columns:\s*1fr/.test(css), 'service details stack on tablets');
check(css.indexOf('prefers-reduced-motion') !== -1, 'reduced-motion support exists');
check(/\.mobile-menu\s*\{[^}]*display:\s*none/.test(css), 'mobile menu is hidden before it is opened');
check(/\.mobile-menu\.is-open\s*\{[^}]*display:\s*block/.test(css), 'mobile menu becomes visible when opened');
check(script.indexOf("matchMedia('(max-width: 767px)')") !== -1, 'mobile LINE behavior is implemented');
check(script.indexOf('localStorage') !== -1, 'language preference stays in the browser');
check((sitemap.match(/<url>/g) || []).length === 15, 'sitemap contains all localized pages');

['hero-face.svg', 'brow-before.svg', 'brow-after.svg', 'eye.svg', 'lip.svg', 'artist.svg', 'studio.svg', 'line-qr-demo.svg'].forEach(function (asset) {
  check(fs.existsSync(path.join(dist, 'assets', asset)), asset + ' exists');
});

console.log('All ' + checks + ' checks passed.');
