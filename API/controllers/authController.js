import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config();

const secret = process.env.JWT_SECRET;

export default class AuthController {
    /**
 *  creating a new token
 * @param {object} req request object
 * @return {object} returns an object as a response
 */
    static async checkToken(req) {
        try {
            const token = req.body.token || req.query.token ||
        req.headers.Authorization || req.headers['x-access-token'];
        if (!token) {
            throw new Error('No Token Provided');
        }
        const checked = await jwt.verify(token, secret);
        return checked;
    } catch (error) {
        throw new Error ('Invalid access token')
    }
}

/**
 * Middleware for protecting  user router using jwt
 * @param {object} req request object
 * @param {object} res response object
 * @param {function} next calls the next function
 * @return {object} returns an object as a response
 */

static async verifyUser(req, res, next) {
    try {
        const checkUser = await AuthController.checkToken(req);
        req.user = checkUser.user;
        next();
        return true;
    } catch (error) {
        return res.status(401).send({ 
            message: error.message
        });
    }
}
/**
 * Middleware for protecting caterer router using jwt
 * @param {object} req request object
 * @param {object} res response object
 * @param {function} next calls the next function
 * @return {object} returns an object as a response
 */
static async verifyCaterer(req, res, next) {
    try {
        const checkCaterer = await AuthController.checkToken(req);
        if (!checkCaterer.isCaterer) {
            throw new Error('Access Not Allowed');
        }
        req.caterer = checkCaterer.caterer;
        next();
        return true;
    } catch (error) {
        return res.status(401).send({
            message: error.message
        });
    }
}
}