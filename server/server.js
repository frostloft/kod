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
    db.collection(config.mongodb.collection);
    db.createIndex({ "topic": 1 });

    client.on('message', function (topic, message) {
        var messageObject = {
            topic: topic,
            message: message.toString()
        };
        db.collection.insert(messageObject, function(error, result) {
            if(error != null) {
                console.log("ERROR: " + error);
            }
        });
    });
});


/*var mongodb = require('mongodb')
var mqtt = require('mqtt')

var mqttUri = 'mqtt://iot.eclipse.org'
var mongoUri = 'mongodb://localhost:27017'
var client = mqtt.connect(mqttUri);

client.on('connect', function() {
    client.subscribe('Topic07')
    console.log('Has been successfully subscribed')
})

    var dbName = 'dbname'
mongodb.MongoClient.connect(mongoUri, function(error, client) {
    if(error != null) {
        throw error
    }
    console.log("connected to server")
    var db = client.db(dbName)

    const note = { text: 'some text', title: 'sometitle' };
    db.collection('dbcollection').insert(note, (err, result) => {
        if (err) {
            console.log('ooops')
        } else {
            console.log(result.ops[0]);
        }
        console.log("got it")
    })
    /*
    var collection = dbname.collection('dbcollection');
    collection.createIndex({"topic":1})

    client.on('message', function(topic, message) {
        var messageObject = {
            topic: topic,
            message: message.ToString()
        };

        collection.insert(messageObject, function(error, result) {
            if(error != null) {
                console.log("ERROR:" + error)
            }
        })
    })

})*/