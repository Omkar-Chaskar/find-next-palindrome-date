const btnSubmit = document.querySelector("#btn-submit");
const inputDate = document.querySelector("#inputdate");
var nextDate = document.querySelector("#nextdates");

btnSubmit.addEventListener("click", function () {
    dateArr = inputDate.value.split("-");
    console.log(dateArr)
    let dd,mm,yy;
    let day = dateArr[2];
    let month = dateArr[1];
    let year = dateArr[0];
    let revSum = "";
    let differenceAssending = 1;
    let differenceDesending = 0;
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 31, 30, 31, 30]
    console.log(day, month, year)
    let i = Number(month) - 1;
    let sum = revSum - year;
    // for(let diff=1; sum !== 0 ; diff++){

    while (sum !== 0) {
        differenceAssending++;
        day++;
        //  console.log("days : ", day)
        if (day > monthDays[i]) {
            i++;
            day = 1;
            month = Number(month) + 1;
            // console.log("months : ", month)
            if (month > 12) {
                month = 1;
                year = Number(year) + 1;
                i = 0;
                // console.log("years : ", year)
            }
        }
        day = day.toString();
        if (day.length == 1) {
            day = 0 + day;
        }
        month = month.toString();
        if (month.length == 1) {
            month = 0 + month;
        }
        let revSum = "";
        let sum = day + month;
        // console.log(sum, " day : ", day, "months : ", month, "year : ", year,"differnce :",differenceAssending)
        for (let j = sum.length - 1; j >= 0; j--) {
            revSum = revSum + sum[j];
        }
        // console.log("revSum :", revSum)

        if (Number(revSum) === Number(year)) {
            console.log("revSum :", revSum, "year : ", year ,"differnce :",differenceAssending);
            break;
        }

        let sub = revSum - year;
    }

    let days = dateArr[2];
    let months = dateArr[1];
    let years = dateArr[0];

    while(sum !== 0){
        differenceDesending++
        days=days-1;
        if(days < 1){
            i--;
            months = months-1;
            if(months<1){
                i = 11;
                months = 12;
                years = years-1;
                days = monthDays[12-1];
            }
            days = monthDays[i];
            
        }
        days = days.toString();
        if (days.length == 1) {
            days = 0 + days;
        }
        months = months.toString();
        if (months.length == 1) {
            months = 0 + months;
        }
        let revSums = "";
        let sums = days + months;
        // console.log(sums, " day : ", days, "months : ", months, "year : ", year,"differnce :",differenceDesending)
        for (let j = sums.length - 1; j >= 0; j--) {
            revSums = revSums + sums[j];
        }

        if (Number(revSums) === Number(years)) {
            console.log("revSum :", revSums, "year : ", years ,"differnce :",differenceDesending);
            break;
        }
    }

    if(differenceAssending >= differenceDesending){
        diff = differenceDesending;
        dd = days; 
        mm = months ;
         yy = years;
        console.log(" day : ", days, "months : ", months, "year : ", years,"differnce :",differenceDesending)

    }else{
        diff = differenceAssending;
        dd = day ;
        mm = month;
        yy = year;
        console.log(" day : ", day, "months : ", month, "year : ", year,"differnce :",differenceAssending)

    }

    let SysPrint = `
    <h2>Nearest palindrome Date is "${dd}-${mm}-${yy}". You miss it by ${diff} days. </h2>
    `
    nextDate.innerHTML = SysPrint;
})

