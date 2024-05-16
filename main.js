const currentDate = document.querySelector(".current-date");
const daysTag = document.querySelector(".days");
const prevNextIcon =document.querySelectorAll(".icons span");
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();
let nepDate = new NepaliDate(),
currNepYear = date.getFullYear(),
currNepMonth = date.getMonth();


const months =["January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December"];

const renderCalender = () =>{
    let firstDayOfMonth = new Date(currYear,currMonth,1).getDay ();     /* getting the first day of the month  ie : sunday = 0,monday = 1......*/
    let lastDateOfMonth = new Date(currYear,currMonth + 1 ,0).getDate(); /* getting last date of the months */
    let lastDateOfPrevMonth = new Date(currYear,currMonth ,0).getDate(); /* getting last date of previous months */
    let lastDayOfMonth = new Date(currYear,currMonth ,lastDateOfMonth).getDay(); /* getting last day of  month */
    let litag ="";
    console.log(firstDayOfMonth);

    for (let i = firstDayOfMonth; i > 0; i--) {     /* creating li of previous month last days */
        let nepdate = new NepaliDate(new Date(currYear,currMonth,lastDateOfPrevMonth - i + 1));
        `<li class="inactive">
        <span class="event">Events</span>
        <span class="nepdate" style="color: rgba(255,255,255,.2);" >${nepdate.getDate()}</span>
        <span class="tithi">asthami</span>
        <span class="engDate">${lastDateOfPrevMonth - i + 1}</span>
        </li>`
        console.log(nepdate.getDate())
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {    /* creating li of days of current month */
        /* Adding active class to li if currMonth , currDate , currYear is equal to the current dates */
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "";
      let nepdate = new NepaliDate(new Date(currYear,currMonth,i));
        `<li class="active">
        <span class="event">Events</span>
        <span class="nepdate">${nepdate}</span>
        <span class="tithi">asthami</span>
        <span class="engDate">${i}</span>
    </li>`;    
    }

    for (let i = lastDayOfMonth; i < 6; i++) {      /* creating li of next month first days */
        let nepdate = new NepaliDate(new Date(currYear,currMonth,i));
      `<li class="inactive">
        <span class="event">Events</span>
        <span class="nepdate" style="color: rgba(255,255,255,.2);" >${nepdate}</span>
        <span class="tithi">asthami</span>
        <span class="engDate">${i - lastDayOfMonth  + 1}</span>
        </li>`;   
    }

    currentDate.innerHTML =`${months[currMonth]} ${currYear}`;
    daysTag.innerHTML=litag;
}

renderCalender();
prevNextIcon.forEach(icon => {
        icon.addEventListener("click",() =>{
            currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1; /* If clicked on the previous icon then there do decrement by 1 or else do icrement by one */
            if (currYear < 0 || currYear > 11) {
                date = new Date(currYear,currMonth);
                currYear = date.getFullYear();
                currMonth = date.getMonth();
            }
            else{
                date = new Date();
            }
            renderCalender();
        })
});



      

  