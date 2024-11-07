var eventData = document.getElementById("event");
var deleteE = document.getElementById("deleteE");
var deleteB = document.getElementById("deleteB");
var editB = document.getElementById("editB");
var editE = document.getElementById("editE");


var fname = document.getElementById('fullname');
var email = document.getElementById('email');
var phnum = document.getElementById('phnum');
var addr = document.getElementById('addr');
var passq = document.getElementById('passq');
var bookedename;

var ename = document.getElementById('name');
var edesc = document.getElementById('desc');
var edate = document.getElementById('date');
var etime = document.getElementById('time');
var evenue = document.getElementById('venue');
var eprice = document.getElementById('price');



///where details will get printed 
 
var pasteEventTitle = document.getElementById("pasteEventTitle");
var pasteEventDesc = document.getElementById("pasteEventDesc");
var pasteEventDate = document.getElementById("pasteEventDate");
var pasteEventTime = document.getElementById("pasteEventTime");
var pasteEventVenue = document.getElementById("pasteEventVenue");
var pasteEventPrice = document.getElementById("pasteEventPrice");


//Events objects
var allEvents = JSON.parse(localStorage.getItem("allEvents")) || [];
var allBookings = JSON.parse(localStorage.getItem("allBookings")) || [];

function Event(name, desc, date, time, venue, price) {
    this.ename = name;
    this.edesc = desc;
    this.edate = date;
    this.etime = time;
    this.evenue = venue;
    this.eprice = price;
}

function Booking (fname,email,phnum,addr, passq, eventname) {
 
    this.fname = fname;
    this.email = email;
    this.phnum = phnum;
    this.addr = addr;
    this.passq = passq;
    this.bookedename = eventname;

}
addAllEvents(allEvents);
printAllBookings();

function addAllEvents(events) {

    eventData.innerHTML = '';
    deleteE.innerHTML = '';
    editE.innerHTML='';


      const defaultOpt1 = document.createElement('option');
      defaultOpt1.value = '';
      defaultOpt1.text = 'Select Event';
      defaultOpt1.disabled = true;
      defaultOpt1.selected = true;
      eventData.appendChild(defaultOpt1);
  
      const defaultOpt2 = document.createElement('option');
      defaultOpt2.value = '';
      defaultOpt2.text = 'Select Event to Delete';
      defaultOpt2.disabled = true;
      defaultOpt2.selected = true;
      deleteE.appendChild(defaultOpt2);

      const defaultOpt3 = document.createElement('option');
      defaultOpt3.value = '';
      defaultOpt3.text = 'Select Booking to Edit';
      defaultOpt3.disabled = true;
      defaultOpt3.selected = true;
      editB.appendChild(defaultOpt3);

      const defaultOpt4 = document.createElement('option');
      defaultOpt4.value = '';
      defaultOpt4.text = 'Select Event to edit';
      defaultOpt4.disabled = true;
      defaultOpt4.selected = true;
      editE.appendChild(defaultOpt4);

      //add all options 
      events.forEach(function(eventItem) {
        const opt1 = document.createElement('option');
        opt1.value = eventItem.ename;
        opt1.text = eventItem.ename;
        eventData.appendChild(opt1);

        const opt2 = document.createElement('option');
        opt2.value = eventItem.ename;
        opt2.text = eventItem.ename;
        deleteE.appendChild(opt2);
    
        const opt4 = document.createElement('option');
        opt4.value = eventItem.ename;
        opt4.text = eventItem.ename;
        editE.appendChild(opt4);
    });
 
}



function delEvent() {

    localStorage.setItem("allEvents", JSON.stringify(allEvents));

    const selectedEvent = deleteE.value;

    if (!selectedEvent) {
        alert("Please select an event to delete.");
        return;
    }

    allEvents = allEvents.filter(eventItem => eventItem.ename !== selectedEvent);

    localStorage.setItem("allEvents", JSON.stringify(allEvents));

    addAllEvents(allEvents);

    console.log("Event deleted:", selectedEvent);
}


