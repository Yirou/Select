var moment = require('moment');
var fs = require('fs-extra');

exports.isStart = function (today, activity) {
    var todayHour = moment(today.format('HH:mm:ss'), 'HH:mm:ss');
    var startDate = moment(new Date(activity.f_start_date));
    var startDateClone = startDate.clone();
    if (today.isSameOrAfter(startDate)) {
        if (activity.f_every && activity.f_frequence) {
            while (startDateClone.isBefore(today)) {
                startDateClone.add(activity.f_every, activity.f_frequence.toLowerCase());
            }
            return isValidHourOfDay(today, activity);
            /*if (startDateClone.format('DD/MM/YYYY') == today.format('DD/MM/YYYY')) {
             var startTime = moment(activity.f_start_time, 'HH:mm:ss');
             var endTime = moment(activity.f_end_time, 'HH:mm:ss');
             return (todayHour.isSameOrAfter(startTime) && todayHour.isSameOrBefore(endTime))
             }*/
        }
        return false;
    }
};

var isValidHourOfDay = function (today, activity) {
    var todayHour = moment(today.format('HH:mm:ss'), 'HH:mm:ss');
    var startTime = moment(activity.f_start_time, 'HH:mm:ss');
    var endTime = moment(activity.f_end_time, 'HH:mm:ss');
    return (todayHour.isSameOrAfter(startTime) && todayHour.isSameOrBefore(endTime))
}
exports.isEnd = function (today, activity) {
    var todayHour = moment(today.format('HH:mm:ss'), 'HH:mm:ss');
    var startDate = moment(new Date(activity.f_start_date));
    var startDateClone = startDate.clone();
    if (today.isSameOrAfter(startDate)) {
        if (activity.f_every && activity.f_frequence) {
            while (startDateClone.isBefore(today))
                startDateClone.add(activity.f_every, activity.f_frequence.toLowerCase());

            if (startDate.format('DD/MM/YYYY') == today.format('DD/MM/YYYY')) {
//                var startTime = moment(activity.f_start_time, 'HH:mm:ss');
                var endTime = moment(activity.f_end_time, 'HH:mm:ss');
                return todayHour.isAfter(endTime);
            }
            return true;
            /*if (startDateClone.format('DD/MM/YYYY') == today.format('DD/MM/YYYY')) {
             var startTime = moment(activity.f_start_time, 'HH:mm:ss');
             var endTime = moment(activity.f_end_time, 'HH:mm:ss');
             return (todayHour.isSameOrAfter(startTime) && todayHour.isSameOrBefore(endTime))
             }*/
        } else if (today.isAfter(startDate))
            return true;

        return false;
    }
    return true;
};


exports.waitingToStart = function (today, activity) {
    var todayHour = moment(today.format('HH:mm:ss'), 'HH:mm:ss');
    var startDate = moment(new Date(activity.f_start_date));
    var startDateClone = startDate.clone();
    if (today.isSameOrAfter(startDate)) {
        if (activity.f_every && activity.f_frequence) {
            while (startDateClone.isBefore(today)) {
                startDateClone.add(activity.f_every, activity.f_frequence.toLowerCase());
            }
            if (startDateClone.format('DD/MM/YYYY') == today.format('DD/MM/YYYY')) {
                var startTime = moment(activity.f_start_time, 'HH:mm:ss');
                var endTime = moment(activity.f_end_time, 'HH:mm:ss');
                return (todayHour.isSameOrAfter(startTime) && todayHour.isSameOrBefore(endTime))
            }
        }
        return false;
    }
};
//0 ==> END
//1 ==> START
exports.getState = function (today, activity) {
    var startDate = moment(new Date(activity.f_start_date));
    if (today.isSameOrAfter(startDate)) {
        if (today.format('YYYY-MM-DD') == startDate.format('YYYY-MM-DD')) {
            if (isValidHourOfDay(today, activity))
                return 1;
            return 0;
        } else {
            if (activity.f_every && activity.f_frequence) {
                var startDateClone = startDate.clone();
                var todayClone = moment(today.format('YYYY-MM-DD'), 'YYYY-MM-DD');
                while (startDateClone.isBefore(todayClone)) {
                    startDateClone.add(activity.f_every, activity.f_frequence.toLowerCase());
                }
                if (todayClone.format('YYYY-MM-DD') == startDateClone.format('YYYY-MM-DD')) {
                    if (isValidHourOfDay(moment(startDateClone.format('YYYY-MM-DD') + ' ' + today.format('HH:mm:ss'), 'YYYY-MM-DD HH:mm:ss'), activity))
                        return 1;
                }
            }
            return 0;
        }
    }
    return 0;
};
exports.getResult = function (activity, idTeam) {
    try {
        var path = __dirname + '/../votes/' + moment().format('DDMMYYYY') + '_' + idTeam + '_' + activity.id + '.json';
        var fileContent = fs.readFileSync(path);
        var obj = JSON.parse(fileContent);
        if (Object.keys(obj.activity.entries).length) {
            var result = obj.activity.entries[Object.keys(obj.activity.entries)[0]];
            for (var item in obj.activity.entries) {
                if (obj.activity.entries[item].point > result.point)
                    result = obj.activity.entries[item];
            }
            return result.name + ', Point obtenu: ' + result.point;
        } else
            return "";
    } catch (e) {
        return "";
    }
}