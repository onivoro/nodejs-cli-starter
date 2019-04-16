#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var whatever_1 = __importDefault(require("../src/sample/whatever"));
var theThing = whatever_1["default"]();
console.log(theThing);
