$(".site-menu a").on("click", function(){
	$(".site-menu").find(".active").removeClass("active");
	$(this).parent().addClass("active");
 });

function goToOrders(){
	window.location.href = "#pedidos"
}
 