const electron = require("electron")
const bcrypt = require('bcryptjs')
const database = require('./database')

import * as path from 'path'
import {format as formatUrl} from 'url'

const { app, BrowserWindow, ipcMain } = electron
const {users, products} = database

const salt = bcrypt.genSaltSync(10)
const isDevelopment = process.env.NODE_ENV !== 'production'

let mainWindow;
let addProductWindow;
 
app.on('ready', () => {
    mainWindow = new BrowserWindow({
        // frame: false
    });

    // Set Title
    mainWindow.setTitle("Stock Manager");

    if(isDevelopment){
        mainWindow.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`)
    } else {
        mainWindow.loadURL(
            formatUrl({
                pathname: path.join(__dirname, 'index.html'),
                protocol: 'file',
                slashes: true
            })
        )
    }

});

// Add product
ipcMain.on('product:save', (event, data) => {

    products.insert(data, (err, data) => {
        if (!err){
            mainWindow.webContents.send('product:saved', true);
        }
    });

});

ipcMain.on('application:quit', (event, data) => {
    app.quit();
})