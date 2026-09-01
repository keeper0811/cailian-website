'use strict';

var fs = require('fs');
var path = require('path');
var site = require('../src/site');

var rootDir = path.resolve(__dirname, '..');
var distDir = path.join(rootDir, 'dist');
var assetSourceDir = path.join(rootDir, 'src', 'assets');
var assetDistDir = path.join(distDir, 'assets');

function removeDirectory(target) {
  if (!fs.existsSync(target)) return;
  fs.readdirSync(target).forEach(function (name) {
    var entry = path.join(target, name);
    if (fs.statSync(entry).isDirectory()) removeDirectory(entry);
    else fs.unlinkSync(entry);
  });
  fs.rmdirSync(target);
}

function ensureDirectory(target) {
  if (fs.existsSync(target)) return;
  ensureDirectory(path.dirname(target));
  fs.mkdirSync(target);
}

function copyDirectory(source, target) {
  ensureDirectory(target);
  fs.readdirSync(source).forEach(function (name) {
    var sourceEntry = path.join(source, name);
    var targetEntry = path.join(target, name);
    if (fs.statSync(sourceEntry).isDirectory()) copyDirectory(sourceEntry, targetEntry);
    else fs.copyFileSync(sourceEntry, targetEntry);
  });
}

function writePage(relativePath, html) {
  var output = path.join(distDir, relativePath);
  ensureDirectory(path.dirname(output));
  fs.writeFileSync(output, html, 'utf8');
}

removeDirectory(distDir);
ensureDirectory(distDir);
copyDirectory(assetSourceDir, assetDistDir);

site.languageCodes.forEach(function (language) {
  site.pageKeys.forEach(function (page) {
    var slug = site.pageSlugs[page];
    var relativePath = slug ? path.join(language, slug, 'index.html') : path.join(language, 'index.html');
    writePage(relativePath, site.renderPage(language, page));
  });
});

writePage('index.html', site.renderLanguageRedirect());
writePage('404.html', site.renderNotFound());
writePage('sitemap.xml', site.renderSitemap());
writePage('robots.txt', 'User-agent: *\nAllow: /\nSitemap: https://example.com/sitemap.xml\n');

console.log('Built ' + (site.languageCodes.length * site.pageKeys.length) + ' localized pages in dist/.');
