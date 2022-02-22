export default {
    mongoUrl: process.env.mongoUrl || 'mongodb://localhost:27017/clean-node-api',
    port: process.env.PORT || 5050,
    jwtSecret: process.env.JWT_SECRET || 'tj67=Aswe'
}