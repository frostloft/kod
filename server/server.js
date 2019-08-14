const mongodb  = require('mongodb');
const config   = require('./config');
const mqtt = require('mqtt');

let host = 'mqtt://85.12.197.201:1883';
let username = 'listener';
let password = 'aiXoN7mi';

let mqttClient = mqtt.connect(host, { username: username, password: password });

mqttClient.on('error', (err) => {
    console.log(err);
    this.mqttClient.end();
});

mqttClient.on('connect', () => {
    console.log(`mqtt client connected`);
});

mqttClient.subscribe('application/#', { qos: 0 });

// When a message arrives, console.log it
mqttClient.on('message', function (topic, message) {
    console.log(message.toString());
});

mqttClient.on('close', () => {
    console.log(`mqtt client disconnected`);
});


var mongoUri = 'mongodb://' + config.mongodb.hostname + ':' + config.mongodb.port + '/' + config.mongodb.database;
mongodb.MongoClient.connect(mongoUri, function(error, client) {
    if(error != null) {
        throw error;
    }
    console.log("MongoClient connected")
    var db = client.db('appdb')
    //var collection = client.collection(config.mongodb.collection)
    db.collection(config.mongodb.collection).createIndex({ "topic": 1 });

    client.on('message', function (topic, message) {
        console.log("got object")
        var messageObject = {
            topic: topic,
            message: message.toString()
        };
        console.log("got object")
        db.collection.insert(messageObject, function(error, result) {
            if(error != null) {
                console.log("ERROR: " + error);
            }
            else {
                console.log(result)
            }
        });
    });
    console.log('hello bl')
});
