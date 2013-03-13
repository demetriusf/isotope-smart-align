$(function() {
	
	$.root = $(document);
	
	var $containerSelector = $.root.find('.container');
	
	$containerSelector.isotope({
		itemSelector : '.elemento',
		layoutMode : 'smartAlign',
		smartAlign : {
			marginTop : 35
		}
	});
	
	$containerSelector.isotope('reLayout');
	
});