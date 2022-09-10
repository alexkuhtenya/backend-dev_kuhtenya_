const Review = require('../../models/Review_model/review')
const nodemailer = require('nodemailer')
require('dotenv').config()

class ReviewController {


    async addReview (req, res) {
        try{
            const {name, email , userReview,reply} = req.body
            const review = new Review({name , email , userReview,reply})
            await review.save()
            console.log('success')
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                host: "smtp.gmail.com",
                port : 587,
                auth: {
                    user : 'kuhtenyabiznes@gmail.com' ,
                    pass: 'xenomorflingH',
                }
            });
            const  mailOptions ={
                from : 'kuhtenyabiznes@gmail.com',
                to : 'vladavseev47@gmail.com',
                subject: 'working',
                text: 'real ez'
            };
            transporter.sendMail(mailOptions,function(error, info){
                if (error) {
                    console.log(error)
                } else {
                    console.log('есть!')
                }
            })
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

    async changePub(req, res) {
        try{
            const update = {is_published: req.body.is_published}
            const id = req.body._id
            Review.findByIdAndUpdate(id , update , err => {
                if (!err) {
                    return res.status(200).json({message:'success'})
                } else {
                    res.status(500).json(err.message)
                }
            })
        } catch(e) {
            console.log(e)
        }
    }

    async isReview(req, res) {
        try {
            const review = await Review.find({is_published: true})
            res.json(review)
        }  catch (e) {
            console.log(e)
        }

    }
}

module.exports = new ReviewController()