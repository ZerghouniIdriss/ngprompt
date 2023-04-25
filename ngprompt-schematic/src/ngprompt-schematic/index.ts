import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NgpromptService } from '../src/lib/ngprompt.service';

export function ngpromptSchematic(options: any): Rule {
  return async (tree: Tree, _context: SchematicContext) => {
    const ngpromptService = new NgpromptService();
    const instructions = await ngpromptService.fetchOpenAiInstructions(options.prompt);
    ngpromptService.executeInstructions(instructions);
    return tree;
  };
}
