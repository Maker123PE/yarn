import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
await conn.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}
  })  
  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorwa}`, `VnShoop☂︎`, `Scripting God`, `Ponsel`, `VnShoop@gmail.com`, `Tokyo - Japan`, `https://youtube.com/@vinwert`, `another about Alvin`]
  ], m)
  }
//======={ubah info owner nya}========//
handler.help = ['owner', 'creator']
handler.tags = ['main']
handler.command = /^(owner|creator)/i
export default handler