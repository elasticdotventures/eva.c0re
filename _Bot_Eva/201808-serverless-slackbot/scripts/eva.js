'use strict'
/**
 * Sample Script
 */
const excuse = require('huh')




const
  AWS = require('aws-sdk'),
  debug = require('debug')('aws')

module.exports = bot => {

  // responds to any app_mention
  // app_mention
  bot.on('app_mention','slash_command', payload => {

      debug('ran APP_MENTION or SLASH')
      let payloadMsg = '``` APP_MENTION ' + JSON.stringify(payload, null, 4) + '```'
      bot.thread(payload, {
        text: payloadMsg
      })

  })



/*  // responds to any app_mention
  // app_mention
  bot.on('event_callback', payload => {
    debug('ran EVENT_CALLBACK')
    //if (payloadMsg.channel_name == "bot_eva") {
      // dump the request only in the debug channel
      let payloadMsg = '``` EVENT_CALLBACK ' + JSON.stringify(payload, null, 4) + '```'
      bot.reply('chat.postMessage', {
        thread_ts: payload.event.ts,
        text: "ran EVENT_CALLBACK"
      })
    //}
  })
*/


/*  "text": "``` APP_MENTION {\n    \"token\": \"yIbTdn5GXUfH1Id46j49mZyv\",\n    \"team_id\": \"T2R4CEY5B\",\n    \"api_app_id\": \"ABRMSTSGJ\",\n    \"event\": {\n        \"type\": \"app_mention\",\n        \"user\": \"U2R2P5ZJ7\",\n        \"text\": \"whats your excuse <@UBREMDABW>\",\n        \"client_msg_id\": \"9da5840a-7caf-48e7-9a04-0a48f2e52e25\",\n        \"ts\": \"1535088264.000100\",\n        \"channel\": \"C8TSF2859\",\n        \"event_ts\": \"1535088264.000100\"\n    },\n    \"type\": \"event_callback\",\n    \"event_id\": \"EvCEE7BRPU\",\n    \"event_time\": 1535088264,\n    \"authed_users\": [\n        \"UBREMDABW\"\n    ]\n}```"
*/

/*
  // responds to any app_mention
  // app_mention
  bot.on('event_callback', payload => {

    //if (payloadMsg.channel_name == "bot_eva") {
      // dump the request only in the debug channel
      let payloadMsg = '``` EVENT CALLBACK' + JSON.stringify(payload, null, 4) + '```'
      bot.reply(payload, {
        text: payloadMsg
      })
    //}

  })
*/
  // a test of running a function
  bot.hears(/\!([a-z]+)\s+/, (payload, bot, match) => {
  //  const excuse = require('huh');
  // let payloadmsg = '```' + excuse.get('en') + '```';

    var input = payload.event.text;

    var response = '';
    if (match == "!excuse") {
       response = excuse.get('en');
    }
    else if (match == "!excuses") {
      response = excuse.get('es');
    }
    else if (match == "!echo") {
      response = input;
    }

    if (response) {
      bot.reply(payload,{text: JSON.stringify(respose) })
    }
})



  // a test of running a function
  bot.hears(/excuse/, (payload, bot, match) => {
    //  const excuse = require('huh');
    // let payloadmsg = '```' + excuse.get('en') + '```';

    bot.reply(payload,{
      text: JSON.stringify(excuse.get('en')),
      attachments: [
        {image_url: 'https://d30g5rxy3ee0r1.cloudfront.net/wp-content/uploads/2017/11/7096776_by_Daniel87777_me.jpg'}
      ]
      })
  })

  // a random comment.
  bot.hears(/blabla/, (payload, bot, match) => {
    bot.thread(payload, {
      text: ":smile: sounds like jibber jabber to me."
    })
  })


}
