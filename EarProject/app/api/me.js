const user = require('./user');
const translator = require('./translator');

module.exports = {
    getMe(req, res) {
        console.log(`GET /api/me`);

        if( req.user.common )  {   // 유저인 경우
            return res.json(req.user.common);    
        }
        if( req.user.translator )    {   // 통역사인 경우
            return res.json(req.user.translator);
        }
    },

    modify(req, res)  {
        console.log(`PUT /api/me`);

        if( req.user.common )  {
            return user.modify(req, res);
        }
        if( req.user.translator )  {
            return translator.modify(req, res);
        }
    },

    delete(req, res)  {
        console.log(`DELETE /api/me`);

        if( req.user.common )  {
            return user.delete(req, res);
        }
        if( req.user.translator )  {
            return translator.delete(req, res);
        }
    }
}
