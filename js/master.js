/** Copyright (C) 2006, Intalio Inc.
 *
 * The program(s) herein may be used and/or copied only with
 * the written permission of Intalio Inc. or in accordance with
 * the terms and conditions stipulated in the agreement/contract
 * under which the program(s) have been supplied.
 *
 * $Id$
 * $Log$
 */
/** Javascript Document
 * 
 * Description :This file is used to handle the layout of cosole application

 * Date :11/06/201
 * 
 */
/**
 * @Function Name   : jQuery 
 * @Description     : initiate all layouts
 * @param           : 
 * @returns         : 
 * */
$(function () {
	
 
    
    $('*').click( function() {
                        $("#securityData").css("display","none");
                        $("#toolsData").css("display","none");
		        $("#userData").css("display","none");
			highlightSelectedTab();
			
                      
	});
    $('#processDetails').show();
    $('#instanceDetails').hide();
    $('#toolsDetails').hide();

    $('#radio1').button().
    click(function () {
	$('#tabSelected').val('radio1');
	$('#radio1').addClass('ui-state-focus');
	$('#radio2').removeClass('ui-state-focus');
	$('#selectSecurity').removeClass('ui-state-focus');
	$('#selectTools').removeClass('ui-state-focus');
	var Iframe = window.parent.$("#auditLogFrame");
	Iframe.remove();
	showhide('processDetails', 'block','tab','','','');
	return false;
    });
    $('#radio2').button().click(function () {
	$('#tabSelected').val('radio2');
	$('#radio2').addClass('ui-state-focus');
	$('#radio1').removeClass('ui-state-focus');
	$('#selectSecurity').removeClass('ui-state-focus');
	$('#selectTools').removeClass('ui-state-focus');
	var Iframe = window.parent.$("#auditLogFrame");
	Iframe.remove();
	showhide('instanceDetails', 'block','tab','','','');
	return false;
    });
       
    /*start----*/
	$('.select').each(function () {
		var id = ($(this).attr('id'));
		$('#'+id).removeClass('select');
		$('#'+id)
			.button({
				icons: {
					secondary: "ui-icon-triangle-1-s"
				}
			})
			.click(function() {
				$('#radio1').removeClass('ui-state-focus');
				$('#radio2').removeClass('ui-state-focus');
				$('#'+id).addClass('ui-state-focus');
				
				if(id == "selectSecurity")
				{
				   $('#tabSelected').val('id');
				   $('#selectTools').removeClass('ui-state-focus');
				   $('#tabSelected').val('selectSecurity');
				}
				else if(id == "selectTools")
				{
				   $('#tabSelected').val('id');
				   $('#selectSecurity').removeClass('ui-state-focus');
				   $('#tabSelected').val('selectTools');
				}
				else if (id == "userProfile")
				   highlightSelectedTab();
				var menu = $( this ).next().show().position({
					my: "left top",
					at: "left bottom",
					of: this
				});
				$( document ).one( "click", function() {
					menu.hide();
				});
				return false;
			})
		.next()
		.hide()
		.menu();
	});
		
    /*-----end*/
    	
});
