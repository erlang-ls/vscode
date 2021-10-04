import * as path from 'path';
import { ExtensionContext } from 'vscode';


import {
    LanguageClient,
} from 'vscode-languageclient/node';

import { get_client } from './client';
import { registerDebugAdapterDescriptorFactory } from './debugger';

let client: LanguageClient;

export async function activate(context: ExtensionContext) {

    context.subscriptions.push(registerDebugAdapterDescriptorFactory(context));

    client = await get_client(context),
    client.start();
}

export function deactivate(): Thenable<void> | undefined {
    if (!client) {
        return undefined;
    }
    return client.stop();
}
