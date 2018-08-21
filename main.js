const {
	app,
	BrowserWindow,
	Menu
} = require('electron')
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow() {
	// Create the browser window.
	win = new BrowserWindow({
		width: 800,
		height: 600,
		resizable: false
	})

	// and load the index.html of the app.
	win.loadFile('src/index.html')

	// Open the DevTools.
	// win.webContents.openDevTools()

	// Emitted when the window is closed.
	win.on('closed', () => {
		// Dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		win = null
	})


	function showInfoWndow() {
		let infoWin = new BrowserWindow({
			width: 300,
			height: 200,
			resizable: false,
			autoHideMenuBar: true,
			parent: win // This sets infoWin as a child window of win (our main app window)
		})
		infoWin.loadFile('src/info.html')
	}

	// Create menu options
	// pass an array to Menu.buildFromTemplate() function
	var menu = Menu.buildFromTemplate([{ // Inside the array create an object {}
			label: 'Menu', // Inside this object we will build our menu item labels
			submenu: [{ // Then its respective submenu which is also an array
					label: 'Exit',
					click() { // logic for menu items is done with click(){} function
						app.quit()
					}
				}

			]
		},
		{
			label: 'Info',
			click() {
				showInfoWndow()
			} // Infor menu item on click this will show info of our app
		}
	])

	Menu.setApplicationMenu(menu)
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
	// On macOS it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', () => {
	// On macOS it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (win === null) {
		createWindow()
	}
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.