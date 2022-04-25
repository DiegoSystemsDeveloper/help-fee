import jwt from 'jsonwebtoken'
import User from '../models/user.js';

const isAuth = async(req, res, next) => {
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")

    ) {
        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = await jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.id).select('-password -confirmado -token -createdAt -updatedAt -__v')
            return next()
        } catch (error) {
            return res.status(401).json({ msg: 'hubo un error' })
        }
    }
    if (!token) {
        const error = new Error('Token invalido')
        res.status(401).json({ msg: error.message })
    }
    next()

}

export default isAuth