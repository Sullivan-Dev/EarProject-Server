module.exports = {
    getMe(req, res) {
        console.log(`GET /api/me`);
        res.json(req.user);
    },
}