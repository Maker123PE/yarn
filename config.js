import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

//===={Welcome to script by vnshoop}======//

//======≠====Owner======≠=====≠≠==≠//
global.owner = [
['51902679067', '🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢', true],
]
global.mods = ['51902679067']
global.prems = ['51902679067']
//==========Info=========≈========//
global.nomorwa = '51902679067'
global.packname = '🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢'
global.author = '🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢'
global.namebot = '🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢'
global.wm = '🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢'
global.stickpack = '🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢'
global.stickauth = '🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢'
global.fotonya = 'https://telegra.ph/file/86d1346d2de92ef732ae6.jpg'
global.fotonya2 = `https://telegra.ph/file/86d1346d2de92ef732ae6.jpg`
//===≠≠≈===Global sosmed=============≠==//
global.sig = 'https://instagram.com/SysSolutions.peru'
global.syt = 'https://youtube.com/@SysSolutionsperu'
global.sgh = 'https://github.com/SysSolutions'
global.sgc = 'https://whatsapp.com/channel/0029VaEsxUbJP21BfklgZS3m'
//============Donasi&payment=========//
global.psaweria = '-'
global.ptrakterr = '-'
global.pdana = '083150418588'
//=============Info wait tunggu========//
global.wait = '_MEMPROSES_'
global.eror = '_Terjadi Kesalahan Coba Lagi Nanti_!'
global.multiplier = 69 
//======≠=======Global Apikey===========//
global.lol = 'haikalgans'
global.rose = 'Rs-Zeltoria'
global.xyro = 'isi apikey mu'
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
    popcat : 'https://api.popcat.xyz'
}
//=============Global Apikey============//
global.APIKeys = {
    "https://api.xyroinee.xyz": "apikeymu", 
}
//============Jngan Di Ubah===========//
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
