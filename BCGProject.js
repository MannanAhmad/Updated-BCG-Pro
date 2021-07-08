/*!
* Start Bootstrap - Simple Sidebar v6.0.2 (https://startbootstrap.com/template/simple-sidebar)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-simple-sidebar/blob/master/LICENSE)
*/
// 
// Scripts
// 




// custome js

/*
 * Basic responsive mashup template
 * @owner Enter you name here (xxx)
 */
/*
 *    Fill in host and port for Qlik engine
 */
 $(function(){

    $('input:radio[id="scaster"]').change(function(){
       
		 var x = document.getElementById("avail-down1");
		  var y = document.getElementById("avail-down2");
		  x.style.display = "none";
		    y.style.display = "none";
			
			 var a = document.getElementById("avail-down3");
		
		  a.style.display = "block";
		  a.style.marginTop = "10px";

		
    });          

});


$(function(){

    $('input:radio[id="BOF"]').change(function(){
       
		 var x = document.getElementById("avail-down1");
		  var y = document.getElementById("avail-down2");
		  x.style.display = "block";
		    y.style.display = "block";
			
			 var a = document.getElementById("avail-down3");
		  var b = document.getElementById("avail-down4");
		  a.style.display = "none";
		    b.style.display = "none";
    });          

});
  
  $(function(){

    $('input:radio[id="SMS2"]').change(function(){
	var x = document.getElementById("clearb");
	x.click();
	
        window.alert('Work in progress');   
    });          

});
 
  $(function(){

    $('input:radio[id="SMS3"]').change(function(){
        window.alert('Work in progress');   
    });          

});
 
 
 
 
function overview() {
 var cont=document.querySelector(".rightCont");

    var x = document.getElementById("overview");
	var a = document.getElementById("availability");
	var b = document.getElementById("bof");
	var y= document.getElementById("yield");
 
      x.style.display = "block";
	   a.style.display = "none";
	    b.style.display = "none";
		 y.style.display = "none";
		 cont.style.height="740px";
    
  }
  
 function avail() {

console.log(" availabiulit clicked");
	var cont=document.querySelector(".rightCont");
	
    var x = document.getElementById("availability");
	var o = document.getElementById("overview");
	var b = document.getElementById("bof");
	var y= document.getElementById("yield");
	
   
      x.style.display = "block";
	   o.style.display = "none";
	    b.style.display = "none";
		 y.style.display = "none";
		 
		 cont.style.height="500px";
	
  }
  
  function bof() {


 var cont=document.querySelector(".rightCont");
    var x = document.getElementById("bof");
	var o = document.getElementById("overview");
	var a = document.getElementById("availability");
	var y= document.getElementById("yield");
	

      x.style.display = "block";
	   o.style.display = "none";
	    a.style.display = "none";
		 y.style.display = "none";
		  cont.style.height="740px";
	  
   
  }
  
  function yield() {
   var cont=document.querySelector(".rightCont");

console.log(" availability clicked");
    var x = document.getElementById("yield");
	var o = document.getElementById("overview");
	var a = document.getElementById("availability");
	var b= document.getElementById("bof");
	
  
      x.style.display = "block";
	   o.style.display = "none";
	    a.style.display = "none";
		 b.style.display = "none";
		  cont.style.height="600px";
	  
   
  }
  
  
   
  
  
  
  
   
  
  
  
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

	var app24 = qlik.openApp('BCG New (3).qvf', config);

	var app25 = qlik.openApp('BCG New (3).qvf', config);

	var app26 = qlik.openApp('BCG New (5).qvf', config);

	var app27 = qlik.openApp('BCG New (5).qvf', config);

	var app28 = qlik.openApp('BCG New (5).qvf', config);

	var app29 = qlik.openApp('BCG New (5).qvf', config);

	var app30 = qlik.openApp('BCG New (5).qvf', config);

	var app31 = qlik.openApp('BCG New (5).qvf', config);

	var app32 = qlik.openApp('BCG New (5).qvf', config);

	var app33 = qlik.openApp('BCG New (3).qvf', config);

	var app34 = qlik.openApp('BCG New (3).qvf', config);

	var app35 = qlik.openApp('BCG - SMS1 & SMS2 (1).qvf', config);

	var app36 = qlik.openApp('BCG - SMS1 & SMS2 (1).qvf', config);

	var app37 = qlik.openApp('BCG - SMS1 & SMS2 (1).qvf', config);

	var app38 = qlik.openApp('BCG - SMS1 & SMS2 (1).qvf', config);

	var app39 = qlik.openApp('BCG - SMS1 & SMS2 (1).qvf', config);

	var app40 = qlik.openApp('BCG - SMS1 & SMS2 (1).qvf', config);

	var app41 = qlik.openApp('BCG - SMS1 & SMS2 (1).qvf', config);

	var app42 = qlik.openApp('BCG - SMS1 & SMS2 (1).qvf', config);

	var app43 = qlik.openApp('BCG - SMS1 & SMS2 (1).qvf', config);

	var app44 = qlik.openApp('BCG - SMS1 & SMS2 (1).qvf', config);

	var app45 = qlik.openApp('BCG - SMS1 & SMS2 (1).qvf', config);

	var app46 = qlik.openApp('BCG - SMS1 & SMS2 (1).qvf', config);

	var app47 = qlik.openApp('BCG - SMS1 & SMS2 (1).qvf', config);

	var app48 = qlik.openApp('Copy - BCG - SMS1 & SMS2.qvf', config);
	

	//get objects -- inserted here --
	app48.getObject('QV500','LBPNS');
	app48.getObject('QV015','sZVkAL');
	app48.getObject('QV08','guPYj');
	app48.getObject('QV18','EywJDgC');
	app48.getObject('QV16','habr');
	app48.getObject('QV17','ctxeP');
	app48.getObject('QV15','CY');
	
	
	app48.getObject('QV12','VWBLLgj');
	
	app48.getObject('QV10','rUPsT');
	app48.getObject('QV09','gTqhCJ');
	app48.getObject('QV02','LBPNS');
	app48.getObject('QV01','JGEgwK');
	app48.getObject('clearb','uYynPY');
	app48.getObject('QV55','ntxEqu');
	app48.getObject('QV53','jpqeMk');
	app48.getObject('QV51','pMnSME');
	app48.getObject('QV54','UmYdRjN');
	app48.getObject('QV52','pSPTd');
	app48.getObject('QV50','EPtpzBD');
	app48.getObject('QV016','PyrtgGJ');
	
	
	app48.getObject('QV19','EPtpzBD');
	app47.getObject('QV21','UmYdRjN');
	app46.getObject('QV20','pSPTd');
	
	
	
	
	app41.getObject('QV05','TqQqyEY');
	
	
	
	
	
	
	
	
	app48.getObject('QV101','baPBQbs');
	app48.getObject('QV102','ZNSLR');
	app48.getObject('QV103','NcYmj');
	
	app48.getObject('QV104','pxtEAW');
	app48.getObject('QV105','CqrrRP');
	app48.getObject('QV106','BeJUGp');
	
	app48.getObject('QV201','VWBLLgj');
	
	app48.getObject('QV202','VWBLLgj');
	
	
	
	
	
	
	app28.getObject('QV14','pXynu');
	
	
	
	app24.getObject('QV06','HEXCxA');
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	app15.getObject('QV04','JJQCA');
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		
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



 

});

