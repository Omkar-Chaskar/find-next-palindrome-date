const btnSubmit = document.querySelector("#btn-submit");
const inputDate = document.querySelector("#inputdate");
var nextDate = document.querySelector("#nextdate");

btnSubmit.addEventListener("click", function(){
    dateArr = inputDate.value.split("-");
    console.log(dateArr)
    let day = dateArr[2];
    let month = dateArr[1];
    let year = dateArr[0];
    let revSum ="";
    const monthDays =[31 ,28 ,31, 30, 31, 30, 31, 30, 31, 30, 31, 30]
    console.log(day , month , year)

    function reverse(revSum){
        let sum = day + month;
        
        console.log(sum);
        for( let j=sum.length-1; j>=0; j--){
            revSum += sum[j];
        }
        return revSum;
    }
    do{
    if (year == reverse(revSum)) {
        console.log("you got palindrome");
    } else {

        for(let d=0; d<monthDays[d] ;d++){
            while(day <= monthDays[d]){
            day=Number(day)+1;
            }
                if(day>monthDays[d]){
                    month =Number(month)+1;
                    if(month>12){
                        year= Number(year)+1;
                    }
                }
        }
        reverse();
        console.log("days month year", day , month , year)

    }
    }while(year == reverse(revSum))
    console.log(reverse(revSum), year);
})