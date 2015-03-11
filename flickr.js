jQuery(document).ready(function(){
	$('.boton').mousedown(function(event) {
		/* Act on the event */
		$(this).addClass('press');
	})
	.mouseup(function(event) {
		/* Act on the event */
		$(this).removeClass('press');
		var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  		$.getJSON( flickerAPI, {
   			tags: $('.etiqueta').val(),
    		tagmode: "any",
    		format: "json"
  		}).done(function(data){
  			var i;
  			$('.fotos').html('');
  			for(i=0;i<data.items.length;i++){
  				var image = new Image();
  				image.src=data.items[i].media.m;
  				image.height=100;
  				image.width=100;
  				$('.fotos').append(image);
  			}
  			
  		});
	});;
});