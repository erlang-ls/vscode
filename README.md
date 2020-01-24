# erlang-ls/vscode

The erlang-ls extension for VSCode.

## Changelog

### 0.0.6

Extension:

- Bump vscode-languageclient to 6.0.0

Server:

- Add navigation to callback functions for OTP behaviours
- Add support for folding ranges
- Allow a system-wide erlang_ls.config file
- Show edoc for local functions
- Support cancel requests
- Fix support for Dialyzer diagnostics
- Show errors from included .hrl files
- Correctly handle macros on record access
- Remove dependency on wx
- Use platform-dependent log directories
- Automatically generate diagnostics when opening a file
- Limit the amount of symbols returned as workspace symbols
- Add plumbing for a formatter
- Add support for umbrella projects
- Add code completion for record fields
- Use a persistent database (Mnesia) to store indexed information
- Add support for Elvis diagnostics
- Handle multiple export sections
- Do not crash on un-handled extensions
- Do not crash when macros are used as function names
- Other bug fixes and stability improvements

### 0.0.5

Extension:

- Ignore TextMate folders that are not used by the extension
- Add language configuration, including comments and brackets

Server:

- Report server version on startup
- Fix ranges for compiler diagnostics
- Fix completion of function/arity in export lists
- Introduce document highlighting
- Improve performance of workspace symbol lookups
- Add completion for record names
- Improve indexing performances
- Properly cleanup outdated references
- Other bug fixes and stability improvements

### 0.0.4

Extension:

- Do not include un-necessary files in the package, reducing the
  extension size from 20MB to 15MB

### 0.0.3

Extension:

- Add configuration option to enable tracing calls between client and server

### 0.0.2

Server:

- Performance improvements for the indexing process
- Add code navigation for opaque types
- Fix issue with non-unicode modules
- Skip indexing of some OTP applications by default (diameter, megaco, snmp, wx)
- Fix support for Markdown content on hover requests

### 0.0.1

Initial version of the extension.
