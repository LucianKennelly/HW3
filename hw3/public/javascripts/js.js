//Lucian
var ordersTot = 
        [
            {"Jan": [{flavor:"plain", quantity: 1},{flavor:"chocolate",quantity: 2},{flavor:"cherry",quantity:3}]},
            {"Feb": [{flavor:"plain", quantity: 0},{flavor:"chocolate",quantity: 2},{flavor:"cherry",quantity:0}]},
            {"Mar":[{flavor:"plain", quantity: 0},{flavor:"chocolate",quantity: 0},{flavor:"cherry",quantity:0}]},
            {"Apr":[{flavor:"plain", quantity: 0},{flavor:"chocolate",quantity: 0},{flavor:"cherry",quantity:0}]},
            {"May":[{flavor:"plain", quantity: 0},{flavor:"chocolate",quantity: 0},{flavor:"cherry",quantity:0}]},
            {"Jun":[{flavor:"plain", quantity: 0},{flavor:"chocolate",quantity: 0},{flavor:"cherry",quantity:0}]},
            {"Jul":[{flavor:"plain", quantity: 0},{flavor:"chocolate",quantity: 0},{flavor:"cherry",quantity:0}]},
            {"Aug":[{flavor:"plain", quantity: 0},{flavor:"chocolate",quantity: 0},{flavor:"cherry",quantity:0}]},
            {"Oct":[{flavor:"plain", quantity: 0},{flavor:"chocolate",quantity: 0},{flavor:"cherry",quantity:0}]},
            {"Nov":[{flavor:"plain", quantity: 0},{flavor:"chocolate",quantity: 0},{flavor:"cherry",quantity:0}]},
            {"Dec":[{flavor:"plain", quantity: 0},{flavor:"chocolate",quantity: 0},{flavor:"cherry",quantity:0}]}
        ];
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
        $("#dropbtn").text(x);
        if (x === 'Jan') {
            $('.plain').text('Plain: ' + JSON.stringify(ordersTot[0].Jan[0].quantity));
            $('.cherry').text('Cherry: ' + JSON.stringify(ordersTot[0].Jan[1].quantity));
            $('.chocolate').text('Chocolate: ' + JSON.stringify(ordersTot[0].Jan[2].quantity));
        }
        else if (x === 'Feb') {
            $('.plain').text('Plain: ' + JSON.stringify(ordersTot[1].Feb[0].quantity));
            $('.cherry').text('Cherry: ' + JSON.stringify(ordersTot[1].Feb[1].quantity));
            $('.chocolate').text('Chocolate: ' + JSON.stringify(ordersTot[1].Feb[2].quantity));
        }
        else if (x === 'Mar') {
            $('.plain').text('Plain: ' + JSON.stringify(ordersTot[2].Mar[0].quantity));
            $('.cherry').text('Cherry: ' + JSON.stringify(ordersTot[2].Mar[1].quantity));
            $('.chocolate').text('Chocolate: ' + JSON.stringify(ordersTot[2].Mar[2].quantity));
        }
        else if (x === 'Apr') {
            $('.plain').text('Plain: ' + JSON.stringify(ordersTot[3].Feb[0].quantity));
            $('.cherry').text('Cherry: ' + JSON.stringify(ordersTot[3].Feb[1].quantity));
            $('.chocolate').text('Chocolate: ' + JSON.stringify(ordersTot[3].Feb[2].quantity));
        }
        else if (x === 'May') {
            $('.plain').text('Plain: ' + JSON.stringify(ordersTot[4].Apr[0].quantity));
            $('.cherry').text('Cherry: ' + JSON.stringify(ordersTot[4].Apr[1].quantity));
            $('.chocolate').text('Chocolate: ' + JSON.stringify(ordersTot[4].Apr[2].quantity));
        }
        else if (x === 'Jun') {
            $('.plain').text('Plain: ' + JSON.stringify(ordersTot[5].Jun[0].quantity));
            $('.cherry').text('Cherry: ' + JSON.stringify(ordersTot[5].Jun[1].quantity));
            $('.chocolate').text('Chocolate: ' + JSON.stringify(ordersTot[5].Jun[2].quantity));
        }
        else if (x === 'Jul') {
            $('.plain').text('Plain: ' + JSON.stringify(ordersTot[6].Jul[0].quantity));
            $('.cherry').text('Cherry: ' + JSON.stringify(ordersTot[6].Jul[1].quantity));
            $('.chocolate').text('Chocolate: ' + JSON.stringify(ordersTot[6].Jul[2].quantity));
        }
        else if (x === 'Aug') {
            $('.plain').text('Plain: ' + JSON.stringify(ordersTot[7].Aug[0].quantity));
            $('.cherry').text('Cherry: ' + JSON.stringify(ordersTot[7].Aug[1].quantity));
            $('.chocolate').text('Chocolate: ' + JSON.stringify(ordersTot[7].Aug[2].quantity));
        }
        else if (x === 'Sep') {
            $('.plain').text('Plain: ' + JSON.stringify(ordersTot[8].Sep[0].quantity));
            $('.cherry').text('Cherry: ' + JSON.stringify(ordersTot[8].Sep[1].quantity));
            $('.chocolate').text('Chocolate: ' + JSON.stringify(ordersTot[8].Sep[2].quantity));
        }
        
        else if (x === 'Oct') {
            $('.plain').text('Plain: ' + JSON.stringify(ordersTot[9].Oct[0].quantity));
            $('.cherry').text('Cherry: ' + JSON.stringify(ordersTot[9].Oct[1].quantity));
            $('.chocolate').text('Chocolate: ' + JSON.stringify(ordersTot[9].Oct[2].quantity));
        }
        
        else if (x === 'Nov') {
            $('.plain').text('Plain: ' + JSON.stringify(ordersTot[10].Nov[0].quantity));
            $('.cherry').text('Cherry: ' + JSON.stringify(ordersTot[10].Nov[1].quantity));
            $('.chocolate').text('Chocolate: ' + JSON.stringify(ordersTot[10].Nov[2].quantity));
        }
        else if (x === 'Dec') {
            $('.plain').text('Plain: ' + JSON.stringify(ordersTot[11].Dec[0].quantity));
            $('.cherry').text('Cherry: ' + JSON.stringify(ordersTot[11].Dec[1].quantity));
            $('.chocolate').text('Chocolate: ' + JSON.stringify(ordersTot[11].Dec[2].quantity));
        }
    }
eventHandler = function( event ) {
/* do stuff */
}
$(function() {
$(".foo").click(eventHandler);
});