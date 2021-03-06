import { tokenIdentifiers, keywords } from './parser/lexer';
export const Lexer = {
  tokenIdentifiers,
  keywords,
};

import { InvalidProgramError, InterpreterError } from './interpreter/errors';
import { IncorrectIndentationException } from './parser/errors';

export const Errors = {
  InvalidProgramError,
  InterpreterError,
  IncorrectIndentationException
};

import * as ast from './ast';
export const Ast = ast;

import * as ffi from './ffi';
export const FFI = ffi;

export { Parser } from './parser';
export { Interpreter } from './interpreter';
