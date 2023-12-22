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

## Release Process

### Prepare the Release

* Create a new branch
* In the new branch, update the Erlang LS server. Enter the `erlang_ls` dir, then `git fetch; git checkout X.Y.Z` (where `X.Y.Z` is the version of Erlang LS you want to upgrade to
* Repeat the same process for the other submodules (i.e. `grammar`, `els_dap`) if required
* Open the `package.json` file and bump the `version` field
* Run `npm install`. This will propagate the version bump to the `package-lock.json` file
* Update the `CHANGELOG.md` file
* Create a Pull Request with the above changes

### Verify the package

* Once CI is completed for the above PR, download the `erlang-ls.vsix.zip` package from the build page
* Unzip the package
* Open VS Code, go to the Extension menu and click on "Install from VSIX"
* Select the `erlang-ls.vsix` package you just downloaded
* Open an Erlang file and ensure the extension works as expected
* Merge the Pull Request

### Create a new release

* Access the [releases](https://github.com/erlang-ls/vscode/releases) page
* Click on "Draft a new release"
* Click on the "Choose a tag" dropdown and enter a new tag (just increment, no semantic versioning)
* Click on "Generate release notes"
* Optionally amend the generated notes with highlights or other important information
* Click on "Publish Release"
