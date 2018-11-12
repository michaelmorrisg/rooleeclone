const functions = require('firebase-functions');
const puppeteer = require('puppeteer')
const $ = require('cheerio')


exports.getInsta = functions.https.onRequest((req, res) => {
    var hello = "suuuuuup"
    return hello
    // var instaPhotos = []
    // return puppeteer.launch()
    // .then(function(browser){
    //     return browser.newPage();
    // })
    // .then(function(page){
    //     return page.goto(url).then(function(){
    //         return page.content()
    //     })
    //     .then(function(html){
    //         let tempArr = []
    //         $('img', html).each(function(){
    
    //             let test = $(this).attr('src')

    //                 tempArr.push(test)
    //             instaPhotos = tempArr
    //         })
    //         return instaPhotos
    //         })
    // })
  });
