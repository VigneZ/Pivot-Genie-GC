
 chrome.contextMenus.create({
	"id":"PiviotGenie",
	"title":"Piviot Genie",
	"contexts":["all"]
});
chrome.contextMenus.create({
	"id":"addPivotTop",
	"parentId":"PiviotGenie",
	"title":"Add Pivot [Top of Table]",
	"contexts":["all"]
});
chrome.contextMenus.create({
	"id":"addPivotBottom",
	"parentId":"PiviotGenie",
	"title":"Add Pivot [Bottom of Table]",
	"contexts":["all"]
});


 chrome.contextMenus.onClicked.addListener(function (clickData){
	 
	
	if (clickData.menuItemId=="addPivotTop"){
		
		 
		chrome.tabs.query({active:true,currentWindow:true},function (tabs){
				chrome.tabs.sendMessage(tabs[0].id,{action:"addPivotTop"});
	
		});
	}
	else if (clickData.menuItemId=="addPivotBottom"){
		
		
		chrome.tabs.query({active:true,currentWindow:true},function (tabs){
				chrome.tabs.sendMessage(tabs[0].id,{action:"addPivotBottom"});
	
		});
	}
 } ); 
chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
	if (request.action=="show"){
		chrome.tabs.query({active:true,currentWindow:true},function (tabs){
		chrome.pageAction.show(tabs[0].id);
		
	});
	}
	
	
	
});

