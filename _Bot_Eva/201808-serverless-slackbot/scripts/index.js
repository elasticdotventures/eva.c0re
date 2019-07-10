'use strict'
/**
 * Sample Script
 */



module.exports = bot => {

/*  // responds to any slash command
  bot.on('slash_command', payload => {

    //if (payloadMsg.channel_name == "bot_eva") {
      // dump the request only in the debug channel
      let payloadMsg = '```' + JSON.stringify(payload, null, 4) + '```'
      bot.reply(payload, {
        text: payloadMsg
      })
    //}

  })*/

  // responds to "johnagan" in a text
  bot.hears(/brianhorakh/, (payload, bot, match) => {
    let payloadMsg = '``` johnagan ' + JSON.stringify(payload, null, 4) + '```'

    bot.reply(payload, {
      text: payloadMsg
    })
  })

}
