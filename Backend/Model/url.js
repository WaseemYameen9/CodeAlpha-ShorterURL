const mongoose = require('mongoose')

const urlSchema = mongoose.Schema(
{
    originalUrl: String,
    shorterUrl: String

},{timestamps: true}
)

module.exports = mongoose.model('URL',urlSchema)