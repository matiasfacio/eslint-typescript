"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// we add the type in this generic
var myRule = {
    defaultOptions: [],
    meta: {
        type: 'problem',
        messages: {
        // here we define the messages that will be shown to the user based on the "MessageIds" type
        },
        schema: [],
        fixable: 'code',
    },
    create: function (context) {
        // let's log the context
        console.log({ context: context.filename });
        return {};
    }
};
exports.default = myRule;
