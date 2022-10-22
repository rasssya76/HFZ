global.language = "en"
global.nomerOwner ="6282142108243"
global.nomerOwner2 = "6282139103669"
global.runWith = "Termuk"
global.ownerName = "RAMA"
global.botName = "R-BOT" 
global.sessionName ="session"
global.setmenu ="location2"
global.docType = "docx"
global.Qoted = "ftroli"
global.baileysMd = true
global.antiSpam = true
global.multi = true
global.nopref = true
global.allpref = false
global.prefa = "."
global.fake = botName
global.Console = false
global.autorespon = false
global.copyright = "R-BOT" 
global.On = "On"
global.Off = "Off"
global.autoblockcmd = false
global.fake1 ="R-BOT"
global.packName = "\n"
global.authorName = "R\n-\nB\nO\nT\n6282139103669"
global.replyType = "web2"
global.setwelcome = "type2"
global.autoblockcmd = false
global.autoReport = false
global.autoLevel = false
global.autoSticker = false
global.gamewaktu = 60
global.limitCount = 30
global.gcount = {
prem : 60,
user : 20
} 





const fs = require("fs");
const { color } = require("./lib/color");
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})






