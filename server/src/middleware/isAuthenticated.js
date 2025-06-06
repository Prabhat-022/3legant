import jwt from 'jsonwebtoken';

const authenticate = async (req, res, next) => {


    const token = req.cookies?.token || req.header("Authorization")?.replace("Bearer ", "")
    console.log('token', token)

    if (!token) return res.status(401).json({
        error: 'Access denied'
    })

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        console.log('decode', decode)
        req.user = decode;
        console.log("authenticate successfully ")
        next();
    } catch (error) {
        res.status(401).json({
            error: 'Invalid token'
        })

    }
}

export default authenticate;