function addEventa() {
    let name = ename.value;
    let desc = edesc.value;
    let date = edate.value;
    let time = etime.value;
    let venue = evenue.value;
    let price = eprice.value;

    const newEvent = new Event(name, desc, date, time, venue, price);
    
    allEvents.push(newEvent);

    //saving to localStorage
    localStorage.setItem("allEvents", JSON.stringify(allEvents));

    addAllEvents(allEvents);

    document.getElementById("form1").reset();

    console.log("Event added:", newEvent);
}

function bookTicket() {
    let eventname = eventData.value;
    let fullname =this.fullname.value;
    let email=  this.email.value;
    let phnum=  this.phnum.value;
    let address=  this.addr.value;
    let passqty=  this.passq.value;
    
    const newBooking = new  Booking(fullname ,email,phnum,address,passqty,eventname);
    
    allBookings.push(newBooking);

    //saving to localStorage
    localStorage.setItem("allBookings", JSON.stringify(allBookings));

    document.getElementById("form2").reset();

    console.log("Bookind added:", newBooking);

    printAllBookings();

}

setInterval(printEventDetails,3000)

function printEventDetails() {

     let name = eventData.value;


    let selectedEvent = allEvents.find(eventItem => eventItem.ename === name);

    if (selectedEvent) {
        let desc = selectedEvent.edesc; 
        let date = selectedEvent.edate; 
        let time = selectedEvent.etime;
        let venue = selectedEvent.evenue; 
        let price = selectedEvent.eprice;

        pasteEventTitle.innerHTML =name;
        pasteEventDesc.innerHTML=desc;
     pasteEventDate.innerHTML=date;
    pasteEventTime.innerHTML=time;
    pasteEventVenue.innerHTML=venue;
     pasteEventPrice.innerHTML=price;
    
        console.log("printed event ",name, desc, date, time, venue, price);
    } else {
        console.log("Event not found.");
    }

   
}



function printAllBookings() {
    const bookingsContainer = document.getElementById("bookingsContainer");
    bookingsContainer.innerHTML = '';

    const deleteB = document.getElementById("deleteB");
    deleteB.innerHTML = '<option value="">Select Booking to Delete</option>';

    if (allBookings.length === 0) {
        bookingsContainer.innerHTML = '<p>No bookings found.</p>';
        return;
    }

    allBookings.forEach((booking, index) => {
        const bookingElement = document.createElement("div");
        bookingElement.className = "booking";
        bookingElement.innerHTML = `<div class="display-6 py-3">
        <h3 class="display-6">Booking: ${index+1} </h3>
            <p>Name: ${booking.fname} </br>
            Email: ${booking.email}   </br>     
            Phone Number: ${booking.phnum}</br> 
            Address: ${booking.addr}
            Ticket Quantity: ${booking.passq}</br>
            Event: ${booking.bookedename}</p>             </div>
        `;
        bookingsContainer.appendChild(bookingElement);

        const opt = document.createElement('option');
        opt.value = index; 
        opt.text = `Booking ${index + 1}: ${booking.fname}`;
        deleteB.appendChild(opt);

        const opt1 = document.createElement('option');
        opt1.value = index; 
        opt1.text = `Booking ${index + 1}: ${booking.fname}`;
        editB.appendChild(opt1);
    });
}


function deleteBooking() {
    
const selectedBookingIndex = deleteB.value;

if (!selectedBookingIndex) {
    alert("Please select a booking to delete.");
    return;
}

allBookings.splice(selectedBookingIndex, 1);

localStorage.setItem("allBookings", JSON.stringify(allBookings));

printAllBookings();

console.log("Booking deleted:", selectedBookingIndex);
}

