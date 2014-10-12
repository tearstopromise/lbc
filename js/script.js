$(document).ready(function(){
   
    var usedArray = new Array(76);
    var baseArray = new Array(0,0,0,0,0,1,1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4);
    var number = 0;
    var base = 0;
   
    init();
   
    function init(){
        for(var i = 0; i<24; i++){
            fillCard(i);
        }
    }
	  	 
    function fillCard(i){
        base = baseArray[i] * 15;
        number = base + Math.floor(Math.random()*15)+1;
		 
		 
        if(usedArray[number] != true){
            $('#cell'+i).html(number);
            usedArray[number] = true;
        }else{
            fillCard(i);
        }
    }
	 
    function resetUsedNumbersArray(){
        for(var j = 0; j < usedArray.length; j++){
            usedArray[j] = false;
        }
    }
	 
	 
    $('#newCard').click(function(){
        resetUsedNumbersArray();
        init();
    });
	 
    $('td').click(function(){
		      		
         clickSnd.play();
        var toggle = this.style;
        toggle.backgroundColor = toggle.backgroundColor? "":"#333";
        toggle.color = toggle.color? "":"#fff";
		
		      if ($(this).data('value') == 1) {
            //alert(event.target.id);
      		$(this).data('value', 0); }
      else {
            //alert(event.target.id);
      		$(this).data('value', 1); }
			
		var row1 = ($('#cell0').data('value')+$('#cell1').data('value')+$('#cell2').data('value')+$('#cell3').data('value')+$('#cell4').data('value'));
		var row2 = ($('#cell5').data('value')+$('#cell6').data('value')+$('#cell7').data('value')+$('#cell8').data('value')+$('#cell9').data('value'));
		var row3 = ($('#cell10').data('value')+$('#cell11').data('value')+$('#free').data('value')+$('#cell12').data('value')+$('#cell13').data('value'));
		var row4 = ($('#cell14').data('value')+$('#cell15').data('value')+$('#cell16').data('value')+$('#cell17').data('value')+$('#cell18').data('value'));	
		var row5 = ($('#cell19').data('value')+$('#cell20').data('value')+$('#cell21').data('value')+$('#cell22').data('value')+$('#cell23').data('value'));			

		var col1 = ($('#cell0').data('value')+$('#cell5').data('value')+$('#cell10').data('value')+$('#cell14').data('value')+$('#cell19').data('value'));
		var col2 = ($('#cell1').data('value')+$('#cell6').data('value')+$('#cell11').data('value')+$('#cell15').data('value')+$('#cell20').data('value'));
		var col3 = ($('#cell2').data('value')+$('#cell7').data('value')+$('#free').data('value')+$('#cell16').data('value')+$('#cell21').data('value'));
		var col4 = ($('#cell3').data('value')+$('#cell8').data('value')+$('#cell12').data('value')+$('#cell17').data('value')+$('#cell22').data('value'));	
		var col5 = ($('#cell4').data('value')+$('#cell9').data('value')+$('#cell13').data('value')+$('#cell18').data('value')+$('#cell23').data('value'));			

		var diag1 = ($('#cell0').data('value')+$('#cell6').data('value')+$('#free').data('value')+$('#cell17').data('value')+$('#cell23').data('value'));	
		var diag2 = ($('#cell4').data('value')+$('#cell8').data('value')+$('#free').data('value')+$('#cell15').data('value')+$('#cell19').data('value'));	
		

		
		 if (row1 == 5 || row2 == 5 || row3 == 5 || row4 == 5 || row5 == 5 || col1 == 5 || col2 == 5 || col3 == 5  || col4 == 5  || col5 == 5) {
		
         	winSnd.play();
    		$('#header').html("Winner!! Straight line");

    	}
		
		else if(diag1 == 5 || diag2 == 5){
			winSnd.play();
    		$('#header').html("Winner!! Diagonal line");
		
    	}
		else {
			$('#header').html("");
	
		}; 
			
		
		
    });

});
