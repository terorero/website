$(document).ready(function() {
	
	    
    /* ======= jQuery form validator ======= */ 
    /* Ref: http://jqueryvalidation.org/documentation/ */   
    $("#contact-form").validate({
		messages: {
		
		    name: {
    			required: 'DEVIN CONDE' //You can customise this message
			},
			email: {
				required: 'terorero@bitacoraroot.com' //You can customise this message
			},		
			message: {
				required: 'Nos pondremos en contacto en breve.' //You can customise this message
			}
			
		}
		
	});
    

});