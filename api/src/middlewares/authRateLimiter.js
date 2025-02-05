import rateLimit from 'express-rate-limit';

const authRateLimiter = rateLimit({
    windowMs: 2 * 60 * 1000,
    max: 5,
    message: "Too many requests from this IP, please try again after 2 minutes"
});

export default authRateLimiter;
