const user = require('./user');
const translator = require('./translator');

module.exports = {
    getMe({ common, translator }) {
        console.log(`GET /api/me`);

        if( common )  {              // 유저인 경우
            return { status: 200, data: common };
        }
        else if( translator )    {   // 통역사인 경우
            return { status: 200, data: translator };
        }
        else    {
            return { status: 404, message: "잘못된 토큰입니다." };
        }
    },

    modify(bindParams)  {
        console.log(`PUT /api/me`);

        if( bindParams.common )  {
            return user.modify(bindParams);
        }
        else if( bindParams.translator )    {
            return translator.modify(bindParams);
        }
        else    {
            return { status: 404, message: "잘못된 토큰입니다." };
        }
    },

    delete(bindParams)  {
        console.log(`DELETE /api/me`);

        if( bindParams.common )  {
            return user.delete(bindParams);
        }
        else if( bindParams.translator )    {
            return translator.delete(bindParams);
        }
        else    {
            return { status: 404, message: "잘못된 토큰입니다." };
        }
    }
}
