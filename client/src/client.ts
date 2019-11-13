import * as path from 'path';
import { workspace, ExtensionContext } from 'vscode';

import {
    LanguageClient,
    LanguageClientOptions,
    ServerOptions,
    TransportKind
} from 'vscode-languageclient';

let client: LanguageClient;

export async function activate(context: ExtensionContext) {
    let clientOptions: LanguageClientOptions = {
        documentSelector: [{ scheme: 'file', language: 'erlang' }],
        synchronize: {
            fileEvents: [
                workspace.createFileSystemWatcher('**/rebar.config'),
                workspace.createFileSystemWatcher('**/rebar.lock')
            ]
        }
    };

    let serverPath = context.asAbsolutePath(
        path.join('erlang_ls', '_build', 'default', 'bin', 'erlang_ls')
    );

    let serverOptions: ServerOptions = {
        command: serverPath,
        args: [ "--transport", "stdio" ],
        transport: TransportKind.stdio
    };

    client = new LanguageClient(
        'erlang_ls',
        serverOptions,
        clientOptions
    );

    client.start();
}

export function deactivate(): Thenable<void> | undefined {
    if (!client) {
        return undefined;
    }
    return client.stop();
}
