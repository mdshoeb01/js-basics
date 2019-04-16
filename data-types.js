let a = 1; //this is int type in js
console.log('a value:', a);
let b  = true; // this is boolean type in js;
console.log('b value:', b);
let str = 'rumaisa'; // this is string type in js
console.log('str value:', str);
let arr = [1, 2, 3, 'sana'] // this is array type in js, an array can have various type of elements.
console.log(arr, ': arr value');
let ob = { key: 'value' } // this is object in js, it has key-value pairs.
console.log('ob value:', ob);
let obj = {
    a: 1,
    b: 3,
    c: 'muaaz',
}; // an object in js is known as json (java script object notation)
console.log('few values of obj: ', obj.c, obj.a, obj.b);
// json can have nested data types.
let nestedJson = {
    a: [1, 2, 'sana'],
    b: {
        first: 'rumaisa',
        second: 'rameez'
    },
    c: 1,
    d: 'shoeb',
};
console.log('nested json object:', nestedJson);

// run this file with node data-types.js, you will get the result.
// any questions ping me on slack or whatsapp
