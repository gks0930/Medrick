function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var date = document.getElementById('date').value;
    
    if (name === "" || email === "" || date === "") {
        alert("Please fill in all the fields.");
        return false; 
    } else {
        alert("Appointment booked successfully!");
        return true;
    }
}
