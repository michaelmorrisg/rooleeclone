const express = require('express')
const bodyParser = require('body-parser')
const puppeteer = require('puppeteer')
const $ = require('cheerio')
const url = 'https://roolee.com'

const app = express()

app.use(bodyParser.json())

app.listen(3020, ()=>{
    console.log('listening on port 3020')
})


//Gets Instagram Images On Server Load

var instaPhotos = []

function getInstaPhotos(){
    puppeteer.launch({slowMo:2000})
.then(function(browser){
    return browser.newPage();
})
.then(function(page){
    return page.goto(url).then(function(){
        return page.content()
    })
    .then(function(html){
        let tempArr = []
        $('img', html).each(function(){

            let test = $(this).attr('src')
            if(test.includes('instagram')){

                let str1 = "https:"
                let newString = str1.concat(test)
                tempArr.push(newString)
            }
            instaPhotos = tempArr
        })
        })
})
}

getInstaPhotos()


//Updates Insta Photos every half hour

setInterval(getInstaPhotos,600000)



app.get('/api/insta', (req,res)=>{
    console.log(instaPhotos)
    res.status(200).send(instaPhotos)
        })
       



