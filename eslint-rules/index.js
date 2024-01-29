"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rules = void 0;
const testRule_1 = __importDefault(require("./testRule"));
exports.rules = {
    'my-rule-name': testRule_1.default,
};
