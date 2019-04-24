Helmet helps you secure your Express apps by setting various HTTP headers. It’s not a silver bullet, but it can help!

Quick start

# First, run npm install helmet --save for your app. Then, in an Express app:

const express = require('express')
const helmet = require('helmet')

const app = express()

app.use(helmet())



Module	Default?

 contentSecurityPolicy for setting Content Security Policy

 dnsPrefetchControl controls browser DNS prefetching

 expectCt for handling Certificate Transparency	

 featurePolicy to limit your site’s features	

 frameguard to prevent clickjacking	

 hidePoweredBy to remove the X-Powered-By header
	
 hsts for HTTP Strict Transport Security	

 ieNoOpen sets X-Download-Options for IE8+	

 noCache to disable client-side caching	

 noSniff to keep clients from sniffing the MIME type	

 permittedCrossDomainPolicies for handling Adobe products’ crossdomain requests	

 referrerPolicy to hide the Referer header	
 xssFilter adds some small XSS protections




# Node thermal Printer

Node.js module for EPSON and STAR thermal printers command line printing.



Installation

Dependency requires build-essentials

# sudo apt-get install build-essential

# $ npm install node-thermal-printer

Features
printer.init({
  type: 'star', 
  interface: '/dev/usb/lp0',
  characterSet: 'SLOVENIA',
  removeSpecialCharacters: false,
  replaceSpecialCharacters: true
});
 
printer.isPrinterConnected( function(isConnected){ } )
printer.execute( function(err){ } );
printer.raw(new Buffer("Hello world"), function(err){ } ); 
printer.print("Hello World");
printer.println("Hello World");
printer.openCashDrawer();
printer.cut();

printer.beep();
printer.upsideDown(true);
 
printer.bold(true);
printer.invert(true);
printer.underline(true);
printer.underlineThick(true);
printer.drawLine();
printer.newLine();
 
printer.alignCenter(); 
printer.alignLeft(); 
printer.alignRight();
printer.setTypeFontA();
printer.setTypeFontB();
 
printer.setTextNormal(); 
printer.setTextDoubleHeight();
printer.setTextDoubleWidth(); 
printer.setTextQuadArea();
 
printer.leftRight("Left", "Right");
printer.table(["One", "Two", "Three"]);
printer.tableCustom([
  { text:"Left", align:"LEFT", width:0.5 },
  { text:"Center", align:"CENTER", width:0.25, bold:true },
  { text:"Right", align:"RIGHT", width:0.25 }
]);
 
printer.code128("Code128");
printer.printQR("https://github.com/Klemen1337/node-thermal-printer"); 
printer.printImage('./assets/olaii-logo-black.png', function(done){ }); 
 
print.clear();
print.getText();
print.getBuffer();
print.getWidth(); 
 
