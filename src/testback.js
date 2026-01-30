import { Allhomes } from './testback.js';

/*
try {
    const records = await Allevents();
    console.table(records);
} catch (e) {
    console.error(e);
}
*/

try {
    const records = await Allhomes();
    const une_maison = await pb.collection('maison').getOne('xuv2vnrttqn8nex');
    console.log(records);
    console.log(une_maison);
} catch (e) {
    console.error(e);
}