function editEvent() {
    
    let name = document.getElementById("editE").value;

    let selectedEvent = allEvents.find(eventItem => eventItem.ename === name);

    if (selectedEvent) {

        //adding vals in placeholders
        document.getElementById("name").value = selectedEvent.ename;
        document.getElementById("desc").value = selectedEvent.edesc;
        document.getElementById("date").value = selectedEvent.edate;
        document.getElementById("time").value = selectedEvent.etime;
        document.getElementById("venue").value = selectedEvent.evenue;
        document.getElementById("price").value = selectedEvent.eprice;

//adding vals in event cards
pasteEventTitle.innerHTML =selectedEvent.ename;
pasteEventDesc.innerHTML=selectedEvent.edesc;
pasteEventDate.innerHTML=selectedEvent.edate;
pasteEventTime.innerHTML=selectedEvent.etime;
pasteEventVenue.innerHTML=selectedEvent.evenue;
pasteEventPrice.innerHTML=selectedEvent.eprice;


        document.getElementById("addBtn").innerHTML = "Update Event";

        document.getElementById("addBtn").onclick = function () {
            const updatedName = document.getElementById("name").value;
            const updatedDesc = document.getElementById("desc").value;
            const updatedDate = document.getElementById("date").value;
            const updatedTime = document.getElementById("time").value;
            const updatedVenue = document.getElementById("venue").value;
            const updatedPrice = document.getElementById("price").value;

            if (updatedName && updatedDesc && updatedDate && updatedTime && updatedVenue && updatedPrice) {
                selectedEvent.ename = updatedName;
                selectedEvent.edesc = updatedDesc;
                selectedEvent.edate = updatedDate;
                selectedEvent.etime = updatedTime;
                selectedEvent.evenue = updatedVenue;
                selectedEvent.eprice = updatedPrice;

                localStorage.setItem("allEvents", JSON.stringify(allEvents));

                document.getElementById("name").value = "";
                document.getElementById("desc").value = "";
                document.getElementById("date").value = "";
                document.getElementById("time").value = "";
                document.getElementById("venue").value = "";
                document.getElementById("price").value = "";

                document.getElementById("addBtn").innerHTML = "Add Event";

                document.getElementById("addBtn").onclick = function () {
                    addEventa(); 
                };

                addAllEvents();

            } else {
                alert("Please fill out all fields.");
            }
        };
    } else {
        alert("Event not found.");
    }
}

function editBooking() {
      
    let bookingid = document.getElementById("editB").value;


    let selectedEvent = allBookings[bookingid];
    console.log(selectedEvent);
    if (selectedEvent) {

        document.getElementById("name").value = selectedEvent.ename;        
        document.getElementById("fullname").value = selectedEvent.fname;
        document.getElementById("email").value = selectedEvent.email;     
        document.getElementById("phnum").value = selectedEvent.phnum;     
        document.getElementById("addr").value = selectedEvent.addr;       
        document.getElementById("passq").value = selectedEvent.passq;      
        
        document.getElementById("createBtn").innerHTML = "Update Booking";
        
        document.getElementById("createBtn").onclick = function () {
            const updatedName = document.getElementById("name").value;           
            const updatedFullName = document.getElementById("fullname").value;  
            const updatedEmail = document.getElementById("email").value;         
            const updatedPhoneNum = document.getElementById("phnum").value;   
            const updatedAddr = document.getElementById("addr").value;           
            const updatedPassq = document.getElementById("passq").value;      
        
            if (updatedName && updatedFullName && updatedEmail && updatedPhoneNum && updatedAddr && updatedPassq) {
                selectedEvent.ename = updatedName;         
                selectedEvent.fname  = updatedFullName; 
                selectedEvent.email = updatedEmail;        
                selectedEvent.phnum = updatedPhoneNum;    
                selectedEvent.addr = updatedAddr;        
                selectedEvent.passq = updatedPassq;       
        
                localStorage.setItem("allBookings", JSON.stringify(allBookings));
        
                document.getElementById("name").value = "";
                document.getElementById("fullname").value = "";
                document.getElementById("email").value = "";
                document.getElementById("phnum").value = "";
                document.getElementById("addr").value = "";
                document.getElementById("passq").value = "";
        
                document.getElementById("createBtn").innerHTML = "Add Booking";
        
                document.getElementById("createBtn").onclick = function () {
                    bookTicket(); 
                };
        
                   
            } else {
                alert("Please fill out all fields.");
            
}}}}

