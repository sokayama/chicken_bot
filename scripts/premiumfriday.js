let cron = require('node-cron');

module.exports = function(robot) {    
    cron.schedule('0 0 15 * * 5', () => {
        //定期的に実行する
        let dt = new Date();
        let day = dt.getDate();
        let lastDayInThisMonth = new Date(dt.getFullYear(), dt.getMonth() + 1, 0);
        if(day > lastDayInThisMonth.getDate() - 7){
            robot.send("roomname",'今日はプレミアムフライデーです。');
        }
    });

};