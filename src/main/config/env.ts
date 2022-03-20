export default {
    mongoUrl: process.env.mongoUrl || 'mongodb+srv://m001-student:m001-student@sandbox.a20gi.mongodb.net/clean-node-api',
    port: process.env.PORT || 5050,
    jwtSecret: process.env.JWT_SECRET || 'tj67=Aswe'
}