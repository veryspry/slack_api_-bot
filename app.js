const createSlacker = require('slack-relayer');

console.log(process.env.SLACK_API_TOKEN);

 // returns the object just in case
const relayer = createSlacker({
    channel: 'weather_troll',
    token: process.env.SLACK_API_TOKEN,
    event: 'event-to-listen-for'
});

// console.log(process.emit);

process.emit()
