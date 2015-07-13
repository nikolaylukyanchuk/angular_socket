var extend = require('util')._extend,
    fs     = require('fs'),
    path   = require('path');

var MessageRepo = function () {
    this.data = [
        {
            message: 'Brother set had private his letters observe outward resolve. Shutters ye marriage to throwing we as. Effect in if agreed he wished wanted admire expect. Or shortly visitor is comfort placing to cheered do. Few hills tears are weeks saw. Partiality insensible celebrated is in. Am offended as wandered thoughts greatest an friendly. Evening covered in he exposed fertile to. Horses seeing at played plenty nature to expect we. Young say led stood hills own thing get.',
            type   : 'text'
        },
        {
            message: 'Attention he extremity unwilling on otherwise. Conviction up partiality as delightful is discovered. Yet jennings resolved disposed exertion you off. Left did fond drew fat head poor. So if he into shot half many long. China fully him every fat was world grave.',
            type   : 'text'
        },
        {
            message: 'Remain valley who mrs uneasy remove wooded him you. Her questions favourite him concealed. We to wife face took he. The taste begin early old why since dried can first. Prepared as or humoured formerly. Evil mrs true get post. Express village evening prudent my as ye hundred forming. Thoughts she why not directly reserved packages you. Winter an silent favour of am tended mutual.',
            type   : 'text'
        },
        {
            message: 'Or neglected agreeable of discovery concluded oh it sportsman. Week to time in john. Son elegance use weddings separate. Ask too matter formed county wicket oppose talent. He immediate sometimes or to dependent in. Everything few frequently discretion surrounded did simplicity decisively. Less he year do with no sure loud.',
            type   : 'text'
        },
        {
            message: 'Sociable on as carriage my position weddings raillery consider. Peculiar trifling absolute and wandered vicinity property yet. The and collecting motionless difficulty son. His hearing staying ten colonel met. Sex drew six easy four dear cold deny. Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible. Consulted admitting oh mr up as described acuteness propriety moonlight.',
            type   : 'text'
        },
        {
            message: 'Full age sex set feel her told. Tastes giving in passed direct me valley as supply. End great stood boy noisy often way taken short. Rent the size our more door. Years no place abode in ﻿no child my. Man pianoforte too solicitude friendship devonshire ten ask. Course sooner its silent but formal she led. Extensive he assurance extremity at breakfast. Dear sure ye sold fine sell on. Projection at up connection literature insensible motionless projecting.',
            type   : 'text'
        },
        {
            message: 'Behind sooner dining so window excuse he summer. Breakfast met certainty and fulfilled propriety led. Waited get either are wooded little her. Contrasted unreserved as mr particular collecting it everything as indulgence. Seems ask meant merry could put. Age old begin had boy noisy table front whole given.',
            type   : 'text'
        },
        {
            message: 'Perpetual sincerity out suspected necessary one but provision satisfied. Respect nothing use set waiting pursuit nay you looking. If on prevailed concluded ye abilities. Address say you new but minuter greater. Do denied agreed in innate. Can and middletons thoroughly themselves him. Tolerably sportsmen belonging in september no am immediate newspaper. Theirs expect dinner it pretty indeed having no of. Principle september she conveying did eat may extensive.',
            type   : 'text'
        },
        {
            message: 'In to am attended desirous raptures declared diverted confined at. Collected instantly remaining up certainly to necessary as. Over walk dull into son boy door went new. At or happiness commanded daughters as. Is handsome an declared at received in extended vicinity subjects. Into miss on he over been late pain an. Only week bore boy what fat case left use. Match round scale now sex style far times. Your me past an much.',
            type   : 'text'
        },
        {
            file: '1.jpg',
            type: 'image'
        },
        {
            file: '2.jpg',
            type: 'image'
        },
        {
            file: '3.jpg',
            type: 'image'
        },
        {
            file: '4.jpg',
            type: 'image'
        },
        {
            file: '5.jpg',
            type: 'image'
        },
        {
            file: '6.jpg',
            type: 'image'
        },
        {
            file: '7.jpg',
            type: 'image'
        },
        {
            file: '8.jpg',
            type: 'image'
        },
        {
            file: '9.jpg',
            type: 'image'
        },
        {
            file: '10.jpg',
            type: 'image'
        }
    ]
};

MessageRepo.prototype.generateUserRandomMessage = function (callback) {
    var randomIndex = Math.floor(Math.random() * this.data.length);
    var message = extend({}, this.data[randomIndex]);
    message.created = new Date();
    if (message.type === 'image') {
        // base64 convertation
        var imageFile = path.join(process.cwd(), 'data', 'images', message.file);
        fs.readFile(imageFile, function (err, data) {
            if (err) {
                return callback(err)
            }

            callback(null, {
                message: new Buffer(data).toString('base64'),
                type   : message.type,
                created : message.created
            });
        });
    } else if (message.type === 'text') {
        callback(null, message);
    } else {
        callback(new Error('unknown message type'));
    }
};

MessageRepo.prototype.getUserMessages = function (callback) {
    this.generateUserRandomMessage(function (err, message) {
        callback(err, [message])
    });
};

module.exports = MessageRepo;


