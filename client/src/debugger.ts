import * as vscode from 'vscode';
import * as path from 'path';

const DEBUG_TYPE = 'erlang';

export function registerDebugAdapterDescriptorFactory(
    context: vscode.ExtensionContext
): vscode.Disposable {
    return vscode.debug.registerDebugAdapterDescriptorFactory(
        DEBUG_TYPE,
        new ErlangDebugAdapterExecutableFactory(context)
    );
}

class ErlangDebugAdapterExecutableFactory implements vscode.DebugAdapterDescriptorFactory {
    context: vscode.ExtensionContext;

    constructor(context: vscode.ExtensionContext) {
        this.context = context;
    }

    async createDebugAdapterDescriptor(
        _session: vscode.DebugSession,
        _executable: vscode.DebugAdapterExecutable | undefined,
    ): Promise<vscode.ProviderResult<vscode.DebugAdapterDescriptor>> {
        const erlangConfig = vscode.workspace;
        const executable = erlangConfig.getConfiguration('erlang_ls').get<string>('dapPath') || '';

        let command;
        let args;

        if (executable.length > 0) {
            command = executable.split(' ')[0];
            args = executable.split(' ').slice(1);
        } else {
            // use default
            command = this.context.asAbsolutePath(
                path.join('erlang_ls', '_build', 'dap', 'bin', 'els_dap')
            );
            args = [];
        }
        return new vscode.DebugAdapterExecutable(command, args, undefined);
    }

}
