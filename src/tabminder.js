/*
********** paneltab.js ***************
***  versian 1.0    ******************
***  Authored by David Ross Wallace **
**** 8/1/2020 ************************
**************************************
 */

class PanelTab {
  constructor(p) {
    this.tabLabel=p.tabLabel;
	this.tabId=p.tabId.split('-').join('');
	this.paneId=this.tabId+'Pane';
	this.tabButton=this.paneId+'Tab';
	this.tabButtonAttributes=p.tabButtonAttributes;
    this.tabParentId=p.tabParentId;
	this.paneParentId=p.paneParentId;
	this.tabClass="tab-link dynamic-tab-link sub-tab " + p.tabClass;
	this.paneClass= p.paneClass;
	this.command=p.command;
	this.mindset=p.mindset;
	this.targetLibrary=p.targetLibrary;
	this.paneClassName=p.paneClassName;
	this.contentParentId=this.tabId+'PaneContent';
	this.contentHeaderId=this.contentParentId+'Header';
	this.tabsetId=(p.hasOwnProperty("tabsetId")) ? p.tabsetId : p.mindset;
	this.tabAlias=(p.hasOwnProperty("tabAlias")) ? p.tabAlias : this.tabId;
	this.includeCloseButton=(p.hasOwnProperty('includeCloseButton')) ? p.includeCloseButton : "false";
	this.triggerType=p.triggerType;
  }
	addTab() {
	this.insertTab();
	this.insertPane();
	}
	removeTab() {
		$('#'+this.tabId).remove();
		$('#'+this.paneId).remove();
	}
	buildTab() {
		let htm='<li class="dynamic-tab tabset-info" tabset-id="' + this.tabsetId+ '" tab-alias="' + this.tabAlias +'" role="presentation" id="'+ this.tabId+'">'
		htm+=  '<a href="#'+ this.paneId+'" '+this.tabButtonAttributes+'   trigger-type="'+ this.triggerType+'"  mindset="'+this.mindset+'" target-library="' + this.targetLibrary + '" command="'+this.command+'" pane-parent="'+this.paneParentId+'" tab-parent="' + this.tabParentId +'" id="'+this.tabButton+'" aria-controls="'+ this.paneId+'"  class="' + this.tabClass +'" role="tab" data-toggle="tab">'+this.tabLabel+'</a>';
        htm+= '</li>';
		return htm;
	}
	buildPane() {
		let htm='<div role="tabpanel" tabset-id="' + this.tabsetId+ '" tab-alias="' + this.tabAlias +'"  tab-parent="' + this.tabParentId +'"  pane-parent="'+this.paneParentId+'" class="tab-pane dynamic-pane sub-pane tabset-info" tab-id="' + this.tabId + '" id="'+this.paneId+'" >';
			htm+=this.buildCloseTabLink();
			htm+='<div class="container-fluid">';
			htm+='<div class="nugget-header-section '+ this.paneClass+'-header posr" tab-button="'+this.paneId+'Tab" id="'+this.contentHeaderId+'" style="clear:inline-start;"></div>';
			htm+='<div  class="'+ this.paneClass+'" tab-button="'+this.paneId+'Tab" id="'+this.contentParentId+'" style="clear:inline-start;"></div>';
			htm+='</div></div>';
		return htm
	}
	buildCloseTabLink() {
		var htm="";
		if (this.includeCloseButton=="true") {
			htm='<button type="btn" class="btn btn-sm btn-default close-pane-button"  id="'+this.tabId+'close" data-function="closeTab"><span>CLOSE TAB</span>&nbsp;<i class="fa fa-window-close fa-lg text-danger"></i></button>';
		}
		return htm;
	}
	insertTab() {
		$('#'+this.tabParentId).append(this.buildTab());	
	}
	insertPane() {
		$('#'+this.paneParentId).append(this.buildPane());	
	}
	changeTabLabel(htmlLabel) {
		$('#'+this.tabButton).html(htmlLabel);
	}
	setPaneContent(htmlContent) {
		$('#'+this.contentParentId).html(htmlContent);
	}
	setPaneHeader(htmlContent) {
		$('#'+this.contentHeaderId).html(htmlContent);
	}
	clear() {
		$('#'+this.paneParenId).html("");
	}
}


