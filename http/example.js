const { flatMapDeep } = require('lodash');

const items = [1,[2,[3,[4]]]];

const new_items = flatMapDeep(items)

console.log(new_items)