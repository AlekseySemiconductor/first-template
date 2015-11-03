;$(document).ready(function(){

	var all = "#blog a";
	var graphic = "#blog .graphic";
	var illustration = "#blog .illustration";
	var motion = "#blog .motion";


	$("#blog a[rel=all]").fancybox({
		helpers : {
			title : { type : 'inside' }
		},
		afterLoad : function() {
			this.title = (this.title ? '' + this.title + '<br />' : '') + 'Картинка ' + (this.index + 1) + ' из ' + this.group.length;
		} // afterLoad
	}); // fancybox

	$("#all").on("click", function(){
		$(all).hide();
		$(all).fadeIn();
		$(all).attr('rel', 'all');
		$("#blog a[rel=all]").fancybox({
			helpers : { 
				title : { 
					type : 'inside' 
				}
			}, // helpers
			afterLoad : function() {
				this.title = (this.title ? '' + this.title + '<br />' : '') + 'Картинка ' + (this.index + 1) + ' из ' + this.group.length;
			} // afterLoad
		});
		$(all).on("click", function(){
			$("#all").css('background-color','#595959');
			$("#graphic, #illustration, #motion").css('background-color','#ff6760');
		});
		$("#graphic").on("click", function(){
			$("#all").css('background-color','#ff6760');
			$("#graphic").css('background-color','#595959');
		});
		$("#illustration").on("click", function(){
			$("#all").css('background-color','#ff6760');
			$("#illustration").css('background-color','#595959');
		});
		$("#motion").on("click", function(){
			$("#all").css('background-color','#ff6760');
			$("#motion").css('background-color','#595959');
		});
	});

	$("#graphic").on("click", function(){
		$(all).show();
		$(graphic).siblings("#blog .illustration, #blog .motion").hide();
		$(graphic).attr('rel', 'graphic'); // Картинкам с классом .graphic добавляем аттрибут rel="graphic", для того, чтобы сгруппировать их для fancybox
		$("#blog a[rel=graphic]").fancybox({
			helpers : { 
				title : { 
					type : 'inside' 
				}
			}, // helpers
			afterLoad : function() {
				this.title = (this.title ? '' + this.title + '<br />' : '') + 'Картинка ' + (this.index + 1) + ' из ' + this.group.length;
			} // afterLoad
		});
		$(".graphic").on("click", function(){
			$("#graphic").css('background-color','#595959'); // После нажатия на картинку цвет кнопки пропадает, поэтому обратно возвращаем цвет кнопки
			$("#all").css('background-color','#ff6760'); // Так как all содержит в себе все классы, то и эта кнопка будет окрашиваться в серый цвет при нажатии на любую картинку, поэтому принудительно меняем этой кнопке цвет
		});
		// После нажатия на другие кнопки не всегда цвет предыдущей кнопки меняется на красный, поэтому принудительно меняем его на красный
		$("#all").on("click", function(){
			$("#graphic").css('background-color','#ff6760');
			$("#all").css('background-color','#595959');
		});
		$("#illustration").on("click", function(){
			$("#graphic").css('background-color','#ff6760');
			$("#illustration").css('background-color','#595959');
		});
		$("#motion").on("click", function(){
			$("#graphic").css('background-color','#ff6760');
			$("#motion").css('background-color','#595959');
		});
	});

	$("#illustration").on("click", function(){
		$(all).show();
		$(illustration).siblings("#blog .graphic, #blog .motion").hide();
		$(illustration).attr('rel', 'illustration');
		$("#blog a[rel=illustration]").fancybox({
			helpers : { 
				title : { 
					type : 'inside' 
				}
			}, // helpers
			afterLoad : function() {
				this.title = (this.title ? '' + this.title + '<br />' : '') + 'Картинка ' + (this.index + 1) + ' из ' + this.group.length;
			} // afterLoad
		});
		$(".illustration").on("click", function(){
			$("#illustration").css('background-color','#595959');
			$("#all").css('background-color','#ff6760');
		});
		$("#all").on("click", function(){
			$("#illustration").css('background-color','#ff6760');
			$("#all").css('background-color','#595959');
		});
		$("#graphic").on("click", function(){
			$("#illustration").css('background-color','#ff6760');
			$("#graphic").css('background-color','#595959');
		});
		$("#motion").on("click", function(){
			$("#illustration").css('background-color','#ff6760');
			$("#motion").css('background-color','#595959');
		});
	});

	$("#motion").on("click", function(){
		$(all).show();
		$(motion).siblings("#blog .graphic, #blog .illustration").hide();
		$(motion).attr('rel', 'motion');
		$("#blog a[rel=motion]").fancybox({
			helpers : { 
				title : { 
					type : 'inside' 
				}
			}, // helpers
			afterLoad : function() {
				this.title = (this.title ? '' + this.title + '<br />' : '') + 'Картинка ' + (this.index + 1) + ' из ' + this.group.length;
			} // afterLoad
		});
		$(".motion").on("click", function(){
			$("#motion").css('background-color','#595959');
			$("#all").css('background-color','#ff6760');
		});
		$("#all").on("click", function(){
			$("#motion").css('background-color','#ff6760');
			$("#all").css('background-color','#595959');
		});
		$("#illustration").on("click", function(){
			$("#motion").css('background-color','#ff6760');
			$("#illustration").css('background-color','#595959');
		});
		$("#graphic").on("click", function(){
			$("#motion").css('background-color','#ff6760');
			$("#graphic").css('background-color','#595959');
		});
	});

});