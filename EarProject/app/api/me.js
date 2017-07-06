const user = require('./user');
const translator = require('./translator');

module.exports = {
    getMe(req, res) {
        console.log(`GET /api/me`);

        if( req.user )  {   // 유저인 경우
            return res.json(req.user);    
        }
        if( req.translator )    {   // 통역사인 경우
            return res.json(req.translator);
        }
    },

    modify(req, res)  {
        console.log(`PUT /api/me`);

        if( req.user )  {
            return user.modify(req, res);
        }
        if( req.translator )  {
            return translator.modify(req, res);
        }
    },

    delete(req, res)  {
        console.log(`DELETE /api/me`);

        if( req.user )  {
            return user.delete(req, res);
        }
        if( req.translator )  {
            return translator.delete(req, res);
        }
    }
}