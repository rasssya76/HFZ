

module.exports = async (senderNumber, prefix,command) => {


global.mess = {
wait: '_Wait is in process......_',
search: '_Your request is being processed........_',
scrap: '_Wait...._',
success: 'Succes!',
limit: `Your limit has run out`,
claimOn: `Wait tomorrow`,
wrongFormat: 'Format error ',

error: {
stick: 'bukan sticker itu:v',
api: 'Error api atau linkya mungkin',
Iv: 'Linknya error:v',
link : "Link error!"
},

block:{
Bowner: `Maaf kak command [ *${command}* ] telah di block oleh owner`,
Bsystem: `Command 「 *${command}* 」telah di block oleh system karena terjadi error`
},

 only: {
prem : 'Premium special features! Chat owner to get Premium access!',
group: 'Fitur ini dapat digunakan di Dalam Group!',
ownerB: 'Fitur Khusus Owner Bot!',
owner: 'Fitur Khusus Owner Bot!',
admin: 'Fitur dapat Digunakan oleh Admin Group!',
Badmin: 'Fitur dapat Digunakan Setelah Bot menjadi ADMIN!'
 }
  
 }

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