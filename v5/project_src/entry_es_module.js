import cd, { c } from './es_c'
import d from './es_d'

console.log({ name: 'foo', items: [...c.sequence], ...cd });
console.log(d);

