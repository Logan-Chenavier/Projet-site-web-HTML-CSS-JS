
if( jQuery(".conteneur_question .question").hasClass('active') ){
		jQuery(".conteneur_question .question.active").closest('.conteneur_question').find('.contenu_question').show();
	}
	jQuery(".conteneur_question .question").click(function(){
		if( jQuery(this).hasClass('active') ){
			jQuery(this).removeClass("active").closest('.conteneur_question').find('.contenu_question').slideUp(200);
		}
		else{	jQuery(this).addClass("active").closest('.conteneur_question').find('.contenu_question').slideDown(200);
		}
	});
