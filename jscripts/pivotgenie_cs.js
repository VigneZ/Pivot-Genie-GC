var target;
 window.addEventListener("contextmenu", getTarget);    
 function getTarget(e) {
  target = e.target;
  
}

function generatePivot(elePivot){
	
	var derivers = $.pivotUtilities.derivers;

	var renderers = $.extend(
		$.pivotUtilities.renderers, 
		$.pivotUtilities.c3_renderers, 
		$.pivotUtilities.d3_renderers, 
		$.pivotUtilities.export_renderers
	);
	var pivotContainer="#" + $(elePivot).find( "div" ).prop("id");
	
		$(pivotContainer).pivotUI($(target.closest('table')), 
		{ 
			rows: [""], 
			cols: [""] 
		});
	
}

function generatePivot_BK(){
	var derivers = $.pivotUtilities.derivers;

	var renderers = $.extend(
		$.pivotUtilities.renderers, 
		$.pivotUtilities.c3_renderers, 
		$.pivotUtilities.d3_renderers, 
		$.pivotUtilities.export_renderers
	);

	$("#pivot").pivotUI($(target.closest('table')), 
	{ 
		rows: [""], 
		cols: [""] 
	});
}

chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
	    
	var tableAbsPosition=$(target.closest('table')).index();
   
	
	if (request.action=="addPivotTop"){
		var elePivot="<div class='pivotGenieContainer'><div id='pivot_"+tableAbsPosition+"_T' align='center'></div><div class='pivotGenieRemove' align='right' onclick='$( this ).parent().remove();'>Remove Pivot</div></div><br>";  
		
		
		if (!$("#pivot_"+tableAbsPosition+"_T").length){
			$( elePivot ).insertBefore(target.closest('table'));
			generatePivot($(elePivot));
		}
	}
	
	if (request.action=="addPivotBottom"){
		var elePivot="<div class='pivotGenieContainer'><div id='pivot_"+tableAbsPosition+"_B' align='center'></div><div class='pivotGenieRemove' align='right' onclick='$( this ).parent().remove();'>Remove Pivot</div></div><br>"; 
		if (!$("#pivot_"+tableAbsPosition+"_B").length){
			$( elePivot ).insertAfter(target.closest('table'));
			generatePivot($(elePivot));
		}
		
	}
	
	
	
});

chrome.runtime.sendMessage({action:"show"});