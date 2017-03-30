const Promise = require('bluebird');
const request = require('request');
const config = require('../configuration/config');
const XmlReader = require('xml-reader');
const moment = require('moment');
const reader = XmlReader.create({
    stream: true
});

let nextDay = moment(moment().add(1, 'days')).format('DD');
module.exports = function(data) {
    return new Promise((resolve, reject) => {
        let raw = [];
        let status_for_work = [];
        let percent = 0;
        request(`http://api.openweathermap.org/data/2.5/forecast?q=${data},jamaica&mode=xml&appid=2faa2095d8040555742be1240afd40e8`, function(error, response, body) {
            if (error) {
                reject(error);
            } else {
           console.log('city: ' + `http://api.openweathermap.org/data/2.5/forecast?q=${data},jamaica&mode=xml&appid=2faa2095d8040555742be1240afd40e8`)
           console.log('forecast day: ' + nextDay)
                //reader.on('tag:clouds', (data) => console.log(data.attributes));
                reader.on('tag:time', (data) => {
                    let date = (data.attributes.from);
                    if ((moment(date).format('DD')) == nextDay) {
                        //only push if is the next day.
                        //console.log(data.children)
                        raw.push(data.children)
                    }
                    //raw.push();
                });
                reader.on('done', data => {
                    console.log(raw.length + " length")
                    for (var i = 0; i < raw.length; i++) {
                        let child = raw[i];

                        if (child[7].attributes.value === 'few clouds' || child[7].attributes.value  === 'rainy' || child[7].attributes.value  === 'scattered clouds' || child[7].attributes.value  === 'broken clouds' || child[7].attributes.value  === 'overcast clouds') {

                            percent += 1;
                        }
                        //  console.log(child)
                        // for (var i = 0; i < child.length; i++) {
                        //   console.log(child[i].name)
                        //
                        // }

                    }
                    //  for (var i = 0; i < raw.length; i++) {
                    //        let child = raw[i].children;
                    //          for (var i = 0; i < child.length; i++) {
                    //             //if(child[i].name=== 'clouds'){
                    //             //  console.log(child[i])
                    //           //  }
                    //          }
                    //
                    //  }
                    resolve(percent)

                });
                reader.parse(body);


            }
        });

    });


};
