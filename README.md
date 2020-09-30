# awsm.css

[![npm version](https://img.shields.io/npm/v/awsm.css.svg)](https://www.npmjs.com/package/awsm.css)

**awsm.css** is a simple CSS library for [semantic HTML](http://www.w3schools.com/html/html5_semantic_elements.asp), which doesn't require classes, ids, attributes, etc.

Just start to create page with HTML5 tags, link awsm.css and get simple, clean and beautiful markup.
  
Check out [examples](#examples) or sample markup [here](https://github.com/igoradamenko/awsm.css/tree/master/docs).

[**Demo**](https://igoradamenko.github.io/awsm.css/)

[![Demo picture](http://igoradamenko.com/github/awsm.css/repo-header.png)](https://igoradamenko.github.io/awsm.css/)

## Previous versions

Current `master` points to v3 of the library. 

If you want to see or download previous versions, here they are:

- [v2](https://igoradamenko.com/awsm.css/v2/)
- [v1](https://igoradamenko.com/awsm.css/v1/)

## Usage

```html
<link rel="stylesheet" href="awsm.min.css">
```

Also don't forget to add viewport info to the `<head>` for adaptation to mobile. Like this:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

It's also available as the [npm package](https://www.npmjs.com/package/awsm.css), which supports [PostCSS API](#postcss-api).

## Download

Download the latest version here — [awsm.css](https://raw.githubusercontent.com/igoradamenko/awsm.css/master/dist/awsm.css).

Minified — [awsm.min.css](https://raw.githubusercontent.com/igoradamenko/awsm.css/master/dist/awsm.min.css) (≈3 Kb after gzip).

## Themes

Current version contains some themes that you can use. 

Check them on [the demo page](https://igoradamenko.github.io/awsm.css/download.html).

### unpkg

Also you can use unpkg for link latest or exact version of library:
    
```html
<link rel="stylesheet" href="https://unpkg.com/awsm.css/dist/awsm.min.css">
```
    
Get more information about the unpkg CDN on [unpkg.com](https://unpkg.com/).

### PostCSS API

If you install [npm package](https://www.npmjs.com/package/awsm.css), you can use library as PostCSS plugin:

```js
const postcss = require('postcss');
const awsm = require('awsm.css');

postcss([awsm({ theme: 'tasman', sealed: true })]).process('a {color: red}').then(result => {
  console.log(result.css); // awsm.css prepends your CSS 
});
```

For more information about options check out [docs](https://igoradamenko.github.io/awsm.css/download.html#options).

## Why?

I have to create simple pages in my daily work. Sometimes it's compiled Markdown and sometimes it's pure HTML. I'd like to make them more beautiful without additional classes, ids, etc. and eventually  I did it.

## License

awsm.css licensed under [the MIT](http://en.wikipedia.org/wiki/MIT_License).

The MIT License places almost no restrictions on what you can do with this lib. You are free to use it in commercial projects as long as the copyright is left intact.

## Examples

[Website for this repo](https://igoradamenko.github.io/awsm.css/) uses awsm.css. Check this out. Also there are examples of [blog](https://igoradamenko.github.io/awsm.css/examples/blog/) and [homepage](https://igoradamenko.github.io/awsm.css/examples/homepage/) built with awsm.css.

And I use the lib for [my own website](https://igoradamenko.com).
for reference i sometimes referrer to (https://www.w3schools.com/html/)

If you use the library in your project, feel free to [open issue](https://github.com/igoradamenko/awsm.css/issues/new) and we will add your url in this list :)

### v3

Short list of projects that use v3 of the library:

- [React Coroutine](https://react-coroutine.js.org). Documentation.
- [Anatoly Gulyaev](https://kaneru.me). Blog.
- [Minicurso PWA](https://fziliotti.github.io/minicursopwa/). Course page.
- [Alexander Pushkov](https://notpushk.in). CV. 
- [Markus Ritzmann](https://markusritzmann.ch). Homepage.
- [Image Search Abstraction Layer](https://img-search-ms-343dev.herokuapp.com/). Demo.
- [File Metadata Microservice](https://file-metadata-ms-343dev.herokuapp.com/). Demo.
- [Timestamp Microservice](https://timestamp-ms-343dev.herokuapp.com/). Demo.
- [Isomorpic Rendering](https://codient.herokuapp.com/). Demo.
- [and so on..](https://github.com/search?p=1&q="awsm.css"&type=Code&utf8=✓)

### v2

List of projects that use v2 of the library:

- [addmeto](http://addmeto.cc/). Telegram feed.
- [Yandex](http://tele.ga/yandex/). Telegram feed.
- [toberta](http://tobetra.com/). Telegram feed.
- [tele.ga](http://tele.ga/). Service for exporting Telegram feed to blog.
- [botan](https://botan.glitch.me). Documentation.
- [A.Ulizko](http://ulizko.com). Blog.
- [anatta](https://wordpress.org/themes/anatta/). WordPress theme.
- [Kostantin](https://konstantin.io). Blog. 
- [Masashi Yoshikawa](https://masashi-y.github.io/). CV.
- [MONETOCHKA SIGNS](https://hgenru.github.io/monetochka-signs/). Fun.
- [illustrarium.github.io](https://illustrarium.github.io). Vacancy.

## Got questions? Any troubles?

If you have questions or general suggestions, don't hesitate to submit a new [GitHub issue](https://github.com/igoradamenko/awsm.css/issues/new).
