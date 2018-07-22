const electron = require("electron");
const bcrypt = require('bcryptjs'); 
const DataStore = require('nedb');

const { app, BrowserWindow, ipcMain } = electron;
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync('Qazwsx_89', salt);
const db = new DataStore({ filename: '../storage/database/users'});

db.loadDatabase( (err) => console.log('Databse Loaded'));

db.find({email: 'adrianmaenza@gmail.com'}, (err, data) => {
    let user = data[0];
    console.log(user);
    // // update password
    // db.update({email: user.email},{password: hash}, {}, (err) => console.log(err));
 });


let window;
 
app.on('ready', () => {
    window = new BrowserWindow({
        // frame: false
    });

    // Set Title
    window.setTitle("Stock Manager");

    // get that funny url from electron-webpack
    window.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`)

});

ipcMain.on('application:quit', (event, data) => {
    app.quit();
})