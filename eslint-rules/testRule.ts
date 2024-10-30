import {TSESLint} from '@typescript-eslint/utils';


// we are going to type the "messages" object
type MessageIds = '';


// we add the type in this generic
const myRule: TSESLint.RuleModule<string> = {
    defaultOptions: [],
    meta: {
        type: 'problem',
        messages: {
            // here we define the messages that will be shown to the user based on the "MessageIds" type
        },
        schema: [],
        fixable: 'code',
    },
    create: context => {
        // let's log the context
        console.log({context: context.filename})
        return context
    }
}

export default myRule