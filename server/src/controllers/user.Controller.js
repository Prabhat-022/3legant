import { User } from "../model/user.Model.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
//update user info 
import { uploadOnCloudinary } from "../utils/cloudinary.js";

//user register
export const userRegister = async (req, res) => {
    try {

        //getting the input data from user to register 
        const { Fullname, email, username, password, role } = req.body;
        console.log('user data', req.body)

        //check the all input come properly or not 
        if (!Fullname || !email || !username || !password) {
            return res.status(400).json({
                message: "forget something, Please Enter all the data",
                success: false,

            })
        }

        // check user alredy exist or not 
        const existedUser = await User.findOne({
            $or: [{ username }, { email }]
        });

        if (existedUser) {
            return res.status(400).json({
                message: "Guys, your are already registed ok||",
                success: false,

            })
        }

        //convert password in hash
        const hashPassword = await bcrypt.hash(password, 10)


        //create the new users  
        const user = await User.create({
            Fullname,
            email,
            password: hashPassword,
            username: username.toLowerCase(),
            role
        })

        // set the token also 

        const token = jwt.sign(
            {
                userId: user._id,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '1d'
            }
        )

        //send the message for user 
        res.status(201).cookie("token", token, {
            maxAge: 1 * 24 * 60 * 1000,
            httpOnly: true,
            sameSite: 'strict'
        }).json({
            message: "-> wow, User Registerd successfully",
            success: true,
            user
        })



    } catch (error) {
        console.log('->user not Registerd', error);

        //send the message for user 
        res.status(400).json({
            message: "-> sorry, user not registered",
            success: false,
        })
    }

}


export const userLogin = async (req, res) => {

    try {
        //getting the input data form users 
        const { email, username, password } = req.body;

        console.log('data', req.body)

        //check the user data is coming or not 
        if (!email && !username || !password) {
            return res.status(400).json({
                message: "-> oho, can you please Enter all the data",
                success: false,

            })
        }
        // check user exist or not 
        const existedUser = await User.findOne({
            $or: [{ username }, { email }]
        });

        //check the password match or not 
        const isPasswordMatch = await bcrypt.compare(password, existedUser.password);

        //if user is not exist 
        if (!existedUser || !isPasswordMatch) {
            return res.status(400).json({
                message: "-> Invalid email or password",
                success: false,
            })
        }
        //extract data from the existing users
        const { _id, Fullname, role, address, paymentDetails, image } = existedUser;
        const options = {
            httpOnly: true,
            secure: true
        }


        const token = jwt.sign(
            {
                userId: existedUser._id,
                role: existedUser.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '1d'
            }
        )

        // if user find on the database the send successful respons to users 
        res.status(200).cookie("token", token, {
            maxAge: 1 * 24 * 60 * 1000,
            httpOnly: true,
            sameSite: 'strict'
        }, options).json({
            message: "-> wow, User login successful",
            success: true,
            token,
            user: {
                _id,
                Fullname,
                username,
                email,
                role,
                address,
                paymentDetails,
                image
            }
        })

    } catch (error) {
        //check on the terminal 
        console.log('->user not login');

        //send error to user, to check where is missing something 
        res.status(400).json({
            message: "->user not login",
            success: false
        })

    }

}
export const userLogOut = async (req, res) => {

    try {
        const options = {
            httpOnly: true,
            secure: true
        }

        return res
            .status(200)
            .clearCookie("token", options)
            .json({
                message: "user Logout successful",
                success: true
            })

    } catch (error) {

        console.log("user not logout", error)

        res.status(400).json({
            message: "user not logout, please try again",
            success: false
        })
    }

}



