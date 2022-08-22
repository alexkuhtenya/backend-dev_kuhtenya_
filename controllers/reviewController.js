const Review = require('../models/review')
const nodemailer = require('nodemailer')

class reviewController {

    constructor() {
        this.transporter = nodemailer.createTransport({
            host : process.env.SMTP_HOST,
            port : process.env.SMTP_PORT,
            secure:false,
            auth:{
                type: "OAuth2",
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        })
    }

    async addReview (req, res) {
        try{


            const {name, email , userReview,reply} = req.body
            const review = new Review({name , email , userReview,reply})
            await review.save()
            console.log('success')
            return res.json({review})
        } catch(e) {
            res.status(500).json(e.message)
            console.log(e);
        }
    }
    async addReply(req, res){
    try {
        const update = {reply: req.body.reply}
        const id = req.body._id
        Review.findByIdAndUpdate(id, update, err => {
            if (!err) {
                return res.status(200).json({message: "success"})
            } else {
                res.status(500).json(err.message)
            }
        })
    } catch(e){
        res.status(500).json({message:'Ошибка'})
    }
    }

    async delReview(req, res) {
        try{
            Review.findByIdAndRemove(req.body._id , err => {
                if (!err) {
                    res.status(200).json('отзыв успешно удален')
                } else {
                    res.status(500).json('ошибка при удалении отзыва')
                }
            })
        } catch(e) {
            console.log(e.message)
            res.status(500).json('ошибка при удалении отзыва')
        }
    }

    async getReview(req, res) {
    try{
        const review = await Review.find()
        res.json(review)
    } catch(e) {
        console.log(e)
    }
    }
}

module.exports = new reviewController()