/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

import type {File} from '../codegen/CodegenTypes';
import type {DocumentNode} from 'graphql';

const ASTCache = require('./ASTCache');
const fs = require('fs');
const {Source, parse} = require('graphql');
const path = require('path');

function parseFile(baseDir: string, file: File): ?DocumentNode {
  const text = fs.readFileSync(path.join(baseDir, file.relPath), 'utf8');
  return parse(new Source(text, file.relPath), {
    experimentalFragmentVariables: true,
  });
}

function getParser(baseDir: string): ASTCache {
  return new ASTCache({baseDir, parse: parseFile});
}

module.exports = {
  parseFile,
  getParser,
};
