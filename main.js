// This is the main JS file for the appliance-toolkit repo.





function parseApplianceParts(partOne, partTwo) {
	if ( partOne.length === 0 || partTwo.length === 0 ) { alert("Must enter both part numbers!"); }
	else {
		alert("Great job entering both part numbers!");
	}
}

$( "#parse-btn" ).on( "click", function() {
  // alert("Parse Button clicked!");
  parseApplianceParts($("#appliance-part-one"), $("#appliance-part-two"));
} );