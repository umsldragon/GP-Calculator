/* 2.5 hrs */
$(function(){
	var header = $("#calc");
	var eq = $("#eq");
	$("#one").click(function(){
		// o == original text content
		header.text(function(i,o){
			o = zeroCheck(o);
			return o+"1";
		});
	});
	$("#two").click(function(){
		header.text(function(i,o){
			o = zeroCheck(o);
			return o+"2";
		});
	});
	$("#three").click(function(){
		header.text(function(i,o){
			o = zeroCheck(o);
			return o+"3";
		});
	});
	$("#four").click(function(){
		header.text(function(i,o){
			o = zeroCheck(o);
			return o+"4";
		});
	});
	$("#five").click(function(){
		header.text(function(i,o){
			o = zeroCheck(o);
			return o+"5";
		});
	});
	$("#six").click(function(){
		header.text(function(i,o){
			o = zeroCheck(o);
			return o+"6";
		});
	});
	$("#seven").click(function(){
		header.text(function(i,o){
			o = zeroCheck(o);
			return o+"7";
		});
	});
	$("#eight").click(function(){
		header.text(function(i,o){
			o = zeroCheck(o);
			return o+"8";
		});
	});
	$("#nine").click(function(){
		header.text(function(i,o){
			o = zeroCheck(o);
			return o+"9";
		});
	});
	$("#zero").click(function(){
		header.text(function(i,o){
			o = zeroCheck(o);
			return o+"0";
		});
	});
	$("#decimal").click(function(){
		header.text(function(i,o){
			return o+".";
		});
	});
	$("#clear").click(function(){
		header.text(function(i,o){
			if(o == ""){
				eq.text("");
			}
			return "0";
		});
	});
	$("#plus").click(function(){
		header.text(function(i,o){
			eq.text(function(h,o2){
				return o2+o+"+";
			});
			return "";
		});
	});
	$("#minus").click(function(){
		header.text(function(i,o){
			eq.text(function(h,o2){
				return o2+o+"-";
			});
			return "";
		});
	});
	$("#times").click(function(){
		header.text(function(i,o){
			eq.text(function(h,o2){
				return o2+o+"*";
			});
			return "";
		});
	});
	$("#divide").click(function(){
		header.text(function(i,o){
			eq.text(function(h,o2){
				return o2+o+"/";
			});
			return "";
		});
	});
	$("#equals").click(function(){
		header.text(function(i,o){
			var holder = eq.text()+o;
			eq.text("");
			return eval(holder);
		});
	});
	
	function zeroCheck(o){
		if(o == "0"){
			o = "";
		}
		return o;
	}
});