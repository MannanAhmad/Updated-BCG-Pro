/*
 * Basic responsive mashup template
 * @owner Enter you name here (xxx)
 */
/*
 *    Fill in host and port for Qlik engine
 */
var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );
var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};
require.config( {
	baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
} );

require( ["js/qlik"], function ( qlik ) {
	qlik.on( "error", function ( error ) {
		$( '#popupText' ).append( error.message + "<br>" );
		$( '#popup' ).fadeIn( 1000 );
	} );
	$( "#closePopup" ).click( function () {
		$( '#popup' ).hide();
	} );

	console.log('clicked');
	//callbacks -- inserted here --
	//open apps -- inserted here --

	var app2 = qlik.openApp('Final Visualization.qvf', config);

	var app = qlik.openApp('Final - JSW.qvf', config);

	var app1 = qlik.openApp('BCG_Final.qvf', config);

	var app3 = qlik.openApp('BCG New (3).qvf', config);

	var app4 = qlik.openApp('BCG New (3).qvf', config);

	//get objects -- inserted here --
	app4.getObject('QV01','APRUWVP');
	
	
	
	
	
	app.getObject('QV07','MmpPrMU');
	
	
	
	
	
	
	app.getObject('QV06','tGxnRCY');
	app.getObject('QV05','XcdKfea');
	app.getObject('QV04','YWaC');
	
	
	
	
	
	
	
	
		
		
	//create cubes and lists -- inserted here --
	
	// jQuerry	
$(document).ready(function () {



//$('#status').text($('.nav-link.active:last').html());

$('#1id').click(function(){$('#status').text('Overview');});
$('#2id').click(function(){$('#status').text('Availability');});
$('#3id').click(function(){$('#status').text('Yield');});
$('#4id').click(function(){$('#status').text('BOF Ops Parameter');});

	$('#sms1').click(function(){$('#smsid').text('SMS 1');});
	$('#sms2').click(function(){$('#smsid').text('SMS 2');});
	$('#sms3').click(function(){$('#smsid').text('SMS 3');});
	
	$('.clear_selections').on('click',function(){app.clearAll();});
	
});
	
} );

