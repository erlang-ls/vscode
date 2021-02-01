# README for extension developers (Mac OS)

## Prerequisites

* Install VSCode

```
npm install -g vsce
npm install -g typescript
```

## Quickstart

```
git submodule update --init
rm -rf erlang_ls/_build
npm install
npm run compile
vsce package
```
