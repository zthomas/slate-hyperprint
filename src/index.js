/* @flow */

import parse from './parse';
import type { Options } from './options';
import type { SlateModel } from './types';

function hyperprint(model: SlateModel, { indent = '    ' }: Options = {}) {
    if (!model) {
        throw new Error('slate-hyperprint: Expected a Slate model');
    }

    const options = {
        indent
    };

    return parse(model, options).print(options);
}

export default hyperprint;
