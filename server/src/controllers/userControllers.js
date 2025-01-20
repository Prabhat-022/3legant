import jwt from 'jsonwebtoken';
import { uploadOnCloudinary } from '../utils/cloudinary.js';
import bcrypt from 'bcryptjs'
import { User } from '../models/userModel.js'

export const Login = async (req, res) => {
    try {
        const { userName, email, password } = req.body;

        // Validate that either userName or email is provided, and password is required
        if (!password) {
            return res.status(400).json({
                message: "Password is required",
                success: false
            });
        }

        if (!userName && !email) {
            return res.status(400).json({
                message: "Either username or email is required",
                success: false
            });
        }

        const user = await User.findOne({ $or: [{ email }, { userName }] });

        if (!user) {
            return res.status(401).json({
                message: "Invalid credentials",
                success: false
            });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            return res.status(401).json({
                message: "Invalid credentials",
                success: false
            });
        }

        const tokenData = {
            userId: user._id
        }

        const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });

        const userResponse = {
            _id: user._id,
            fullName: user.fullName,
            userName: user.userName,
            email: user.email,
            avatar: user.avatar

        };

        return res.status(200)
            .cookie("token", token, {
                maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
                httpOnly: true,
                sameSite: 'strict'
            })
            .json({
                message: "Login successful",
                success: true,
                token,
                user: userResponse
            });

    } catch (error) {
        console.log(`Login error: ${error}`);
        return res.status(500).json({
            message: "Login failed",
            success: false,
            error: error.message
        });
    }
}

export const Register = async (req, res) => {
    try {
        const { fullName, userName, email, password, role } = req.body;

        console.log("req.body: ", req.body);

        // Validate all required fields
        if (!fullName || !email || !userName || !password) {
            return res.status(400).json({
                message: "All fields are required",
                success: false
            });
        }

        // Check if user exists with either email or userName
        const existingUser = await User.findOne({
            $or: [{ email }, { userName }]
        });

        if (existingUser) {
            return res.status(400).json({
                message: existingUser.email === email ? "Email already in use" : "Username already taken",
                success: false
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            fullName,
            userName,
            email,
            password: hashedPassword,
            role
        });

        console.log('create newUser: ', newUser);

        return res.status(201).json({
            message: "Account created successfully",
            success: true,
            newUser
        });

    } catch (error) {
        console.log(`Account not created: ${error}`);

        return res.status(500).json({
            message: "Account creation failed",
            success: false,
            error: error.message
        });
    }
};



export const logOut = async (req, res) => {
    try {
        return res.status(200)
            .cookie("token", "", {
                maxAge: 0,
                httpOnly: true,
                sameSite: 'strict'
            })
            .json({
                message: "Logged out successfully",
                success: true
            });
    } catch (error) {
        console.log(`Logout failed: ${error}`);
        return res.status(500).json({
            message: "Logout failed",
            success: false,
            error: error.message
        });
    }
}  
