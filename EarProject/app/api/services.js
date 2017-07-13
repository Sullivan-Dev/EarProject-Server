const { Service } = require('../../data');

module.exports = {
    get(req, res)  {
        console.log(`GET /api/services/sid`);

        return Service
        .findAll({
            where: { },
        })
        .then((reply) => {
            return res.json({ services: reply });
        });
    },

    getAll(req, res)  {
        console.log(`GET /api/services`);

        return Service
        .findAll({
            where: { sid: req.params.sid },
        })
        .then((reply) => {
            return res.json({ services: reply });
        });
    },

    find(req, res)  {
        console.log(`GET /api/services/find`);

        const uid = req.query.uid;
        const tid = req.query.tid;

        // 유저 id와 통역사 id로 검색하는 경우
        if( uid && tid )    {
            return Service
            .findAll({
                where: { uid: uid, tid: tid },
            })
            .then((reply) => {
                return res.json({ services: reply });
            });
        }
        // 유저 id로 검색하는 경우
        if( uid )   {
            return Service
            .findAll({
                where: { uid: uid },
            })
            .then((reply) => {
                return res.json({ services: reply });
            });
        }
        // 통역사 id로 검색하는 경우
        if( tid )   {
            return Service
            .findAll({
                where: { tid: tid },
            })
            .then((reply) => {
                return res.json({ services: reply });
            });
        }
    },

    add(req, res)  {
        console.log(`POST /api/services`);

        const { uid, tid, status, date, start, end, location, purpose, inquiry } = req.body;
        console.log(uid, tid, status, date, start, end, location, purpose, inquiry); 

        return Service
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
            res.send({ message: '등록되었습니다..'});
        });
    },

    modify(req, res)  {
        console.log(`PUT /api/services`);

        const { sid, uid, tid, status, date, start, end, location, purpose, inquiry } = req.body;
        console.log(uid, tid, status, date, start, end, location, purpose, inquiry); 

        return Service
        .findOne({
            where: { sid }
        })
        .then((service) => {
            service.update({
                uid:        ( uid       || service.uid ),
                tid:        ( tid       || service.tid ),
                status:     ( status    || service.status ),
                date:       ( date      || service.date  ),
                start:      ( start     || service.start ),
                end:        ( end       || service.end ),
                location:   ( location  || service.location ),
                purpose:    ( purpose   || service.purpose ),
                inquiry:    ( inquiry   || service.inquiry ),
            });
        });
    },

    delete(req, res)  {
        console.log(`DELETE /api/services`);

        const { sid } = req.body;

        return Service
        .destroy({
            where: { sid: sid },
        })
        .then(() => {
            res.send({ message: '삭제되었습니다.'});
        });
    }
}