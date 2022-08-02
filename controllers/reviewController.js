const Review = require('../models/review')
const Actions = require("../models/actions");
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
            const {Name, email , userReview} = req.body
            const review = new Review({Name , email , userReview})
            await review.save()
            let mailOptions = {
                from: process.env.SMTP_USER,
                to: email,
                subject: '',
                text: 'Спасибо за оставленый отзыв!'
            };
           await transporter.sendMail(mailOptions, function(err, data) {
                if (err) {
                    console.log("Error " + err);
                } else {
                    console.log("Email sent successfully");
                }
            });
            console.log('success')
            return res.json({review})
        } catch(e) {
            res.status(500).json(e.message)
            console.log(e);
        }
    }
}

module.exports = new reviewController()