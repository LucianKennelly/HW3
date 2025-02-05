//Lucian
    function checkString() {
        // Get the value of the textbox
        var textboxValue = document.getElementById('notes').value;
        // Define the string to check for
        var searchString = "vegan";
        // Check if the textbox contains the string
        if (textboxValue.includes(searchString)) {
            alert("Cheesecake contains dairy!");
        } else {
            var quantity = document.getElementById('quantity').value;
            var topping = document.getElementById('topping').selection.value;
            var notes = document.getElementById('notes').value;
            document.getElementById('h3').style.visibility = "visible";
            document.getElementById('l').style.visibility = "hidden";
            document.getElementById('l2').style.visibility = "hidden";
            document.getElementById('quantity').style.visibility = "hidden";
            document.getElementById('topping').style.visibility = "hidden";
            document.getElementById('notes').style.visibility = "hidden";
            document.getElementById('button').style.visibility = "hidden";
            document.getElementById('h2').style.visibility = "hidden";
            document.getElementById('list').style.visibility = "hidden";
            document.getElementById('order').textContent = "Quantity: " + quantity + ", Topping: " + topping + ", Notes: " + notes;
        }
    }
    function changeDropDown(x){
        $("#dropbtn").text(x)
        
    }
eventHandler = function( event ) {
/* do stuff */
}
$(function() {
$(".foo").click(eventHandler);
});