const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;Ndaa:3;;;'
                    + 'FN:Ndaa:3\n' // full name
                    + 'ORG:Owner YukiBot;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6288220118685:+6288220118685\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Ndaa SYG', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
