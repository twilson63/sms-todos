const twilio = require('twilio')
const client = new twilio(process.env.SID, process.env.TOKEN)

module.exports = msg => {
  client.messages.create(msg)
}
