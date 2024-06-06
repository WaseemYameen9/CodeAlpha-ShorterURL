const URL = require('../Model/url')
//import {nanoid} from 'nanoid';


async function CreateShorterUrl(req,res)
{
    const {OUrl} = req.body
    const { nanoid } = await import('nanoid');
    const SUrl = nanoid(8)
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
    const data = await URL.findOne({shorterUrl: SUrl})
    res.redirect(data.originalUrl)

}

module.exports = {
    CreateShorterUrl,
    ReturnOriginalUrl
}