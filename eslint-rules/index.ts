import { TSESLint } from '@typescript-eslint/utils';
import myRule from './testRule';

export const rules = {
    'my-rule-name': myRule,
} satisfies Record<string, TSESLint.RuleModule<string, Array<unknown>>>;