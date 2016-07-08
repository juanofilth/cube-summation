
//MODAL BOX
$(document).ready(function() {
	$('a[data-confirm]').click(function(ev) {
		var href = $(this).attr('href');
		if (!$('#dataConfirmModal').length) {
			$('body').append('<div id="dataConfirmModal" class="modal" role="dialog" aria-labelledby="dataConfirmLabel" aria-hidden="true"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button><h3 id="dataConfirmLabel">Please Confirm</h3></div><div class="modal-body"></div><div class="modal-footer"><button class="btn btn-danger" data-dismiss="modal" aria-hidden="true">Cancel</button><a class="btn btn-primary" id="dataConfirmOK">Yes</a></div></div>');
		} 
		$('#dataConfirmModal').find('.modal-body').text($(this).attr('data-confirm'));
		$('#dataConfirmOK').attr('href', href);
		$('#dataConfirmModal').modal({show:true});
		return false;
	});
});

	
 //Validate
	$(document).ready(function(){
		$('#paginas-web-cali.comform').validate({
	    highlight: function(label) {$(label).closest('.control-group').addClass('error');
	    },
	    success: function(label) {
	    label
	    .text('OK!').addClass('valid').closest('.control-group').addClass('success');}
		}); });
//Datatable bootstrap
$.extend($.fn.dataTableExt.oStdClasses,{"sWrapper":"dataTables_wrapper form-inline"});$.fn.dataTableExt.oApi.fnPagingInfo=function(oSettings)
{return{"iStart":oSettings._iDisplayStart,"iEnd":oSettings.fnDisplayEnd(),"iLength":oSettings._iDisplayLength,"iTotal":oSettings.fnRecordsTotal(),"iFilteredTotal":oSettings.fnRecordsDisplay(),"iPage":Math.ceil(oSettings._iDisplayStart/oSettings._iDisplayLength),"iTotalPages":Math.ceil(oSettings.fnRecordsDisplay()/oSettings._iDisplayLength)};}
$.extend($.fn.dataTableExt.oPagination,{"bootstrap":{"fnInit":function(oSettings,nPaging,fnDraw){var oLang=oSettings.oLanguage.oPaginate;var fnClickHandler=function(e){e.preventDefault();if(oSettings.oApi._fnPageChange(oSettings,e.data.action)){fnDraw(oSettings);}};$(nPaging).addClass('pagination').append('<ul>'+'<li class="prev disabled"><a href="#">← '+oLang.sPrevious+'</a></li>'+'<li class="next disabled"><a href="#">'+oLang.sNext+' → </a></li>'+'</ul>');var els=$('a',nPaging);$(els[0]).bind('click.DT',{action:"previous"},fnClickHandler);$(els[1]).bind('click.DT',{action:"next"},fnClickHandler);},"fnUpdate":function(oSettings,fnDraw){var iListLength=5;var oPaging=oSettings.oInstance.fnPagingInfo();var an=oSettings.aanFeatures.p;var i,j,sClass,iStart,iEnd,iHalf=Math.floor(iListLength/2);if(oPaging.iTotalPages<iListLength){iStart=1;iEnd=oPaging.iTotalPages;}
else if(oPaging.iPage<=iHalf){iStart=1;iEnd=iListLength;}else if(oPaging.iPage>=(oPaging.iTotalPages-iHalf)){iStart=oPaging.iTotalPages-iListLength+1;iEnd=oPaging.iTotalPages;}else{iStart=oPaging.iPage-iHalf+1;iEnd=iStart+iListLength-1;}
for(i=0,iLen=an.length;i<iLen;i++){$('li:gt(0)',an[i]).filter(':not(:last)').remove();for(j=iStart;j<=iEnd;j++){sClass=(j==oPaging.iPage+1)?'class="active"':'';$('<li '+sClass+'><a href="#">'+j+'</a></li>').insertBefore($('li:last',an[i])[0]).bind('click',function(e){e.preventDefault();oSettings._iDisplayStart=(parseInt($('a',this).text(),10)-1)*oPaging.iLength;fnDraw(oSettings);});}
if(oPaging.iPage===0){$('li:first',an[i]).addClass('disabled');}else{$('li:first',an[i]).removeClass('disabled');}
if(oPaging.iPage===oPaging.iTotalPages-1||oPaging.iTotalPages===0){$('li:last',an[i]).addClass('disabled');}else{$('li:last',an[i]).removeClass('disabled');}}}}});$(document).ready(function(){$('#example').dataTable({"sDom":"<'row'<'span6'l><'span6'f>r>t<'row'<'span6'i><'span6'p>>","sPaginationType":"bootstrap","oLanguage":{"sLengthMenu":"_MENU_ records per page"}});});
/////////////////////////////////////////////////////////
$(document).ready(function(){if($('.dataTable').length>0){$('.dataTable').each(function(e){var opt={"sPaginationType":"bootstrap","oLanguage":{"sSearch":"","sLengthMenu":"Limit: _MENU_"}};if($(this).hasClass("dataTable-noheader")){opt.bFilter=false;opt.bLengthChange=false;}
if($(this).hasClass("dataTable-nofooter")){opt.bInfo=false;opt.bPaginate=false;}

if($(this).hasClass("dataTable-nosort")){var column=$(this).data('nosort');opt.aoColumnDefs=[{'bSortable':false,'aTargets':[column]}];}
$(this).dataTable(opt);$('.dataTables_filter input').attr("placeholder","Buscar correo...");$('.dataTables_length select').attr("class","uniform");});}
if($('.uniform').length>0){$('.uniform').uniform({radioClass:'uniRadio'});}});
$("input:checkbox, input:radio, input:file").uniform({selectAutoWidth : true});


