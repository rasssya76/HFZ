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

*_YOUR INFO_*
Nama : ${pushname}
Status : ${isPremium ? '🎫 Premium':'Free'}
Limit : ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}
Saldo : Rp ${balance}

_*TIME*_ 
Time : ${timeWib} WIB 
Time : ${timeWit} WIT 
Time : ${timeWita} WITA

_*BOT INFO*_
Running On : *${runWith}*
Mode : ${publik ? "Public" : "Self"}
Islamic : ${dateIslamic}
Hit Today : ${thisHit.toLocaleString()}
Total Feature : ${totalFitur()}
Total Error : ${JSON.parse(fs.readFileSync('./database/listerror.json')).length}
Total User : ${JSON.parse(fs.readFileSync('./database/user.json')).length.toLocaleString()}
User Banned : ${JSON.parse(fs.readFileSync('./database/banned.json')).length}
User Blocked : ${JSON.parse(fs.readFileSync('./database/userblocked.json')).length.toLocaleString()}
Cmd Blocked : ${JSON.parse(fs.readFileSync('./database/blockcmd.json')).length} 
`}

exports.fitur = (prefix) => {
return`
      𝘎𝘳𝘰𝘶𝘱 𝘔𝘦𝘯𝘶
  *➠*sewacek✓
  *➠*delchat✓
  *➠*antilink✓    
  *➠*antilinkgc✓   
  *➠*antivirtex✓
  *➠*antiasing✓
  *➠*infogc✓ ${feat("infogx")? yes :no}
  *➠*linkgc✓ ${feat("linkgc")? yes :no}
  *➠*setppgc✓ ${feat("setppgc")? yes :no}
  *➠*setnamegc✓ ${feat("setnamegc")? yes :no}
  *➠*setdesc✓ ${feat("setdesc")? yes :no}
  *➠*gc ${feat("gc")? yes :no}
  *➠* revoke✓ ${feat("revoke")? yes :no}
  *➠* hidetag✓ ${feat("hidetag")? yes :no}
  *➠* kick✓ ${feat("kick")? yes :no}
  *➠* add✓ ${feat("add")? yes :no}
  *➠* opentime✓ ${feat("opentime")? yes :no}
  *➠* closetime✓ ${feat("closetime")? yes :no}
  *➠* demote✓ ${feat("demote")? yes :no}
  *➠* promote✓ ${feat("promote")? yes :no}
  *➠* kickme✓ ${feat("kickme")? yes :no}
  *➠* banchat✓ ${feat("banchat")? yes :no}
  *➠* unbanchat✓ ${feat("unbanchat")? yes :no}
  *➠* ban✓ ${feat("ban")? yes :no}
  *➠* unban✓ ${feat("unban")? yes :no}
  *➠* listban✓ ${feat("listban")? yes :no}
  *➠* getppgc✓ ${feat("getppgc")? yes :no}
  *➠* getpp✓ ${feat("getpp")? yes :no}
  *➠* listonline✓ ${feat("lostoneline")? yes :no}
  
      𝘛𝘰𝘰𝘭𝘴
  *➠* readmore✓
  *➠* spotify
  *➠* ttp
  *➠* attp
  *➠* resize
  *➠* inspect
  *➠* kalkulator✓ ${feat("kalkulator")? yes :no}
  *➠* tr✓  ${feat("tr")? yes :no}
  *➠* volume✓ ${feat("volume")? yes :no}
  *➠* ss✓ ${feat("ss")? yes :no}
  *➠* speed✓  ${feat("speed")? yes :no}
  *➠* speedtest✓ ${feat("speedtest")? yes :no}
  *➠* runtime✓  ${feat("runtime")? yes :no}
  *➠* chat✓ ${feat("chat")? yes :no}
  *➠* rules✓ ${feat("rules")? yes :no}
  *➠* kontak✓ ${feat("kontak")? yes :no}  
  
      𝘙𝘢𝘯𝘥𝘰𝘮 𝘔𝘦𝘯𝘶
  *➠* wangy✓ ${feat("wangy")? yes :no}
  *➠* cecan✓ ${feat("cecan")? yes :no}
  *➠* cogan✓ ${feat("cogan")? yes :no}
  *➠* anime✓ ${feat("anime")? yes :no}
  *➠* loli✓ ${feat("loli")? yes :no}
  *➠* milf✓ ${feat("milf")? yes :no}
  *➠* husbu✓ ${feat("hubu")? yes :no}
  *➠* cosplay✓ ${feat("cosplay")? yes :no}
  *➠* wallml✓ ${feat("wallml")? yes :no}
  *➠* patrick✓ ${feat("patrick")? yes :no}
  *➠* gura✓ ${feat("gura")? yes :no}
  *➠* doge✓ ${feat("doge")? yes :no}
  *➠* wallpapers✓ ${feat("wallpapers")? yes :no}
  *➠* wallpapermobile✓ ${feat("wallpapermobile")? yes :no}
  
      𝘊𝘰𝘯𝘷𝘦𝘳𝘵𝘦𝘳
  *➠* toimg✓ ${feat("toimg")? yes :no}
  *➠* tomp3✓ ${feat("tomp3")? yes :no}
  *➠* tomp4✓ ${feat("tomp4")? yes :no}
  *➠* toptt✓ ${feat("toptt")? yes :no}
  *➠* togif✓ ${feat("togif")? yes :no}
  *➠* hode✓ ${feat("hode")? yes :no}
  *➠* ghost✓ ${feat("ghost")? yes :no}
  *➠* nightcore✓ ${feat("nightcore")? yes :no}
  *➠* tupai✓ ${feat("tupai")? yes :no}
  *➠* imut✓ ${feat("imut")? yes :no}
  *➠* emojiap✓ ${feat("emojiap")? yes :no}
  *➠* emojigo✓ ${feat("emojigo")? yes :no}
  *➠* emojisa✓ ${feat("emojisa")? yes :no}
  *➠* emojims✓ ${feat("emojims")? yes :no}
  *➠* emojiwa✓ ${feat("emojiwa")? yes :no}
  *➠* emojitw✓ ${feat("emojitw")? yes :no}
  *➠* emojifb✓ ${feat("emojifb")? yes :no}
  *➠* emojijp✓ ${feat("emojijp")? yes :no}
  *➠* emojiom✓ ${feat("emojiom")? yes :no}
  *➠* emojied✓ ${feat("emojied")? yes :no}
  *➠* emojimes✓ ${feat("emojimes")? yes :no}
  *➠* emojilt✓ ${feat("emojilt")? yes :no}
  *➠* emojimo✓ ${feat("emojimo")? yes :no}
  *➠* emojimix✓ ${feat("emojimix")? yes :no}
  
      𝘚𝘵𝘪𝘤𝘬𝘦𝘳
  *➠* sticker✓ ${feat("s")? yes :no}
  *➠* smeme✓ ${feat("smeme")? yes :no}
  *➠* triggered✓ ${feat("triggered")? yes :no}
  *➠* wasted✓ ${feat("wasted")? yes :no}
  *➠* comrade✓ ${feat("comrade")? yes :no}
  *➠* horny✓ ${feat("horny")? yes :no}
  *➠* blur✓ ${feat("blur")? yes :no}
  *➠* pixelate✓ ${feat("pixelate")? yes :no}
  *➠* simpcard✓ ${feat("simpcard")? yes :no}
  *➠* lolice✓ ${feat("lolice")? yes :no}
  *➠* glass✓ ${feat("glass")? yes :no}
  *➠* take✓ ${feat("take")? yes :no}

      𝘋𝘰𝘸𝘯𝘭𝘰𝘢𝘥𝘦𝘳
  *➠* play ✓ ${feat("play")? yes :no}
  *➠* playmusic ✓ ${feat("playmusic")? yes :no}
  *➠* ig ✓ ${feat("ig")? yes :no}
  *➠* gimage✓ ${feat("gimage")? yes :no}
  *➠* tiktok ${feat("tiktok")? yes :no}
  *➠* tiktokmusic✓ ${feat("tiktokmusik")? yes :no}
  *➠* tiktoknowm✓ ${feat("tiktoknowm")? yes :no}
  *➠* pinterest✓ ${feat("pinterest")? yes :no}
  *➠* spotify✓ ${feat("spotify")? yes :no}
  *➠* twitterdl✓ ${feat("twitterdl")? yes :no}
  *➠* get✓ ${feat("get")? yes :no}
  *➠* mediafire✓ ✓ ${feat("mediafire")? yes :no}
  *➠* githubdl✓ ${feat("githubdl")? yes :no}
  *➠* gitclone ✓ ${feat("gitclone")? yes :no}
  *➠* igstory ${feat("igstory")? yes :no}
  *➠* ytmp4✓ ${feat("ytmp4")? yes :no}
  *➠* ytmp3✓ ${feat("ytmp3")? yes :no}
 
  
      𝘐𝘮𝘢𝘨𝘦 𝘔𝘢𝘬𝘦𝘳
  *➠* wanted✓ 
  *➠* utatoo✓
  *➠* unsharpen✓    
  *➠* thanos✓    
  *➠* sniper✓    
  *➠* sharpen✓     
  *➠* sepia✓     
  *➠* scary✓    
  *➠* rip✓    
  *➠* redple✓     
  *➠* rejected✓    
  *➠* posterize✓    
  *➠* ps4✓     
  *➠* pixelize✓    
  *➠* missionpassed✓    
  *➠* moustache✓    
  *➠* lookwhatkarenhave✓   
  *➠* jail✓     
  *➠* invert✓    
  *➠* instagram✓    
  *➠* greyscale✓    
  *➠* glitch✓    
  *➠* gay✓     
  *➠* frame✓    
  *➠* fire✓    
  *➠* distort✓     
  *➠* dictator✓    
  *➠* deepfry✓     
  *➠* ddungeon✓     
  *➠* circle✓     
  *➠* challenger✓    
  *➠* burn✓    
  *➠* brazzers✓    
  *➠* beautiful✓    
  *➠* approved✓     
  *➠* 3000years✓    
 
      𝘚𝘦𝘢𝘳𝘤𝘩 𝘔𝘦𝘯𝘶
  *➠* lirik ✓ ${feat("lirik")? yes :no}
  *➠* grupwa✓ ${feat("grupwa")? yes :no}
  *➠* yts✓ ${feat("yts")? yes :no}
  *➠* whatmusic✓ ${feat("whatmusic")? yes :no}
  *➠* whatanime✓ ${feat("whatanime")? yes :no}
  *➠* google✓ ${feat("google")? yes :no}
  *➠* kbbi✓ ${feat("kbbi")? yes :no}
  *➠* weather✓ ${feat("weather")? yes :no}
  *➠* kodepos✓ ${feat("kodepos")? yes :no}
  *➠* brainly✓ ${feat("brainly")? yes :no}
  *➠* wallpaper✓ ${feat("wallpaper")? yes :no}
  *➠* quotes✓ ${feat("quotes")? yes :no}
  *➠* song✓ ${feat("song")? yes :no}
   
       𝘚𝘩𝘰𝘳𝘵 𝘜𝘳𝘭
  *➠* tinyurl✓ ${feat("tinyurl")? yes :no}
  *➠* bitly  ✓ ${feat("bitly")? yes :no}
  *➠* tourl ✓  ${feat("tourl")? yes :no}
 
       𝘚𝘦𝘵𝘵𝘪𝘯𝘨 𝘉𝘰𝘵
  *➠* setprefix✓ ${feat("setprefix")? yes :no}
  *➠* setthumb✓ ${feat("setthumb")? yes :no}
  *➠* setppbot✓ ${feat("setppbot")? yes :no}
  *➠* setfakeimg✓ ${feat("setfakeimg")? yes :no}
  *➠* setimgreply✓ ${feat("setimgreply")? yes :no}
  *➠* setimginfo✓ ${feat("setimginfo")? yes :no}
  *➠* setreply✓ ${feat("setreply")? yes :no}
  *➠* setbio✓ ${feat("setbio")? yes :no}
  *➠* setgif✓ ${feat("setgif")? yes :no}
  *➠* setfakegif✓ ${feat("setfakegif")? yes :no}      

       𝘚𝘵𝘰𝘳𝘢𝘨𝘦   
  *➠* adderror✓    
  *➠* addstik✓    
  *➠* addvn✓    
  *➠* delvn✓   
  *➠* delstik✓    
  *➠* clearallerror✓    
  *➠* liststik✓
  *➠* listerror✓
  *➠* listsewa✓
   
       𝘐𝘴𝘭𝘢𝘮𝘪𝘤   
  *➠* hadis✓    
  *➠* alquran✓
  *➠* tafsirsurah✓
  
       Fun Menu
  *➠* cariteman✓
  *➠* cekbapak✓
  *➠* truth✓
  *➠* dare✓
  *➠* katailham✓
  *➠* bucin✓
  *➠* bisakah✓
  *➠* kapankah✓
  *➠* apakah✓
  *➠* bagaimanakah✓
  *➠* goblokcek✓
  *➠* gaycek✓
  *➠* jelekcek✓
  *➠* rate✓
  *➠* lesbicek✓
  *➠* gantengcek✓
  *➠* cantikcek✓
  *➠* begocek✓
  *➠* suhucek✓
  *➠* pintercek✓ 
  *➠* jagocek✓
  *➠* nolepcek✓ 
  *➠* babicek✓
  *➠* bebancek✓ 
  *➠* baikcek✓
  *➠* jahatcek✓ 
  *➠* haramcek✓
  *➠* anjingcek✓ 
  *➠* pakboycek✓
  *➠* pakgirlcek✓ 
  *➠* sangecek✓
  *➠* bapercek✓
  *➠* alimcek✓
  *➠* suhucek✓
  *➠* kerencek✓ 
  *➠* wibucek✓
  *➠* pasarkascek✓ 
  *➠* hilih✓
  *➠* halah✓
  *➠* huluh✓
  *➠* heleh✓
  *➠* holoh✓
  
      𝘛𝘢𝘨 𝘔𝘦𝘯𝘶
  *➠* ${prefix}ngewe✓ ${feat("ngewe")? yes :no}
  *➠* ${prefix}memek✓ ${feat("memek")? yes :no}
  *➠* ${prefix}bego✓ ${feat("bego")? yes :no}
  *➠* ${prefix}goblok✓ ${feat("goblok")? yes :no}
  *➠* ${prefix}janda✓ ${feat("janda")? yes :no}
  *➠* ${prefix}perawan✓ ${feat("perawan")? yes :no}
  *➠* ${prefix}babi✓ ${feat("babi")? yes :no}
  *➠* ${prefix}tolol✓ ${feat("tolol")? yes :no}
  *➠* ${prefix}pinter✓ ${feat("pinter")? yes :no}
  *➠* ${prefix}pintar✓ ${feat("pintar")? yes :no}
  *➠* ${prefix}asu✓ ${feat("asu")? yes :no}
  *➠* ${prefix}bodoh✓ ${feat("bodoh")? yes :no}
  *➠* ${prefix}gay✓ ${feat("gay")? yes :no}
  *➠* ${prefix}lesby✓ ${feat("lesby")? yes :no}
  *➠* ${prefix}bajingan✓ ${feat("bajingan")? yes :no}
  *➠* ${prefix}jancok✓ ${feat("jancok")? yes :no}
  *➠* ${prefix}anjing✓ ${feat("anjing")? yes :no}
  *➠* ${prefix}ngentod✓ ${feat("ngentod")? yes :no}
  *➠* ${prefix}ngentot✓ ${feat("ngentot")? yes :no}
  *➠* ${prefix}monyet✓ ${feat("monyet")? yes :no}
  *➠* ${prefix}mastah✓ ${feat("mastah")? yes :no}
  *➠* ${prefix}newbie✓ ${feat("newbie")? yes :no}
  *➠* ${prefix}bangsat✓ ${feat("bangsat")? yes :no}
  *➠* ${prefix}bangke✓ ${feat("bangke")? yes :no}
  *➠* ${prefix}sange✓ ${feat("sange")? yes :no}
  *➠* ${prefix}sangean✓ ${feat("sangean")? yes :no}
  *➠* ${prefix}dakjal✓ ${feat("dakjal")? yes :no}
  *➠* ${prefix}horny✓ ${feat("horny")? yes :no}
  *➠* ${prefix}wibu✓ ${feat("wibu")? yes :no}
  *➠* ${prefix}puki✓ ${feat("puki")? yes :no}
  *➠* ${prefix}pantex✓ ${feat("pantex")? yes :no}
  *➠* ${prefix}pantek✓ ${feat("pantek")? yes :no} 
  *➠* ${prefix}jadian✓ ${feat("jadian")? yes :no} 
  
       𝘎𝘢𝘮𝘦
  *➠* math 
 
       Rpg
  *➠* nambang
  *➠* berburu
  *➠* mancing
  *➠* inventori
  *➠* heal
  *➠* jual
  *➠* beli
  *➠* leaderboard
  *➠* 
 
       𝘈𝘯𝘰𝘯𝘺𝘮𝘰𝘶𝘴 𝘊𝘩𝘢𝘵
  *➠* anonymous
  *➠* menfess
  *➠* start
  *➠* startchat
  *➠* keluar
  *➠* next
  *➠* sendkontak
  *➠* invite
  *➠* joinchat

       𝘌𝘯𝘤𝘳𝘺𝘱𝘵
  *➠* obfus
  *➠* deobfus
  *➠* packer

       𝘋𝘢𝘵𝘢𝘣𝘢𝘴𝘦
  *➠* rank
  *➠* addowner
  *➠* addcmdowner
  *➠* addcmdlimit
  *➠* addcmdprem
  *➠* listowner
  *➠* listcmdowner
  *➠* listcmdlimit
  *➠* listcmdprem
  *➠* clearalluser
  *➠* listsewa
  *➠* givesaldo
  *➠* givelimit
  *➠* kurangsaldo
  *➠* kuranglimit  
  *➠* addexp
  *➠* kurangexp
  
       𝘖𝘸𝘯𝘦𝘳 𝘔𝘦𝘯𝘶
  *➠* join✓ ${feat("join")? yes :no}
  *➠* bc ${feat("bc")? yes :no}
  *➠* bcgc✓ ${feat("bcgc")? yes :no}
  *➠* setexif✓ ${feat("setexif")? yes :no}
  *➠* setlang✓ ${feat("setlang")? yes :no}
  *➠* react✓ ${feat("react")? yes :no}
  *➠* block✓ ${feat("block")? yes :no}
  *➠* unblock✓ ${feat("unblock")? yes :no}
  *➠* addsewa✓ ${feat("addsewa")? yes :no}
  *➠* getcase✓ ${feat("getcaze")? yes :no}
  *➠* autolevel✓ ${feat("autolevel")? yes :no}
  *➠* listpc✓ ${feat("listpc")? yes :no}
  *➠* listgc✓ ${feat("listgc")? yes :no}
  *➠* delchat✓ ${feat("delchat")? yes :no}
  *➠*  > evalcode
  *➠*  => evalcode2
  *➠*  $ executor
   
   ╭─▸ 𝘛𝘩𝘢𝘯𝘬𝘴 𝘵𝘰
   │
   │ • Irfan Hariyanto
   │ • Dittaz
   │ • Nina Kawai
   │ • Resta Gamteng :v
   │ • Zeeone Ofc
   │ • Yudha Perdana
   │ • Yogi PW
   │ • Paro
   │ • Fernazer
   │ • Irpan tod
   │ • X - Dev Team
   │ • XChillDs & Yuzu
   │ • Dika Ardnt
   │
   ╰────────────˧

`+'   𝘗𝘰𝘸𝘦𝘳𝘦𝘥 𝘉𝘺 𝘑𝘢𝘷𝘢𝘚𝘤𝘳𝘪𝘱𝘵'
}
  


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
