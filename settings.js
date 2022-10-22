global.language = "en"
global.nomerOwner ="6282142108243"
global.nomerOwner2 ="0"
global.runWith = "Termux"
global.ownerName = "Itu Orang bukan bot 🗿"
global.botName = "R-BOT" 
global.sessionName ="session"
global.setmenu ="document"
global.docType = "docx"
global.Qoted = "ftroli"
global.waktu = 60000
global.baileysMd = true
global.antiSpam = true
global.multi = true
global.prefa = "."
global.fake = botName
global.Console = false
global.autorespon = false
global.copyright = "R-BOT" 
global.On = "On"
global.Off ="Off"
global.autoblockcmd = false
global.fake1 ="R-BOT"
global.packName = "\n"
global.authorName = "R\n-\nB\nO\nT6285159088173"
global.replyType = "web2"
global.setwelcome = "type2"
global.autoblockcmd = false
global.autoReport = true
global.autoLevel = true
global.autoSticker = false
global.gamewaktu = 60
global.limitCount = 25
global.monayawal = 1000,
global.rpg = { darahawal: 100, besiawal: 15, goldawal: 10, emeraldawal: 5, umpanawal: 5, potionawal: 1 }
global.gcounti = { prem : 60, user : 20 }




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






