const DataStore = require('nedb');

function loadDb(path){
    const db = new DataStore({ filename: `../storage/database/${path}`});
    db.loadDatabase( (err) => console.log('Databse Loaded'));
    return db;
}

const users = loadDb('users');
const products = loadDb('products');

export {users, products};