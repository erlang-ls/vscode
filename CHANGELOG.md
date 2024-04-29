## Changelog

### 0.0.43

Server (0.50.0 -> 0.52.0)

- https://github.com/erlang-ls/erlang_ls/releases/tag/0.51.0
- https://github.com/erlang-ls/erlang_ls/releases/tag/0.52.0

### 0.0.42

Server (0.49.0 -> 0.50.0)

- https://github.com/erlang-ls/erlang_ls/releases/tag/0.50.0

### 0.0.41

Server (0.48.0 -> 0.49.0)

- https://github.com/erlang-ls/erlang_ls/releases/tag/0.49.0
- https://github.com/erlang-ls/erlang_ls/releases/tag/0.48.1

Debugger (0.1.1 -> 0.1.2)

- https://github.com/erlang-ls/els_dap/releases/tag/0.1.2

### 0.0.40

Server (0.44.1 -> 0.48.0)

- https://github.com/erlang-ls/erlang_ls/releases/tag/0.48.0
- https://github.com/erlang-ls/erlang_ls/releases/tag/0.47.1
- https://github.com/erlang-ls/erlang_ls/releases/tag/0.47.0
- https://github.com/erlang-ls/erlang_ls/releases/tag/0.46.2
- https://github.com/erlang-ls/erlang_ls/releases/tag/0.46.1
- https://github.com/erlang-ls/erlang_ls/releases/tag/0.46.0
- https://github.com/erlang-ls/erlang_ls/releases/tag/0.45.0

### 0.0.39

Server (0.44.0 -> 0.44.1)

- https://github.com/erlang-ls/erlang_ls/releases/tag/0.44.1

### 0.0.38

Server (0.43.0 -> 0.44.0)

- https://github.com/erlang-ls/erlang_ls/releases/tag/0.44.0

### 0.0.37

Server (0.41.2 -> 0.43.0)

- https://github.com/erlang-ls/erlang_ls/releases/tag/0.43.0
- https://github.com/erlang-ls/erlang_ls/releases/tag/0.42.0

### 0.0.36

Server (0.37.0 -> 0.41.2)

- https://github.com/erlang-ls/erlang_ls/releases/tag/0.41.2
- https://github.com/erlang-ls/erlang_ls/releases/tag/0.41.1
- https://github.com/erlang-ls/erlang_ls/releases/tag/0.41.0
- https://github.com/erlang-ls/erlang_ls/releases/tag/0.40.0
- https://github.com/erlang-ls/erlang_ls/releases/tag/0.39.0
- https://github.com/erlang-ls/erlang_ls/releases/tag/0.38.0

### 0.0.35

Server (0.30.0 -> 0.37.0):

- https://github.com/erlang-ls/erlang_ls/releases/tag/0.37.0
- https://github.com/erlang-ls/erlang_ls/releases/tag/0.36.0
- https://github.com/erlang-ls/erlang_ls/releases/tag/0.35.0
- https://github.com/erlang-ls/erlang_ls/releases/tag/0.34.0
- https://github.com/erlang-ls/erlang_ls/releases/tag/0.33.0
- https://github.com/erlang-ls/erlang_ls/releases/tag/0.32.0
- https://github.com/erlang-ls/erlang_ls/releases/tag/0.31.0

### 0.0.34

Server (0.29.0 -> 0.30.0):

- Ensure EPMD is running when launching debugger by @robertoaloi in https://github.com/erlang-ls/erlang_ls/pull/1276
- Refactor folding_ranges onto POIs, Add support for records. by @tks2103 in https://github.com/erlang-ls/erlang_ls/pull/1268
- Support for adding undefined Function by @f2000357 in https://github.com/erlang-ls/erlang_ls/pull/1267
- Document versioning by @robertoaloi in https://github.com/erlang-ls/erlang_ls/pull/1265
- Do not reload file from disk on save by @robertoaloi in https://github.com/erlang-ls/erlang_ls/pull/1278
- Use version from didOpen, use text from editor as source of truth by @robertoaloi in https://github.com/erlang-ls/erlang_ls/pull/1279

