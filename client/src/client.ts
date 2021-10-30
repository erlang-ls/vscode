import * as path from 'path';
import { workspace, ExtensionContext, window } from 'vscode';
import { spawnSync } from 'child_process';

import {
    LanguageClient,
    LanguageClientOptions,
    ServerOptions,
    TransportKind
} from 'vscode-languageclient/node';

let client: LanguageClient;

export async function get_client(context: ExtensionContext): Promise<LanguageClient> {
    let clientOptions: LanguageClientOptions = {
        documentSelector: [{ scheme: 'file', language: 'erlang' }],
        synchronize: {
            fileEvents: [
                workspace.createFileSystemWatcher('**/rebar.config'),
                workspace.createFileSystemWatcher('**/rebar.lock')
            ]
        }
    };

    let serverPath = workspace.getConfiguration('erlang_ls').serverPath;
    if (serverPath === "") {
        serverPath = context.asAbsolutePath(
            path.join('erlang_ls', '_build', 'default', 'bin', 'erlang_ls')
        );
    };

    let logLevel = workspace.getConfiguration('erlang_ls').logLevel;

    let serverArgs = [ serverPath, "--log-level", logLevel ];

    let logPath = workspace.getConfiguration('erlang_ls').logPath;
    if (logPath !== "") {
        serverArgs.push("--log-dir", logPath);
    }

    let serverOptions: ServerOptions = {
        command: 'escript',
        args: serverArgs,
        transport: TransportKind.stdio
    };

    verifyExecutable(serverPath);

    return new LanguageClient(
        'erlang_ls',
        'Erlang LS',
        serverOptions,
        clientOptions
    );
}

export function verifyExecutable(serverPath: string) {
    const res = spawnSync(serverPath, ["-version"]);
    if (res.status !== 0) {
        window.showErrorMessage('Could not start Language Server. Error: ' + res.stdout);
    }
}
