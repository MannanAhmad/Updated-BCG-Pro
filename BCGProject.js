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


	var app9 = qlik.openApp('BCG New (3).qvf', config);

	var app10 = qlik.openApp('BCG New (3).qvf', config)

	var app15 = qlik.openApp('BCG New (3).qvf', config);

	var app16 = qlik.openApp('BCG New (3).qvf', config);

	var app = qlik.openApp('Data_Model_Invoice.qvf', config);

	var app1 = qlik.openApp('BCG New (3).qvf', config);

	var app2 = qlik.openApp('BCG New (3).qvf', config);

	var app3 = qlik.openApp('BCG New (3).qvf', config);

	var app4 = qlik.openApp('BCG New (3).qvf', config);

	var app5 = qlik.openApp('BCG New (3).qvf', config);

	var app6 = qlik.openApp('BCG New (3).qvf', config);

	var app7 = qlik.openApp('BCG New (3).qvf', config);

	var app8 = qlik.openApp('BCG New (3).qvf', config);

	var app11 = qlik.openApp('BCG New (3).qvf', config);

	var app12 = qlik.openApp('BCG New (3).qvf', config);

	var app13 = qlik.openApp('BCG New (3).qvf', config);

	var app14 = qlik.openApp('BCG New (3).qvf', config);

	var app17 = qlik.openApp('BCG New (3).qvf', config);

	var app18 = qlik.openApp('BCG New (3).qvf', config);

	var app19 = qlik.openApp('BCG New (3).qvf', config);

	var app20 = qlik.openApp('BCG New (3).qvf', config);

	var app21 = qlik.openApp('BCG New (3).qvf', config);

	var app22 = qlik.openApp('BCG New (3).qvf', config);

	var app23 = qlik.openApp('BCG New (3).qvf', config);

	//get objects -- inserted here --
	app23.getObject('clearb','mueWQNw');
	
	
	app20.getObject('QV05','HEXCxA');
	app19.getObject('QV14','mEXJF');
	app18.getObject('QV13','mGyzxVF');
	
	app14.getObject('QV03','mGyzxVF');
	
	
	
	
	
	
	
	
	
	
	app1.getObject('QV10','GjbFwNJ');
	
	
	
	
	app15.getObject('QV04','JJQCA');
	
	app10.getObject('QV02','LBPNS');
	app9.getObject('QV01','APRUWVP');
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		
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


//Sub tabs
 document.getElementById("1id").onclick = function() {  
fun()  
};  
function fun() {  
document.getElementById("overview").classList.remove("hideme");
document.getElementById("availability").classList.add("hideme");
document.getElementById("yield").classList.add("hideme");
document.getElementById("bof").classList.add("hideme");
};

 document.getElementById("2id").onclick = function() {  
fun1()  
};  
function fun1() {  
document.getElementById("overview").classList.add("hideme");
document.getElementById("availability").classList.remove("hideme");
document.getElementById("yield").classList.add("hideme");
document.getElementById("bof").classList.add("hideme");
};

 document.getElementById("3id").onclick = function() {  
fun2()  
};  
function fun2() {  
document.getElementById("overview").classList.add("hideme");
document.getElementById("availability").classList.add("hideme");
document.getElementById("yield").classList.remove("hideme");
document.getElementById("bof").classList.add("hideme");
};

 document.getElementById("4id").onclick = function() {  
fun3()  
};  
function fun3() {  
document.getElementById("overview").classList.add("hideme");
document.getElementById("availability").classList.add("hideme");
document.getElementById("yield").classList.add("hideme");
document.getElementById("bof").classList.remove("hideme");
};

/////////
});

