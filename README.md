# Nuxt Moment Jalaali

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Efficient Moment.js Jalaali integration for Nuxt.js

[📖 **Release Notes**](./CHANGELOG.md)

## Features

- Remove unused Moment.js locales using [moment-locales-webpack-plugin](https://github.com/iamakulov/moment-locales-webpack-plugin) for much less bundle size.
- Inject `$moment` to the context everywhere.

## Setup

1. Add `nuxt-moment-jalaali` dependency to your project

```bash
yarn add --dev nuxt-moment-jalaali
# or 
npm install --save-dev nuxt-moment-jalaali
```

2. Add `nuxt-moment-jalaali` to the `buildModules` section of `nuxt.config.js`

```js
export default {
  buildModules: [
    // Simple usage
    'nuxt-moment-jalaali',

    // With options
    ['nuxt-moment-jalaali', { /* module options */ }]
  ]
}
```

:warning: If you are using Nuxt **< v2.9** you have to install the module as a `dependency` (No `--dev` or `--save-dev` flags) and use `modules` section in `nuxt.config.js` instead of `buildModules`.

### Using top level options

```js
export default {
  buildModules: [
    'nuxt-moment-jalaali'
  ],
  moment: {
    /* module options */
  }
}
```

### Typescript setup

Add the types to your `"types"` array in `tsconfig.json` after the `@nuxt/types` entry.

:warning: Use `@nuxt/vue-app` instead of `@nuxt/types` for nuxt < 2.9. 

#### tsconfig.json

```json
{
  "compilerOptions": {
    "types": [
      "@nuxt/types",
      "nuxt-moment-jalaali"
    ]
  }
}
```

> **Why?**
>
> For typescript to be aware of the additions to the `nuxt Context`, the `vue instance` and the `vuex store`, the types need to be merged via [declaration merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html) by adding `nuxt-moment-jalaali` to your types.

## Configuration

To strip all locales except `en`:

```js
export default {
  buildModules: [
    'nuxt-moment-jalaali'
  ]
}
```

To strip all locales except `en`, `fr` and `fa`:

```js
export default {
  buildModules: [
    'nuxt-moment-jalaali'
  ],
  moment: {
    locales: ['fa', 'fr']
  }
}
```

**Note:** `en` is built into Moment and can’t be removed!

### Set default locale

You can set a default locale via the `defaultLocale` option. It must be included
int the locales you keep (or `'en'`) and will only work when using the plugin option.

```js
export default {
  buildModules: [
    'nuxt-moment-jalaali'
  ],
  moment: {
    defaultLocale: 'fa',
    locales: ['fa']
  }
}
```

### dialect

You can set dialect option. [see more](https://github.com/jalaali/moment-jalaali#options)  

default value : `persian-modern`  
Possible values: `persian-modern`, `persian`, `false`

### Plugins

You can import plugins to moment. See a list of [plugins](https://momentjs.com/docs/#/plugins/)

```js
export default {
  buildModules: [
    'nuxt-moment-jalaali'
  ],
  moment: {
    plugins: [
      'moment-strftime',
      'moment-fquarter'
    ]
  }
}
```

**Note:** Don't need import Jalaali Calendar to plugin.  
**Note:** Don't forget to install each plugin.

### Timezone

You can enable [moment-timezone](https://momentjs.com/timezone/) via the `timezone` option.

```js
export default {
  buildModules: [
    'nuxt-moment-jalaali'
  ],
  moment: {
    timezone: true
  }
}
```

You can filter time zone data and thus produce significant savings in file size.
See all options in [moment-timezone-data-webpack-plugin](https://github.com/gilmoreorless/moment-timezone-data-webpack-plugin).

```js
export default {
  buildModules: [
    'nuxt-moment-jalaali'
  ],
  moment: {
    timezone: {
      matchZones: ['Iran'],
      startYear: 2000,
      endYear: 2030
    }
  }
}
```

### Set default time zone

You can set a [default time zone](https://momentjs.com/timezone/docs/#/using-timezones/default-timezone/) via the `defaultTimezone` option.

```js
export default {
  buildModules: [
    '@nuxtjs/moment'
  ],
  moment: {
    defaultTimezone: 'Asia/Tehran'
  }
}
```

### Disable plugin

This module also registers a plugin to include all needed locales as well as injecting moment as `$moment` to Vue context. You can disable this behaviour using `plugin: false`.

```js
export default {
  buildModules: [
    'nuxt-moment-jalaali'
  ],
  moment: {
    plugin: false
  }
}
```

### Using inside templates

You can easily use `$moment` service from templates.

```html
<div v-text="$moment(...)"></div>
<div>{{ $moment(...) }}</div>
<div>{{ $moment(...).format('jYYYY/jM/jDD') }}</div>
```

## License

[MIT License](./LICENSE)

Copyright (c) Nuxt Community

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-moment-jalaali/latest.svg?style=flat-square
[npm-version-href]: https://www.npmjs.com/package/nuxt-moment-jalaali

[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-moment-jalaali.svg?style=flat-square
[npm-downloads-href]: https://www.npmjs.com/package/nuxt-moment-jalaali

[license-src]: https://img.shields.io/npm/l/nuxt-moment-jalaali.svg?style=flat-square
[license-href]: https://www.npmjs.com/package/nuxt-moment-jalaali
