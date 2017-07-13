const { Service } = require('../../data');

module.exports = {
    get(req, res)  {
        console.log(`GET /api/services/sid`);

        const id = req.params.id;

        return Service
        .findAll({
            where: { id },
        })
        .then((services) => {
            return res.send(services);
        });
    },

    getAll(req, res)  {
        console.log(`GET /api/services`);

        return Service
        .findAll({
            where: { },
        })
        .then((services) => {
            return res.send(services);
        });
    },

    find(req, res)  {
        console.log(`GET /api/services/find`);

        const userId = req.query.userId;
        const translatorId = req.query.translatorId;

        // 유저 id와 통역사 id로 검색하는 경우
        if( userId && translatorId )    {
            return Service
            .findAll({
                where: { userId, translatorId },
            })
            .then((services) => {
                return res.send(services);
            });
        }
        // 유저 id로 검색하는 경우
        if( userId )   {
            return Service
            .findAll({
                where: { userId },
            })
            .then((services) => {
                return res.send(services);
            });
        }
        // 통역사 id로 검색하는 경우
        if( translatorId )   {
            return Service
            .findAll({
                where: { translatorId },
            })
            .then((services) => {
                return res.send(services);
            });
        }
    },

    add(req, res)  {
        console.log(`POST /api/services`);

        const { userId, translatorId, status, date, startTime, endTime, location, purpose, inquiry } = req.body;
        console.log(userId, translatorId, status, date, startTime, endTime, location, purpose, inquiry); 

        return Service
        .create({
            userId,
            translatorId,
            status,
            date,
            startTime,
            endTime,
            location,
            purpose,
            inquiry
        })
        .then(() => {
            res.send({ message: '등록되었습니다..'});
        });
    },

    modify(req, res)  {
        console.log(`PUT /api/services`);

        const { id, userId, translatorId, status, date, startTime, endTime, location, purpose, inquiry } = req.body;
        console.log(id, userId, translatorId, status, date, startTime, endTime, location, purpose, inquiry);

        return Service
        .findOne({
            where: { id }
        })
        .then((service) => {
            service.update({
                userId:       ( userId       || service.userId ),
                translatorId: ( translatorId || service.translatorId ),
                status:       ( status       || service.status ),
                date:         ( date         || service.date  ),
                startTime:    ( startTime    || service.startTime ),
                endTime:      ( endTime      || service.endTime ),
                location:     ( location     || service.location ),
                purpose:      ( purpose      || service.purpose ),
                inquiry:      ( inquiry      || service.inquiry ),
            });
        });
    },

    delete(req, res)  {
        console.log(`DELETE /api/services`);

        const { id } = req.body;

        return Service
        .destroy({
            where: { id },
        })
        .then(() => {
            res.send({ message: '삭제되었습니다.'});
        });
    }
}
