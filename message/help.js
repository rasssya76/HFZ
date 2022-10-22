const moment = require("moment-timezone");
const fs = require("fs");
const chalk = require('chalk')
const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
const { color, bgcolor } = require('../lib/color')
const {weton,week,calender,dateIslamic} = require('../lib/functions')
const {kyun} = require("../lib/myfunc");
moment.tz.setDefault("Asia/Jakarta").locale("id");

//Total fitur by Official Dittaz
const totalFitur = () =>{
var mytext = fs.readFileSync("./message/msg.js").toString()
var numUpper = (mytext.match(/case/g) || []).length;
return numUpper
}

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)



let yes = "*「 _Error_ 」* ❌"
let no =""

const feat = (q) => {
    let status = false
    Object.keys(JSON.parse(fs.readFileSync('./database/listerror.json'))).forEach((i) => {
        if (JSON.parse(fs.readFileSync('./database/listerror.json'))[i].cmd === q) {
            status = true
        }
    })
    return status
}



exports.allmenu =  (getLimit, senderNumber, limitCount, user, getBalance, isPremium,thisHit, publik, sender, prefix, pushname) => {
try{ 
var balance =  getBalance(senderNumber, user).toLocaleString() 
} catch{ 
var balance = getBalance(senderNumber, user)
}
return `*${botName}*
${week}, ${calender} 

*->* Nama : ${pushname}
*->* Status : ${isPremium ? '🎫 Premium':'Free'}
*->* Limit : ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}
*->* Saldo : Rp ${balance}
*->* Running On : *${runWith}*
*->* Mode : ${publik ? "Public" : "Self"}
*->* Time : ${timeWib} WIB 
*->* Time : ${timeWit} WIT 
*->* Time : ${timeWita} WITA
*->* Islamic : ${dateIslamic}
*->* Hit Today : ${thisHit.toLocaleString()}
*->* Total Feature : ${totalFitur()}
*->* Total Error : ${JSON.parse(fs.readFileSync('./database/listerror.json')).length}
*->* Total User : ${JSON.parse(fs.readFileSync('./database/user.json')).length.toLocaleString()}
*->* User Banned : ${JSON.parse(fs.readFileSync('./database/banned.json')).length}
*->* User Blocked : ${JSON.parse(fs.readFileSync('./database/userblocked.json')).length.toLocaleString()}
*->* Cmd Blocked : ${JSON.parse(fs.readFileSync('./database/blockcmd.json')).length} 
 `}