//get user details 
export const setProfilePicture = async (req, res) => {
    try {

        //take userid by token data 
        const profileImagePath = req.file.path;
        console.log('profileImagePath', profileImagePath)


        if (!profileImagePath) {
            return res.status(401).json({
                message: "ooho not found profileImagePath",
                success: false
            })
        }

        const ProfileImgUrl = await uploadOnCloudinary(profileImagePath)

        if (!ProfileImgUrl) {
            return res.status(401).json({
                message: "Not found ProfileImgUrl",
                success: false
            })
        }

        const user = await User.findById(req.user.userId)
        if (user) {
            user.image = ProfileImgUrl.url;


            await user.save()
        }

        if (!user) {
            res.status(400).json({
                message: "oho, Not found the user ",
                success: false,
            })
        }



        res.status(200).json({
            message: "Ok, update user profile successful",
            success: true,
            user
        })
    } catch (error) {

        console.log('fetching user details error', error)
        res.status(400).json({
            message: "Ooho, not update user profile data",
            success: true,
        })
    }


}

export const updateUserInformations = async (req, res) => {
    try {
        const { Firstname, Lastname, username, Fullname, email, phone, role } = req.body;

        const user = await User.findById(req.user.userId)

        if (user) {
            user.Fullname = Fullname;
            user.Firstname = Firstname;
            user.Lastname = Lastname;
            user.username = username.toLowerCase();
            user.email = email;
            user.phone = phone;
            user.role = role;
            await user.save()
        }

        if (!user) {
            res.status(400).json({
                message: "oho, User Data not found",
                success: true,
            })
        }
        res.status(200).json({
            message: "Ok, update user information successful",
            success: true,
            user
        })

    } catch (error) {
        console.log("This is the bad user Information can't update it", error)

        res.status(400).json({
            message: "User Information not updated",
            success: false
        })
    }
}

let serverOtp = '';

//send otp for forgot passwords 
export const generateOtp = (req, res) => {
    const characters = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    serverOtp = '';
    for (let i = 0; i < 6; i++) {
        serverOtp += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    res.status(200).json({
        message: "Otp send successful",
        success: true,
        serverOtp
    })
}

//opt verifications 
export const verifyOtp = (req, res, next) => {
    if (serverOtp === req.body.userOtp) {
        return res.status(200).json({
            message: "Otp verified successful",
            success: true
        })
        next()
    } else {
        res.status(400).json({
            message: "Invalid otp",
            success: false
        })
    }
}

export const forgotPassword = async (req, res) => {
    try {
        const { email, password, userOtp } = req.body;

        const user = await User.findOne({ email })

        if (!user) {
            res.status(400).json({
                message: "-> Invalid email or password",
                success: false,
            })
        }


        //convert password in hash
        const hashPassword = await bcrypt.hash(password, 10)
        user.password = hashPassword;

        await user.save();

        const token = jwt.sign({
            userId: user._id,
            role: user.role
        }, process.env.JWT_SECRET, {
            expiresIn: '1d'
        })

        res.status(200).cookie("token", token, {
            maxAge: 1 * 24 * 60 * 1000,
            httpOnly: true,
            secure: true
        }).json({
            message: "Ok, Password reset successfully",
            success: true
        })

    } catch (error) {
        console.log("-> Error in Password reset", error);
        res.status(400).json({
            message: "-> Error in Password reset",
            success: false,
            error
        })
    }

}

//set newslatter mail
export const setnewslatterEmail = async (req, res) => {
    try {
        const { newslatterEmail } = req.body;
        console.log('newslatterEmail', newslatterEmail)

        const user = await User.findOne({ _id: req.user.userId })

        //check user is exist or not
        if (!user) {
            return res.status(400).json({
                message: "-> User not found",
                success: false,
            })
        }

        //check newslatter email is empty or not
        if (!newslatterEmail) {
            return res.status(400).json({
                message: "-> Please enter your email",
                success: false,
            })
        }

        //check newslatter email is already exist or not
        if (user.newslatterEmail === newslatterEmail) {
            return res.status(400).json({
                message: "-> You are already subscribed",
                success: false,
            })
        }

        user.newslatterEmail = newslatterEmail;
        await user.save();

        res.status(200).json({
            message: "Thankyou for joining us",
            success: true,
            user
        })

    } catch (error) {
        console.log("Error in set newslatter email", error);
        return res.status(400).json({
            message: "Error in set newslatter email",
            success: false,
            error
        })
    }
}