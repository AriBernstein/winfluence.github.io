/*///////////////////////////////////////////////////////////	
//Show DATA
//////////////////////////////////////////////////////////*/
function Draw9(){

	/*First disable click event on clicker button*/
	stopClicker();
	/*Show and run the progressBar*/
	runProgressBar(time=700*20);	
	
	/*DATA text*/
	changeTopText(newText = "",
		loc = 4/2, delayDisappear = 0, delayAppear = 1, finalText = false, xloc=-50, w=300);
	changeTopText(newText = "",
		loc = 3/2, delayDisappear = 9, delayAppear = 10, finalText = false, xloc=-50, w=300);
	changeTopText(newText ="",
		loc = 2/2, delayDisappear = 18, delayAppear = 19, finalText = true, xloc=-50, w=300);
		
	/*Remove the arcs*/
	d3.selectAll(".DATAToDATAArc")
		.transition().duration(2000)
		.attr("opacity", 0)
		.each("end", function() {d3.selectAll(".DATAToDATAArc").remove();});

	d3.selectAll(".DATAToDATAArc")
		.transition().duration(2000)
		.attr("opacity", 0)
		.each("end", function() {d3.selectAll(".SamsungToNokiaArc").remove();});
		
	/*Show only the DATA chords*/
	chords.transition().duration(2000)
		.attr("opacity", function(d, i) { 
			if(d.source.index == 0 && d.target.index == 0) {return opacityValueBase;}
			else if(d.source.index == 1 && d.target.index == 1) {return opacityValueBase;}
			else if(d.source.index == 2 && d.target.index == 2) {return opacityValueBase;}
			else if(d.source.index == 3 && d.target.index == 3) {return opacityValueBase;}
			else if(d.source.index == 4 && d.target.index == 4) {return opacityValueBase;}
			else if(d.source.index == 5 && d.target.index == 5) {return opacityValueBase;}
			else if(d.source.index == 6 && d.target.index == 6) {return opacityValueBase;}
			else if(d.source.index == 7 && d.target.index == 7) {return opacityValueBase;}
			else {return 0;}
		});
	
		
	/*Show all ticks and texts again*/
	/*Ticks*/
	d3.selectAll("g.group").selectAll("line")
		.transition().duration(700)
		.style("stroke", "#000");
	/*Same for the %'s*/
	svg.selectAll("g.group")
		.transition().duration(700)
		.selectAll(".tickLabels").style("opacity", 1);
	/*And the Names of each Arc*/	
	svg.selectAll("g.group")
		.transition().duration(700)
		.selectAll(".titles").style("opacity", 1);
				
};/*Draw9*/
