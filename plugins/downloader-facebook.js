import fetch from  'node-fetch'

let handler = async (m, { conn, command, text, usedPrefix }) => {
	if (!text) throw `Masukan Linknya\nExample; ${usedPrefix}${command} https://www.facebook.com/reel/1404874153801488?mibextid=VqkefZtyiaKY4pB6`
	m.reply(wait)
	await conn.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}
  })  
	try {
	let res = await fetch(`https://api.xyroinee.xyz/api/downloader/facebook?url=${text}&apikey=${global.xyro}`)
  let result = await res.json()
  let video = result.data.video_hd
  let audio = result.data.audio
  let cap = `_Nih Kak Videonya_`
  conn.sendMessage(m.chat, { video: { url: video }, caption: cap }, m)
  conn.sendMessage(m.chat, { audio: { url: audio }, mimetype: 'audio/mp4' }, { quoted : m })
  } catch (e) {
m.reply(`Terjadi Kesalahan, Tidak Dapat Mengambil Data Dari Url/Link Yang Kamu Masukan`)
}
}
handler.help = ['facebook']
handler.tags = ['downloader']
handler.command = /^(facebook|fbdl|fb|facebookdl)$/i
handler.limit = true

export default handler
