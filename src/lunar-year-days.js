const { lunarInfo } = require('./calendar-info');

/**
 * 返回农历年的总天数
 * @param {*} year 
 */
function lunarYearDays (year) {
    let i;
    let sum = 348;
    for (i = 0x8000; i > 0x8; i >>= 1) {
        sum += (lunarInfo[year - 1900] & i) ? 1 : 0;
    }
    return sum + getLeapMonthDays(year);
}

module.exports = lunarYearDays;