exports.fitur = (prefix) => {
return`
*_Main🌱 Command_*
*➠* ${prefix}menu  ${feat("menu")? yes :no}
*➠* ${prefix}tr  ${feat("tr")? yes :no}
*➠* ${prefix}runtime  ${feat("runtime")? yes :no}
*➠* ${prefix}speed  ${feat("speed")? yes :no}
*➠* ${prefix}ss ${feat("ss")? yes :no}
*➠* ${prefix}quotes ${feat("quotes")? yes :no}
*➠* ${prefix}ytmp4 ${feat("ytmp4")? yes :no}
*➠* ${prefix}ytmp3 ${feat("ytmp3")? yes :no}
*➠* ${prefix}chat ${feat("chat")? yes :no}
*➠* ${prefix}rules ${feat("rules")? yes :no}
*➠* ${prefix}kalkulator ${feat("kalkulator")? yes :no}
*➠* ${prefix}speedtest ${feat("speedtest")? yes :no}
*➠* ${prefix}listpc ${feat("listpc")? yes :no}
*➠* ${prefix}listgc ${feat("listgc")? yes :no}
 
*_Group👥 Feature_*
*➠* ${prefix}antilink    
*➠* ${prefix}antilinkgc   
*➠* ${prefix}antivirtex  
*➠* ${prefix}infogc ${feat("infogx")? yes :no}
*➠* ${prefix}linkgc ${feat("linkgc")? yes :no}
*➠* ${prefix}setppgc ${feat("setppgc")? yes :no}
*➠* ${prefix}setnamegc ${feat("setnamegc")? yes :no}
*➠* ${prefix}setdesc ${feat("setdesc")? yes :no}
*➠* ${prefix}gc ${feat("gc")? yes :no}
*➠* ${prefix}revoke ${feat("revoke")? yes :no}
*➠* ${prefix}hidetag ${feat("hidetag")? yes :no}
*➠* ${prefix}kick ${feat("kick")? yes :no}
*➠* ${prefix}add ${feat("add")? yes :no}
*➠* ${prefix}opentime ${feat("opentime")? yes :no}
*➠* ${prefix}closetime ${feat("closetime")? yes :no}
*➠* ${prefix}demote ${feat("demote")? yes :no}
*➠* ${prefix}promote ${feat("promote")? yes :no}
*➠* ${prefix}kickme ${feat("kickme")? yes :no}
*➠* ${prefix}banchat ${feat("banchat")? yes :no}
*➠* ${prefix}unbanchat ${feat("unbanchat")? yes :no}
*➠* ${prefix}ban ${feat("ban")? yes :no}
*➠* ${prefix}unban ${feat("unban")? yes :no}
*➠* ${prefix}listban ${feat("listban")? yes :no}
*➠* ${prefix}getppgc ${feat("getppgc")? yes :no}
*➠* ${prefix}getpp ${feat("getpp")? yes :no}
*➠* ${prefix}listonline ${feat("lostoneline")? yes :no}
  
*_Random✳️ Feature_*
*➠* ${prefix}cecan ${feat("cecan")? yes :no}
*➠* ${prefix}cogan ${feat("cogan")? yes :no}
*➠* ${prefix}anime ${feat("anime")? yes :no}
*➠* ${prefix}loli ${feat("loli")? yes :no}
*➠* ${prefix}milf ${feat("milf")? yes :no}
*➠* ${prefix}husbu ${feat("hubu")? yes :no}
*➠* ${prefix}cosplay ${feat("cosplay")? yes :no}
*➠* ${prefix}wallml ${feat("wallml")? yes :no}
*➠* ${prefix}patrick ${feat("patrick")? yes :no}
*➠* ${prefix}gura ${feat("gura")? yes :no}
*➠* ${prefix}doge ${feat("doge")? yes :no}
*➠* ${prefix}wallpapers ${feat("wallpapers")? yes :no}
*➠* ${prefix}wallpapermobile ${feat("wallpapermobile")? yes :no} 

*_Converter🔃_*
*➠* ${prefix}toimg ${feat("toimg")? yes :no}
*➠* ${prefix}tomp3 ${feat("tomp3")? yes :no}
*➠* ${prefix}tomp4 ${feat("tomp4")? yes :no}
*➠* ${prefix}toptt ${feat("toptt")? yes :no}
*➠* ${prefix}togif ${feat("togif")? yes :no}
*➠* ${prefix}volume ${feat("volume")? yes :no}
*➠* ${prefix}hode ${feat("hode")? yes :no}
*➠* ${prefix}ghost ${feat("ghost")? yes :no}
*➠* ${prefix}nightcore ${feat("nightcore")? yes :no}
*➠* ${prefix}tupai ${feat("tupai")? yes :no}
*➠* ${prefix}imut ${feat("imut")? yes :no}
*➠* ${prefix}emojiap ${feat("emojiap")? yes :no}
*➠* ${prefix}emojigo ${feat("emojigo")? yes :no}
*➠* ${prefix}emojisa ${feat("emojisa")? yes :no}
*➠* ${prefix}emojims ${feat("emojims")? yes :no}
*➠* ${prefix}emojiwa ${feat("emojiwa")? yes :no}
*➠* ${prefix}emojitw ${feat("emojitw")? yes :no}
*➠* ${prefix}emojifb ${feat("emojifb")? yes :no}
*➠* ${prefix}emojijp ${feat("emojijp")? yes :no}
*➠* ${prefix}emojiom ${feat("emojiom")? yes :no}
*➠* ${prefix}emojied ${feat("emojied")? yes :no}
*➠* ${prefix}emojimes ${feat("emojimes")? yes :no}
*➠* ${prefix}emojilt ${feat("emojilt")? yes :no}
*➠* ${prefix}emojimo ${feat("emojimo")? yes :no}
*➠* ${prefix}emojimix ${feat("emojimix")? yes :no}

*_Sticker📖 Command_*
*➠* ${prefix}sticker ${feat("s")? yes :no}
*➠* ${prefix}smeme ${feat("smeme")? yes :no}
*➠* ${prefix}triggered ${feat("triggered")? yes :no}
*➠* ${prefix}wasted ${feat("wasted")? yes :no}
*➠* ${prefix}comrade ${feat("comrade")? yes :no}
*➠* ${prefix}horny ${feat("horny")? yes :no}
*➠* ${prefix}blur ${feat("blur")? yes :no}
*➠* ${prefix}pixelate ${feat("pixelate")? yes :no}
*➠* ${prefix}simpcard ${feat("simpcard")? yes :no}
*➠* ${prefix}lolice ${feat("lolice")? yes :no}
*➠* ${prefix}glass ${feat("glass")? yes :no}
*➠* ${prefix}take ${feat("take")? yes :no}
*➠* ${prefix}
*➠* ${prefix}

*_Downloader📩 Fature_*
*➠* ${prefix}play  ${feat("play")? yes :no}
*➠* ${prefix}playmusic  ${feat("playmusic")? yes :no}
*➠* ${prefix}ig  ${feat("ig")? yes :no}
*➠* ${prefix}gimage ${feat("gimage")? yes :no}
*➠* ${prefix}tiktok ${feat("tiktok")? yes :no}
*➠* ${prefix}tiktokmusic ${feat("tiktokmusik")? yes :no}
*➠* ${prefix}tiktoknowm ${feat("tiktoknowm")? yes :no}
*➠* ${prefix}pinterest ${feat("pinterest")? yes :no}
*➠* ${prefix}spotify
*➠* ${prefix}mediafire ${feat("mediafire")? yes :no}
*➠* ${prefix}githubdl ${feat("githubdl")? yes :no}
*➠* ${prefix}gitclone  ${feat("gitclone")? yes :no}
*➠* ${prefix}igstory ${feat("igstory")? yes :no}
 
*_Text📝 Pro_*
*➠* ${prefix}blackping
*➠* ${prefix}glitch
*➠* ${prefix}glitch2
*➠* ${prefix}glitch3      
*➠* ${prefix}lion       
*➠* ${prefix}3dneon   
*➠* ${prefix}3dspace     
*➠* ${prefix}neon     
*➠* ${prefix}greenneon  
*➠* ${prefix}bokeh   
*➠* ${prefix}hollographic  
*➠* ${prefix}bear     
*➠* ${prefix}wolf    
*➠* ${prefix}joker   
*➠* ${prefix}dropwater
*➠* ${prefix}neonlight   
*➠* ${prefix}thewall   
*➠* ${prefix}natural   
*➠* ${prefix}carbon   
*➠* ${prefix}pencil   
*➠* ${prefix}luxury   
*➠* ${prefix}whitegold  
*➠* ${prefix}lightglow   
*➠* ${prefix}arcane   
*➠* ${prefix}neonlight    
*➠* ${prefix}valentine    
*➠* ${prefix}glowingneon  
*➠* ${prefix}colorled    
*➠* ${prefix}3dretro

*_Image📸 Maker_*
*➠* ${prefix}wanted 
*➠* ${prefix}utatoo
*➠* ${prefix}unsharpen    
*➠* ${prefix}thanos    
*➠* ${prefix}sniper    
*➠* ${prefix}sharpen     
*➠* ${prefix}sepia     
*➠* ${prefix}scary    
*➠* ${prefix}rip    
*➠* ${prefix}redple     
*➠* ${prefix}rejected    
*➠* ${prefix}posterize    
*➠* ${prefix}ps4     
*➠* ${prefix}pixelize    
*➠* ${prefix}missionpassed    
*➠* ${prefix}moustache    
*➠* ${prefix}lookwhatkarenhave   
*➠* ${prefix}jail     
*➠* ${prefix}invert    
*➠* ${prefix}instagram    
*➠* ${prefix}greyscale    
*➠* ${prefix}glitch    
*➠* ${prefix}gay     
*➠* ${prefix}frame    
*➠* ${prefix}fire    
*➠* ${prefix}distort     
*➠* ${prefix}dictator    
*➠* ${prefix}deepfry     
*➠* ${prefix}ddungeon     
*➠* ${prefix}circle     
*➠* ${prefix}challenger    
*➠* ${prefix}burn    
*➠* ${prefix}brazzers    
*➠* ${prefix}beautiful    
*➠* ${prefix}approved     
*➠* ${prefix}3000years    
 
*_Search🔎 Menu_*
*➠* ${prefix}lirik  ${feat("lirik")? yes :no}
*➠* ${prefix}grupwa ${feat("grupwa")? yes :no}
*➠* ${prefix}yts ${feat("yts")? yes :no}
*➠* ${prefix}whatmusic ${feat("whatmusic")? yes :no}
*➠* ${prefix}whatanime ${feat("whatanime")? yes :no}
*➠* ${prefix}google ${feat("google")? yes :no}
*➠* ${prefix}kbbi ${feat("kbbi")? yes :no}
*➠* ${prefix}weather ${feat("weather")? yes :no}
*➠* ${prefix}kodepos ${feat("kodepos")? yes :no}
*➠* ${prefix}brainly ${feat("brainly")? yes :no}
*➠* ${prefix}wallpaper ${feat("wallpaper")? yes :no}

*_Short🔗 Link_*
*➠* ${prefix}tinyurl ${feat("tinyurl")? yes :no}
*➠* ${prefix}bitly   ${feat("bitly")? yes :no}
*➠* ${prefix}tourl   ${feat("tourl")? yes :no}
 
*_Option💿_*
*➠* ${prefix}setprefix ${feat("setprefix")? yes :no}
*➠* ${prefix}setthumb ${feat("setthumb")? yes :no}
*➠* ${prefix}setppbot ${feat("setppbot")? yes :no}
*➠* ${prefix}setfakeimg ${feat("setfakeimg")? yes :no}
*➠* ${prefix}setimgreply ${feat("setimgreply")? yes :no}
*➠* ${prefix}setimginfo ${feat("setimginfo")? yes :no}
*➠* ${prefix}setreply ${feat("setreply")? yes :no}
*➠* ${prefix}setbio ${feat("setbio")? yes :no}
*➠* ${prefix}setgif ${feat("setgif")? yes :no}
*➠* ${prefix}setfakegif ${feat("setfakegif")? yes :no}
*➠* ${prefix}      
*➠* ${prefix}      
*➠* ${prefix}      
*➠* ${prefix}       

_Database Cmd📁_*
*➠* ${prefix}adderror    
*➠* ${prefix}addstik    
*➠* ${prefix}addvn    
*➠* ${prefix}delvn   
*➠* ${prefix}delstik    
*➠* ${prefix}clearallerror    
*➠* ${prefix}liststik
*➠* ${prefix}listerror
   
*_Islamic☪️_*
*➠* ${prefix}hadis    
*➠* ${prefix}alquran
*➠* ${prefix}tafsirsurah
*➠* ${prefix}
*➠* ${prefix}
*➠* ${prefix}
   
_Game🎮_*
*➠* ${prefix}math
*➠* ${prefix}
*➠* ${prefix}

*_Owner🔒 Menu_*
*➠* ${prefix}join ${feat("join")? yes :no}
*➠* ${prefix}bc ${feat("bc")? yes :no}
*➠* ${prefix}bcgc ${feat("bcgc")? yes :no}
*➠* ${prefix}setexif ${feat("setexif")? yes :no}
*➠* ${prefix}setlang ${feat("setlang")? yes :no}
*➠* ${prefix}react ${feat("react")? yes :no}
*➠* ${prefix}block ${feat("block")? yes :no}
*➠* ${prefix}unblock ${feat("unblock")? yes :no}
*➠* ${prefix}getcaze ${feat("getcaze")? yes :no}
*➠* ${prefix}getsesi ${feat("getsesi")? yes :no}
*➠* ${prefix}autolevel ${feat("autolevel")? yes :no}
*➠* > evalcode
*➠* => evalcode-2
*➠* $ / executor

   *╭─⦁ _Thanks To💞_*
   *│*
   *│* • Irfan Hariyanto
   *│* • Adiwajsingh(baileys)
   *│* • Dittaz
   *│* • Nina Kawai
   *│* • Resta Gamteng :v
   *│* • Zeeone Ofc
   *│* • Yudha Perdana
   *│* • Yogi PW
   *│* • Decode Denpa
   *│* • Fernazer
   *│* • X - Dev Team
   *│* • XChillDs & Yuzu
   *│* • Dika Ardnt
   *│*
   *╰─⦁*

`+'   _*Made with JavaScript*_'
}
  


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
