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

        let command = 'escript';
        let args;

        if (executable.length > 0) {
            args = [ executable.split(' ')[0] ];
        } else {
            // use default
            args = [ this.context.asAbsolutePath(
                path.join('els_dap', '_build', 'default', 'bin', 'els_dap')
            ) ];
        }
        return new vscode.DebugAdapterExecutable(command, args, undefined);
    }

}
