#!/usr/bin/env node

import CommandLine from '@nexojs/command-line';
import Configs from '@xfaonae/configs';

/**
 * Script entry class
 */
export default class Main {
    /**
     * Script entry method
     */
    public static async start() {
        CommandLine.app.registerCommand('hello', {
            flags: {
                name: {
                    type: 'string',
                    default: 'World',
                }
            },
            handle: (flags: any) => {
                CommandLine.out.log(`Hello ${flags.name}! :D`);
            },
        }).then(() => {
            CommandLine.app.registerCommand('version', {
                handle: async () => {
                    CommandLine.out.log(await Configs.getCLIVersion());
                    },
                }
            ).then(() => {
                CommandLine.app.execute();
            });
        });
    }
}

Main.start();
