/*//////////////////////////////////////////////////////////	
//Introduction
///////////////////////////////////////////////////////////*/
function Draw1(){

	/*First disable click event on clicker button*/
	stopClicker();
		
	/*Show and run the progressBar*/
	runProgressBar(time=700*11);
		
	changeTopText(newText = "A common waterborne disease is Cholera. " + 
							"Cholera is an infectious disease that is caused by eating food or drinking water contaminated with the bacterium Vibro Cholerae.",
	loc = 4/2, delayDisappear = 0, delayAppear = 1);

	changeTopText(newText = "In the next few steps I would like to introduce you some information about Cholera in Haiti a third world country that lacks basic sanitation. ",
	loc = 8/2, delayDisappear = 9, delayAppear = 10, finalText = true);
	
	changeBottomText(newText = "Let's Begin  ",
	loc = 1/2, delayDisappear = 0, delayAppear = 10);
	
	//Remove arcs again
	d3.selectAll(".arc")
		.transition().delay(9*700).duration(2100)
		.style("opacity", 0)
		.each("end", function() {d3.selectAll(".arc").remove();});
		
};/*Draw1*/