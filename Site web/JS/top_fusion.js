	var button = $(".to-top");
		
		$(window).scroll(function(){
			if ($(window).scrollTop() > 200 ){
				 button.show()
            }else{
				 button.hide()	
			};
			});
		
		 button.click(function(){
			
				$('html , body').animate({scrollTop:0},1000)
				
				});