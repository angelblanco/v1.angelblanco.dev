#!/usr/bin/env node
import { program } from 'commander';
import initCommands from './src/commands/index.js';

async function main() {
    initCommands(program).forEach(command => command.setUp());

    await program.parseAsync(process.argv);
}

main();
