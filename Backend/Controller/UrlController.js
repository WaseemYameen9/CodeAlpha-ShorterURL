const URL = require('../Model/url')
//import {nanoid} from 'nanoid';


function CreateShorterUrl(req,res)
{
    const {OUrl} = req.body
    const SUrl = "1234"
    URL.create({
        originalUrl: OUrl,
        shorterUrl: SUrl
    })
    const message ={
        url: "https://localhost:3000/"+SUrl
    }
    res.status(200).send(message)
}

async function ReturnOriginalUrl(req,res)
{
    const SUrl = req.params.shorterUrl;
    console.log(SUrl)
    const data = await URL.findOne({shorterUrl: SUrl})
    res.redirect(data.originalUrl)

}

module.exports = {
    CreateShorterUrl,
    ReturnOriginalUrl
}