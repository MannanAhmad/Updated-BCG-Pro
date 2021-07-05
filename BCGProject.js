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

	//get objects -- inserted here --
	app2.getObject('CurrentSelections','CurrentSelections');
	app2.getObject('QV05','SnwCctu');
	
	app2.getObject('QV03','YzuLP');
	app2.getObject('QV02','FKwYty');
	app2.getObject('QV01','TPmZkUy');
	app2.getObject('QV06','JyESzR');
	app2.getObject('QV07','KTUX');
	app2.getObject('QV04','RmEQRVy');	
		
	//create cubes and lists -- inserted here --
	
	
	
} );

