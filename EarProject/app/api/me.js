module.exports = {
    getMe(req, res) {
        console.log(`GET /api/me`);

        if( req.user )  {   // 유저인 경우
            res.json(req.user);    
        }
        if( req.translator )    {   // 통역사인 경우
            res.json(req.translator);
        }
    },
}