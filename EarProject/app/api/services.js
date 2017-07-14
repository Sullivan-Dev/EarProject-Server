const { Service } = require('../../data');

module.exports = {
    getAll({ })  {
        console.log(`GET /api/services`);

        return Service
        .findAll({
            where: { },
        })
        .then((services) => {
            return { status: 200, data: services };
        });
    },

    get({ id })  {
        console.log(`GET /api/services/id`);

        return Service
        .findAll({
            where: { id },
        })
        .then((services) => {
            return { status: 200, data: services };
        });
    },

    find({ userId, translatorId })  {
        console.log(`GET /api/services/find`);

        // 유저 id와 통역사 id로 검색하는 경우
        if( userId && translatorId )    {
            return Service
            .findAll({
                where: { userId, translatorId },
            })
            .then((services) => {
                return { status: 200, data: services };
            });
        }
        // 유저 id로 검색하는 경우
        if( userId )   {
            return Service
            .findAll({
                where: { userId },
            })
            .then((services) => {
                return { status: 200, data: services };
            });
        }
        // 통역사 id로 검색하는 경우
        if( translatorId )   {
            return Service
            .findAll({
                where: { translatorId },
            })
            .then((services) => {
                return { status: 200, data: services };
            });
        }
    },

    add({ userId, translatorId, status, date, startTime, endTime, location, purpose, inquiry })  {
        console.log(`POST /api/services`);
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
            return { status: 200, message: '등록되었습니다.' };
        });
    },

    modify({ id, userId, translatorId, status, date, startTime, endTime, location, purpose, inquiry })  {
        console.log(`PUT /api/services`);
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
            })
            .then(() => {
                return { status: 200, message: '변경되었습니다.' };
            });
        });
    },

    delete({ id })  {
        console.log(`DELETE /api/services`);

        return Service
        .destroy({
            where: { id },
        })
        .then(() => {
            return { status: 200, message: '삭제되었습니다.' };
        });
    }
}
