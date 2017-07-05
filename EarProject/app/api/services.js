const { Service } = require('../../data');

module.exports = {
    get(req, res)  {
        console.log(`GET /api/district`);

        Service
        .findAll({
            where: { },
        })
        .then((reply) => {
            return res.json({services: reply});
        });
    },

    find(req, res)  {
        console.log(`GET /api/district/find`);

        const uid = req.query.uid;
        const tid = req.query.tid;

        // 유저 id와 통역사 id로 검색하는 경우
        if( uid && tid )    {
            Service
            .findAll({
                where: { uid: uid, tid: tid },
            })
            .then((reply) => {
                return res.json({services: reply});
            });
        }
        // 유저 id로 검색하는 경우
        if( uid )   {
            Service
            .findAll({
                where: { uid: uid },
            })
            .then((reply) => {
                return res.json({services: reply});
            });
        }
        // 통역사 id로 검색하는 경우
        if( tid )   {
            Service
            .findAll({
                where: { tid: tid },
            })
            .then((reply) => {
                return res.json({services: reply});
            });
        }
    },

    add(req, res)  {
        console.log(`POST /api/district`);

        const { uid, tid, status, date, start, end, location, purpose, inquiry } = req.body;
        console.log(uid, tid, status, date, start, end, location, purpose, inquiry); 

        Service
        .create({
            uid: uid,
            tid: tid,
            status: status,
            date: date,
            start: start,
            end: end,
            location: location,
            purpose: purpose,
            inquiry: inquiry
        })
        .then(() => {
            res.json({ message: '등록되었습니다..'});
        });
    },

    modify(req, res)  {
        console.log(`PUT /api/district`);

        const { sid, uid, tid, status, date, start, end, location, purpose, inquiry } = req.body;
        console.log(uid, tid, status, date, start, end, location, purpose, inquiry); 

        Service
        .update({
            uid: uid,
            tid: tid,
            status: status,
            date: date,
            start: start,
            end: end,
            location: location,
            purpose: purpose,
            inquiry: inquiry
        }, {
            where: { sid: sid },
        })
        .then(() => {
            res.json({ message: '변경되었습니다..'});
        });
    },

    delete(req, res)  {
        console.log(`DELETE /api/district`);

        const { sid } = req.body;

        Service
        .destroy({
            where: { sid: sid },
        })
        .then(() => {
            res.json({ message: '삭제되었습니다.'});
        });
    }
}