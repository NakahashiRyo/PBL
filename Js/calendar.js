const weeks = ['日', '月', '火', '水', '木', '金', '土']
const date = new Date();
let year = date.getFullYear()
let month = date.getMonth() + 1
const config = {
    show: 1,
}

function showCalendar(year, month) {
    for ( i = 0; i < config.show; i++) {
        const calendarHtml = createCalendar(year, month)
        const sec = document.createElement('section')
        sec.innerHTML = calendarHtml
        document.querySelector('#calendar').appendChild(sec)

        month++
        if (month > 12) {
            year++
            month = 1
        }
    }
}

function createCalendar(year, month) {
    const startDate = new Date(year, month - 1, 1) // 月の最初の日を取得
    const endDate = new Date(year, month,  0) // 月の最後の日を取得
    const endDayCount = endDate.getDate() // 月の末日
    const lastMonthEndDate = new Date(year, month - 2, 0) // 前月の最後の日の情報
    const lastMonthendDayCount = lastMonthEndDate.getDate() // 前月の末日
    const startDay = startDate.getDay() // 月の最初の日の曜日を取得
    let dayCount = 1 // 日にちのカウント
    let calendarHtml = '' // HTMLを組み立てる変数

    calendarHtml += '<date>' + year + '/' +  month  + '</date>' 
    calendarHtml += '<table>'


    // 曜日の行を作成
    for (let i = 0; i < weeks.length; i++) {
        calendarHtml += '<td>' + '<day>' + weeks[i] + '</day>' + '</td>'
    }

    for (let w = 0; w < 6; w++) {
        calendarHtml += '<tr>'

        for (let d = 0; d < 7; d++) {
            if (w == 0 && d < startDay) {
                // 1行目で1日の曜日の前
                let num = lastMonthendDayCount - startDay + d + 1
                calendarHtml +=  '<td class="is-disabled">' + num  + '</td>' 
            } else if (dayCount > endDayCount) {
                // 末尾の日数を超えた
                let num = dayCount - endDayCount
                calendarHtml +=  '<td class="is-disabled">' + num  + '</td>' 
                dayCount++
            } else {
                calendarHtml += `<td class="calendar_td" data-date="${year}年${month}月${dayCount}日">${dayCount}</td>`
                dayCount++
            }
        }
        calendarHtml += '</tr>'
    }
    calendarHtml += '</table>'

    return calendarHtml
}

function moveCalendar(e) {
    document.querySelector('#calendar').innerHTML = ''

    if (e.target.id === 'mae') {
        month--

        if (month < 1) {
            year--
            month = 12
        }
    }

    if (e.target.id === 'tugi') {
        month++

        if (month > 12) {
            year++
            month = 1
        }
    }

    showCalendar(year, month)
}

document.querySelector('#mae').addEventListener('click', moveCalendar)
document.querySelector('#tugi').addEventListener('click', moveCalendar)

window.onload = function () {
    document.addEventListener("click", function (e) {
        if (e.target.classList.contains("calendar_td")) {
            let showdate = e.target.dataset.date ;
            location.href = "../html/daily_second.html?data=" + encodeURIComponent(showdate);
        }
    })
}

showCalendar(year, month)


let check = document.getElementById('check');
check.addEventListener('click', checkclick);

function checkclick() {
    document.querySelector('#calendar').innerHTML = ''
    
    const selectyear = document.getElementById("year").value;
    const selectmonth = document.getElementById("month").value;
    year = selectyear;
    month = selectmonth;
    
    //console.log('選択されているのは ' + year + '年' + month + '月です');
    showCalendar(year, month)
}

//var nowyear = document.querySelector('#nowyear').innerHTML = year
//var nowmonth = document.querySelector("#nowmonth").innerHTML = month









