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
rm -rf client/out
npm install
npm run compile
vsce package
```

## Publishing

```
vsce publish
```

## Updating npm

```
npm install -g npm@latest
```

## Updating dependencies

Look for outdated packages:

```
npm outdated
```

Update the `package.json`

```
npm update
```

## Handling Access Tokens

https://code.visualstudio.com/api/working-with-extensions/publishing-extension