https://github.com/erlang-ls/erlang_ls/releases/tag/0.30.0

### 0.0.33

Server (0.21.2 -> 0.29.0):

- https://github.com/erlang-ls/erlang_ls/releases/tag/0.29.0
- https://github.com/erlang-ls/erlang_ls/releases/tag/0.28.0
- https://github.com/erlang-ls/erlang_ls/releases/tag/0.27.0
- https://github.com/erlang-ls/erlang_ls/releases/tag/0.26.0
- https://github.com/erlang-ls/erlang_ls/releases/tag/0.25.0
- https://github.com/erlang-ls/erlang_ls/releases/tag/0.24.0
- https://github.com/erlang-ls/erlang_ls/releases/tag/0.23.1
- https://github.com/erlang-ls/erlang_ls/releases/tag/0.23.0
- https://github.com/erlang-ls/erlang_ls/releases/tag/0.22.0

### 0.0.32

Server (0.21.1 -> 0.21.2):

- Revert unicode support by @garazdawi in https://github.com/erlang-ls/erlang_ls/pull/1151

### 0.0.31

Server (0.20.0 -> 0.21.1):

- Ignore test data directories by @dgud in https://github.com/erlang-ls/erlang_ls/pull/1109
- Discover test files automatically by @robertoaloi in https://github.com/erlang-ls/erlang_ls/pull/1111
- Hover docs for fun expressions referring to local or remote functions by @gomoripeti in https://github.com/erlang-ls/erlang_ls/pull/1112
- Update erlfmt to 1.0.0 by @gomoripeti in https://github.com/erlang-ls/erlang_ls/pull/1113
- Add make target `clean` by @JimMoen in https://github.com/erlang-ls/erlang_ls/pull/1116
- Provide a Gradualizer diagnostic by @erszcz in https://github.com/erlang-ls/erlang_ls/pull/1117
- Eep 48 markdown by @garazdawi in https://github.com/erlang-ls/erlang_ls/pull/1100
- Remove fragile heuristics from editable_range by @gomoripeti in https://github.com/erlang-ls/erlang_ls/pull/1126
- Do not recurse in els_utils:fold_files by @dgud in https://github.com/erlang-ls/erlang_ls/pull/1122
- Refactor test framework for diagnostics by @robertoaloi in https://github.com/erlang-ls/erlang_ls/pull/1129
- Bring back `coveralls send` step in CI by @pablocostass in https://github.com/erlang-ls/erlang_ls/pull/1130
- Remove TCP support by @adrianroe in https://github.com/erlang-ls/erlang_ls/pull/1131
- Do not include error description in code by @robertoaloi in https://github.com/erlang-ls/erlang_ls/pull/1141
- Lower docs log message level to DEBUG by @robertoaloi in https://github.com/erlang-ls/erlang_ls/pull/1144
- Fix unicode output via stdout by @garazdawi in https://github.com/erlang-ls/erlang_ls/pull/1147
- [#1149] Exit with 0 on --version by @robertoaloi in https://github.com/erlang-ls/erlang_ls/pull/1150

Extension:

- Show server stdout in case of starting error by @robertoaloi in https://github.com/erlang-ls/vscode/pull/114

### 0.0.30

Server (0.19.0 -> 0.20.0):

- Fix DAP not finding the source for a module by @maxno-kivra in https://github.com/erlang-ls/erlang_ls/pull/1084
- Temporarily skip coveralls send by @robertoaloi in https://github.com/erlang-ls/erlang_ls/pull/1087
- Mark headers with compiler attributes as used by @robertoaloi in https://github.com/erlang-ls/erlang_ls/pull/1085
- Handle Elvis config errors by @robertoaloi in https://github.com/erlang-ls/erlang_ls/pull/1088
- User background job for hover provider to avoid blocking request queue by @TheGeorge in https://github.com/erlang-ls/erlang_ls/pull/1091
- Add support for Call Hierarchy by @robertoaloi in https://github.com/erlang-ls/erlang_ls/pull/1096
- Detect unused record fields by @robertoaloi in https://github.com/erlang-ls/erlang_ls/pull/1099
- Shutdown request does not include parameters by @robertoaloi in https://github.com/erlang-ls/erlang_ls/pull/1108

Extension:

- Remove keywords from brackets (thanks @DOBRO)
- Add support for LSP 3.16 (bump vscode-languageclient to 7.0.0)

### 0.0.29

Server (0.18.0 -> 0.19.0):

- Add config option to exclude unused headers from warnings (thanks @NAR)
- Introduce experimental BSP support (thanks @al-khanji)
- Find non-parametrized macro definitions (thanks @NAR)
- Fix type mismatch in unused_macros diagnostic (thanks @nwalker)
- Enable incremental_sync by default
- Introduce diagnostic codes for the OTP compiler (thanks @alanz)
- Simplify protocol implementation (thanks @al-khanji)
- Add telemetry/event notifications for compiler diagnostics (thanks @alanz)

Extension:

- Recognize keywords as brackets (`if...end`, `begin...end`, etc) (thanks @ztion)
- Add `use_long_names` configuration option (thanks @zsoci)

### 0.0.28

Server (0.17.0 -> 0.18.0):

- Fix issue with code reloading when no cookie is set up
- Fix support for multiple threads in DAP continue request (thanks @TheGeorge)
- Add guidelines on encoding binaries
- Publish escripts as part of CI
- Specify category for DAP events, so they get displayed via the Emacs UI
- Speed up detection of unused includes (thanks @keynslug)
- Fix issue with the initialization of the DAP server
- Fix display of DAP logpoints
- Show warning in case of missing configuration file
- Reduce log level of events related to background jobs and compilation
- Support macros as record names
- Ignore Emacs backup and temporary files (thanks @pierre-rouleau)
- Refactor distribution and improve support for longnames (thanks @zsoci)
- Fix crash when applying edits to unicode text (thanks @plux)
- Add hover support on record expressions (thanks @ztion)

Grammar:

- Comma is not needed in '-define' on the same line as macro name (thanks @danielfinke)
- Allow comment between '}' and ').' in record definitions (thanks @KornelH)
- Allow variables as module or function names in implicit function expressions (thanks @KornelH)
- Distinguish function type in type specification and explicit function expression (thanks @KornelH)
- Assign file extensions to Erlang mode: escript, yrl, xrl (thanks @KornelH)
- '$' is a valid ASCII number (thanks @KornelH)
- Escape sequences '^a'..'^z' are valid (and same as '^A'..'^Z') (thanks @KornelH)
- Escape sequences '\xXY' (where XY are hexadecimal digits) are valid (thanks @KornelH)
- 'utf8', 'utf16' and 'utf32' are valid type specifiers in binary (thanks @KornelH)
- Binary unit type specifier has a mandatory parameters as 'unit:<pos_integer>' (where <pos_integer> is in range 1..256) (thanks @KornelH)
- Single underscore (_) can be inserted between digits as a visual separator (since OTP 23) (thanks @KornelH)
- Highlight 'true', 'false' and 'undefined' language constants. Well, technically 'undefined' is not that but traditionally used like that. (thanks @KornelH)

### 0.0.27

Server (0.16.0 -> 0.17.0):

- Prevent infinite recursion when enumerating document POIs (thanks @keynslug)
- Fix creating macro POIs in function applications (thanks @gomoripeti)
- Add logging via window/LogMessage (thanks @TheGeorge)
- Find implementations for callback functions
- Fix completion for incomplete export entry (thanks @gomoripete)
- Fix docs for macros with arguments (thanks @gomoripeti)
- Add support for renaming types (thanks @plux)
- Add support for long names in DAP (thanks @zsoci)
- Implement dummy handler for pause in DAP (thanks @TheGeorge)
- Remove TCP support
- Add support for attach in DAP (thanks @RunyaoZhang)

### 0.0.26

Extension:

- Fix debugger executable override path (thanks @RunyaoZhang)
- Execute debugger via `escript` to ensure it works on Windows (thanks @misaki214)

Server (0.15.0 -> 0.16.0):

- Support renaming for record names and record fields (thanks @gomoripeti)
- Correctly decode path to custom configuration on Windows (thanks @misaki214)
- Allow config file to be named erlang_ls.yaml in addition to erlang_ls.config (thanks @elbrujohalcon)
- Implement support for incremental text synchronization (thanks @plux)
- Fix finding references for types defined in header files (thanks @plux)
- Upgrade ranch dependency to 2.0.0 (thanks @plux)
- Fix scoping for macro and record referencing (thanks @gomoripeti)
- Use column numbers for Dialyzer diagnostics when available (thanks @plux)
- Fix Dialyzer diagnostics support for OTP 24 (thanks @plux)
- Truncate suggested spec titles (thanks @hellmean)
- Improve installation instructions (thanks @pierre-rouleau)
- Allow renaming functions when pointing at function references (thanks @plux)
- Fix crash in function references code lens (thanks @hellmean)
- Debugger support for conditions and hitconditions for breakpoints and logpoints (thanks @hajduakos)
- Use erlfmt for parsing (thanks @gomoripeti)

### 0.0.25

Extension:

- Add support for debugger (thanks @TheGeorge)

Server (0.14.0 -> 0.15.0):

- Return references if no definitions are found (thanks @TheGeorge)
- Fix incorrect bound variable warnings in fun expression heads (thanks @gomoripeti)
- Clear stalled indicator on termination (thanks @zsoci)

### 0.0.24

Server (0.13.0 -> 0.14.0):

- Add support for renaming variables (thanks @plux)
- Add support for renaming functions(thanks @plux)
- Fix invalid crossref warnings for remote calls to module_info/0,1 (thanks @plux)
- Supply completions for POIs in includes recursively (thanks @plux)
- Add support for OTP 24 (thanks @garazdawi)
- Show column numbers in compiler warnings (OTP 24+) (thanks @garazdawi)
- More robust go-to definition in case of overlapping POIs (thanks @plux)
- Add completion support for module attributes (thanks @plux)
- Add context-based support for behaviour, include and include_lib (thanks @plux)
- Show macro definitions on hover (thanks @plux)
- Jump to definition from export_type entries (thanks @plux)
- Cancel requests asynchronously

### 0.0.23

Server (0.12.0 -> 0.13.0):

- Fix config file used by PropEr tests (thanks @pablocostass)
- Self-describing specs
- New code lens (named function-references) to show references to a function
- Optimize indexing (~4x speedup) (thanks @seriyps)
- Add support for cancelling requests
- Honour $/cancelRequest in the suggest-specs code lens
- Limit completion to unexported functions when in an -export (thanks @plux)
- Jump to variable definition (thanks @plux)
- Fix linting issues (thanks @plux)

### 0.0.22

Extension:

- Bump outdated dependencies (thanks to @maxno-kivra)

Server (0.11.0 -> 0.12.0):

- Compress document ETS table, reducing RAM consumption (thanks @seriyps)
- Fix support for snippets
- Fix Elvis configuration and address linting issues
- Remove dependency on cowlib, reducing size of the escript and
  compilation times
- Enable `bound_var_in_pattern`, `unused_includes` and `unused_macros`
  diagnostics by default

### 0.0.21

Extension:

- Add basic indentation rules
- Add closing pairs for quotes, single quotes and binaries

### 0.0.20

Server (0.10.0 -> 0.11.0):

- Jump to definition for non fully-qualified BIFs (thanks @al-khanji)
- Implement `completionItem/resolve`
- Fix extraction of spec when showing docs (thanks @gomoripeti)
- Handle unicode when pretty printing function clauses (thanks @gomoripeti)
- Make DAP connection to the node hidden (thanks @TheGeorge)
- Ensure files are indexed when accessed for the first time (thanks @sgillis)
- Add support for logpoints and fix the watchlist in DAP (thanks @TheGeorge)

### 0.0.19

Grammar:

- Fix support for ~

Server (0.9.0 -> 0.10.0):

- Detect unused macros
- Migrate from lager to OTP logger
- Highlight already bound variables in patterns (thanks @gomoripeti)
- Reduce memory consumption for POIs up to 80% (thanks @gomoripeti)
- Improve DAP support (thanks @TheGeorge)
- Experimental support for formatting code via the BSP protocol
- Find references from all function clauses (thanks @gomoripeti)
- Add Windows CI
- Improve POI detection in attributes (thanks @gomoripeti)
- Fix OTP 24 compiler warnings (thanks @garazdawi)
- Handle macros in type attributes (thanks @gomoripeti)
- Converted project to umbrella app (thanks @TheGeorge)
- Fix support for quoted atoms (thanks @keynslug)

### 0.0.18

Server (0.8.0 -> 0.9.0):

- Support jumping from record field to record definition (thanks to @gomoripeti)
- Allow usage of long names for the runtime node (thanks to @zsoci)
- Fix macro renaming, where one extra character was deleted (thanks to @gomoripeti)
- Build Dialyzer Persistent Lookup Table (plt) as part of make ci (thanks to @alanz)

### 0.0.17

Extension:

- Fork grammar used for Syntax Highlighting
- Move CHANGELOG to separate file
- Remove references to `debug` profile

Server:

- Suggest type specifications via TypEr
- Jump to definition for parse transforms
- Show OTP version on startup
- Take into account parse transforms runtime dependencies
- Silence Elvis during tests
- Don't crash if compiler options are not found (thanks to @zsoci)
- Handle macros in patterns (thanks to @gomoripeti)
- Be able to add directories to code path via the code_path_extra_dirs config parameter (thanks to @zsoci)
- Remove leftovers of db_dir (thanks to @gomoripeti)
- Be able to define a custom path for the elvis.config file via the elvis_config_path config parameter (thanks to @define-null)

### 0.0.16

Server:

- Add support for [snippets](https://erlang-ls.github.io/articles/snippets-are-here/)
- Fix a number of bugs related to POI ranges (thanks to @garazdawi)
- Complete with arity only when dealing with a remote fun
- Complete facelift for docs on hover
- Include function clauses on hover
- Refactor docs handling into separate module
- Separate docs fetching from formatting
- Refactor test code for hover into separate modules
- Introduce symbol highlighting
- More robust els_code_navigation:find_in_document/5 (thanks to @alanz)
- Add support for renaming macros and callback functions
- Be able to navigate to record definitions from types (thanks to @onno-vos-dev )
- Include project name in Erlang LS node names
- Add support for code navigation for record definitions from type specs
- Rename "xref" diagnostics to "crossref" (since they don't use XRef)
- Add support for unused include files detection
- Do not report crossref diagnostics for known pseudo-functions
- Make docs chunk search use Erlang LS DB rather than code path
- Remove dependency on Mnesia, use ETS only

### 0.0.15

Server:

- Do not crash while fetching docs due to missing encoding
- Fix support for OTP 23 in CI
- Remove obsolete `company-lsp` instructions
- Pass custom macros to Dialyzer
- Assume `COMPLETION_TRIGGER_KIND_INVOKED` when no context is provided
- Do not ask for _text_ on save
- Include experimental support for _DAP_ protocol
- Add loop detection into dependency discovery
- Fix path to PLT cache in CI
- Handle `epp` error messages as diagnostics for included files
- Remove spurious call to `els_dt_document:lookup/1`
- Provide `serverInfo` in `initialize` response
- Include OTP path to `server-info` lens to ease troubleshooting
- Add support for `COMPLETION_TRIGGER_KIND_FOR_INCOMPLETE_COMPLETIONS`

### 0.0.14

Server:

- Do not attempt to load dependencies from sticky directories
- Fix crash from asking erl_lint format our own error messages

### 0.0.13

This release is equivalent to `0.0.12`, but built using OTP 21, to avoid issues for old OTP users

### 0.0.12

Extension:

- Link documentation from README
- Fix security alert for minimalist dependency
- Add missing repository property to avoid warning
- Bump VSCode dependencies
- Ignore files according to the lsp-sample extension
- Bump erlang_ls to 0.4.0

Server:

- Add support for OTP 23
- Fix support for OTP Doc Chunks
- Show diagnostics for module dependencies
- Use correct compilation options when reloading module dependencies
- Do not crash when fetching docs for escriptized modules
- Do not crash if root path contains spaces
- Introduce log message when starting a new session
- Add experimental XREF diagnostics (disabled by default)
- Fix bug which caused a server crash when a notification contained a tilde (~)
- When multiple instances of the same module are indexed, sort them deterministically
- Fix various issues affecting Windows users
- Allow underscore macros
- Introduce experimental runtime node
- Introduce experimental code lens for running CT tests (disabled by default)
- New logo \o/
- Fix support for parse transforms
- Include module name in progress reports for diagnostics
- Wait for tables asynchronously
- Add support for unbound progress reports
- Show progress progress during DB initialization
- Be able to jump to definition from a module import
- Switch to stdio as the default transport
- Be able to enable/disable code lenses and diagnostics
- Do not consider all functions from the erlang module as BIFs
- Remove deprecated port option from escript
- Introduce general provider
- Add code lens to show behaviour usages
- Fix race condition where a server-initiated request was occasionally seen as a response
- Fix type mismatch between protocol and transport types
- Precalculate type specs
- Minor fixes and improvements

### 0.0.11

Extension:

- Include .escript among known file extensions

Server:

- Improve URI handling
- Introduce support for code lenses
- Introduce server-info code lense (disabled by default)
- Fix some Windows incompatibilities
- Avoid the entire server crashing in case of failing providers
- Improve support for Unicode
- Introduce background jobs
- Show progress while indexing
- Fix handling of empty RootUri (Sublime users should enjoy this)
- Add support for .escript files
- Update logging framework
- Add support for finding type references
- Enable logging by default
- Remove eflame dependency
- Add auto-completion for built-in functions and types
- Goto definition on an atom goes to that module if it exists
- Fix symlinks handling
- Add auto-completion for atoms
- Add edoc support for OTP modules (requires OTP 23 once available)
- Introduce CLI help menu via getopt

### 0.0.10

Extension:

- Configurable log level (default: none)
- Configurable log path

Server:

- Add auto completion for types in `spec` and `export_types` contexts
- Fix Elvis diagnostics for modules not belonging to the workspace
- Fix off-by-one folding ranges for some editors
- Restrict dependencies from accessing stdio, avoiding crashes on hover
- Speed up indexing
- Add syntax-highlighting for hover information
- Fix inclusion path for dependencies
- Show function information when hovering the `export` list
- Add plumbing for code lenses
- Find module references
- Find macro references
- Update code formatter to latest available version
- Fix ranges for Dialyzer diagnostics
- Avoid crash in presence of : within strings
- Fix supervision strategy
- Avoid un-necessary parsing
- Asynchronous diagnostics

### 0.0.9

Server:

- Add support for behaviours diagnostics (compiler, dialyzer)
- Add support for parse transform (compiler)
- Find references for records
- Fix support for `$/` notifications and requests
- Be able to specify a different location for the `erlang_ls.config` file
- Fix issue with Elvis diagnostics polluting stdio
- Add root uri to start-up message
- Fix include_dirs passed to Dialyzer
- Inject exit message when TCP socket is closed
- Add support for custom macros
- Add support for hot-code reloading

### 0.0.8

Extension:

- Fix support for Windows
- Add option to override the path to the language server

### 0.0.7

Extension:

- Add list of features to README
- Enable debug mode

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
