(function($){
	var category = "";
	var year = "";
	var category_headers = $("#news-list .category-header");
	var year_headers = $("#news-list .year-header");
	var allitems = $("#news-list .news-item");
	$("#filter-by-year a").click(function(){
		var key = $(this).attr('href').substr(1);
		if( key == "news-all" ){
			allitems.show();
			year_headers.show();
			category_headers.hide();
			return;
		}
		year_headers.hide();
		category_headers.hide();
		allitems.hide();
		$("#news-list .section."+key).show();
	});
	$("#filter-by-category a").click(function(){
		var key = $(this).attr('href').substr(1);
		if( key == "news-all" ){
			allitems.show();
			year_headers.show();
			category_headers.hide();
			return;
		}
		year_headers.hide();
		category_headers.hide();
		allitems.hide();
		$("#news-list .section."+key).show();
	});
})(jQuery);