module.exports = {
    getMe(req, res) {
        console.log(`GET /api/me`);
        console.log(req.user);
    },
}