<!--FORM VALIDATION-->	
	$(document).ready(function(){
		$('#contact-form').validate({
	    rules: {
		user: {minlength: 3,required: true},
		pass: {minlength:5,maxlength:30,required: true},
		vpass: {minlength:5,maxlength:30,required: true},
	    },
	    highlight: function(label) {$(label).closest('.control-group').addClass('error');
	    },
	    success: function(label) {
	    label
	    .text('OK!').addClass('valid').closest('.control-group').addClass('success');}
		}); });
		
	<!--POST FORM-->	
/*	$(document).ready(function(){$('#contact-form').submit(function(e) {register();e.preventDefault();});});
	function register()
	{hideshow('loading',1); error(0);
	$.ajax({
		type: "POST",
		url: "process.php",
		data: $('#contact-form').serialize(),
		dataType: "json",
		success: function(msg){
			
			if(parseInt(msg.status)==1){window.location=msg.txt;}
			else if(parseInt(msg.status)==0){error(1,msg.txt);}
			hideshow('loading',0);}});}

	function hideshow(el,act)
	{
		if(act) $('#'+el).css('visibility','visible');
		else $('#'+el).css('visibility','hidden');
	}

	function error(act,txt)
	{
		hideshow('error',act);
		if(txt) $('#error').html(txt);
	}
	
*/////////////////////////////////////////////////
//POPUP
/////////////////////////////////////
$(document).ready(function() {
	createUI();
	function createUI(){		
		
	}
	//Model iframe
		 $('a.hez-update,a.hez-add').live('click',function(e) {
	            e.preventDefault();
	            var $this = $(this);
	            var horizontalPadding = 30;
	            var verticalPadding = 30;
	            var frameWidth = 550;
	            var frameHeight = 450;
				
	            $('<iframe id="model" frameborder="0" scrolling="auto"  src="' + this.href + '" />').dialog({
	                title: ($this.attr('title')) ? $this.attr('title') : 'Title',
	                autoOpen: true,
	                width: frameWidth,
	                height: frameHeight,
	                modal: true,
	                resizable: true,
	                autoResize: true,
      				position: 'center',
      				draggable: true,
      				closeOnEscape: true,
      				show: 'bounce',
      				hide: 'slide',					
	                overlay: {
	                    opacity: 0.5,
	                    background: "black"
	                }
	            }).width(frameWidth - horizontalPadding).height(frameHeight - verticalPadding);            
	      });	
});