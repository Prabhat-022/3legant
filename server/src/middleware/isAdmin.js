import jwt from 'jsonwebtoken';

const isAdmin = async (req, res, next) => {

    const token = req.cookies?.token || req.header("Authorization")?.replace("Bearer ", "")

    if (!token) return res.status(401).json({
        error: 'Access denied'
    })

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);

        if(decode.role !== 'admin'){
            return res.status(403).json({
                error: 'Forbidden'
            })
        }

        next();
    } catch (error) {
        res.status(401).json({
            error: 'Invalid token'
        })

    }
}

export default isAdmin;