/*
    ____                  _
  / ___|__ _  __ _  __ _| |_ __ _ _   _
 | |   / _` |/ _` |/ _` | __/ _` | | | |
 | |__| (_| | (_| | (_| | || (_| | |_| |
  \____\__,_|\__, |\__,_|\__\__,_|\__, |
             |___/                |___/

 Thursday, July 21, 2016 9:39 PM 
 */
var leveros = require('leveros');

var client = new leveros.Client();
client.forceHost = process.env.LEVEROS_IP_PORT;
var service = client.service('dev.lever', 'helloService');
service.invoke('sayHello', "world", function (error, reply) {
    console.log(reply);  // Hello, world!
});
