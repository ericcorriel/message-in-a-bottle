# message-in-a-bottle

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Setting up static hosting with GitHub pages
- Add CNAME to static directory
- Change A records of DNS to point to 185.199.108.153
- CNAME record: name = www | value = ericcorriel.github.io
- create empty gh-pages branch
- copy .github folder from previous project
- set GitHub pages to display gh-pages branch

## The forked vimeo submodule
```
git submodule update --init --recursive
```
## TS notes
```
const yearZero: number = Number(scrollMachine.get("yearZero"));
  const boolTest: string | number | boolean = scrollMachine.get(
    "isInNormalScrollingRange"
  );
```
