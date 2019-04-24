Helmet helps you secure your Express apps by setting various HTTP headers. It’s not a silver bullet, but it can help!

Quick start

# First, run npm install helmet --save for your app. Then, in an Express app:

const express = require('express')
const helmet = require('helmet')

const app = express()

app.use(helmet())



Module	Default?

# contentSecurityPolicy for setting Content Security Policy

# dnsPrefetchControl controls browser DNS prefetching

# expectCt for handling Certificate Transparency	

# featurePolicy to limit your site’s features	

# frameguard to prevent clickjacking	

# hidePoweredBy to remove the X-Powered-By header
	
# hsts for HTTP Strict Transport Security	

# ieNoOpen sets X-Download-Options for IE8+	

# noCache to disable client-side caching	

# noSniff to keep clients from sniffing the MIME type	

# permittedCrossDomainPolicies for handling Adobe products’ crossdomain requests	

# referrerPolicy to hide the Referer header	
# xssFilter adds some small XSS protections




# Node thermal Printer

Node.js module for EPSON and STAR thermal printers command line printing.



Installation

Dependency requires build-essentials

# sudo apt-get install build-essential

# $ npm install node-thermal-printer

Features
printer.init({
  type: 'star',                                     // Printer type: 'star' or 'epson'
  interface: '/dev/usb/lp0',                        // Printer interface
  characterSet: 'SLOVENIA',                         // Printer character set
  removeSpecialCharacters: false,                   // Removes special characters - default: false
  replaceSpecialCharacters: true                    // Replaces special characters listed in config files - default: true
});
 
printer.isPrinterConnected( function(isConnected){ } )     // Check if printer is connected, callback passes bool of status
printer.execute( function(err){ } );                       // Executes all the commands. Optional callback returns null if no error, else error message
printer.raw(new Buffer("Hello world"), function(err){ } ); // Print instantly. Optional callback returns null if no error, else error message
printer.print("Hello World");                              // Append text
printer.println("Hello World");                            // Append text with new line
printer.openCashDrawer();                                  // Kick the cash drawer
printer.cut();                                             // Cuts the paper (if printer only supports one mode use this)
printer.partialCut();                                      // Cuts the paper leaving a small bridge in middle (if printer supports multiple cut modes)
printer.beep();                                            // Sound internal beeper/buzzer (if available)
printer.upsideDown(true);                                  // Content is printed upside down (rotated 180 degrees)
 
printer.bold(true);                                 // Set text bold
printer.invert(true);                               // Background/text color inversion
printer.underline(true);                            // Underline text (1 dot thickness)
printer.underlineThick(true);                       // Underline text with thick line (2 dot thickness)
printer.drawLine();                                 // Draws a line
printer.newLine();                                  // Insers break line
 
printer.alignCenter();                              // Align text to center
printer.alignLeft();                                // Align text to left
printer.alignRight();                               // Align text to right
 
printer.setTypeFontA();                             // Set font type to A (default)
printer.setTypeFontB();                             // Set font type to B
 
printer.setTextNormal();                            // Set text to normal
printer.setTextDoubleHeight();                      // Set text to double height
printer.setTextDoubleWidth();                       // Set text to double width
printer.setTextQuadArea();                          // Set text to quad area
 
printer.leftRight("Left", "Right");                 // Prints text left and right
printer.table(["One", "Two", "Three"]);             // Prints table equaly
printer.tableCustom([                               // Prints table with custom settings (text, align, width, bold)
  { text:"Left", align:"LEFT", width:0.5 },
  { text:"Center", align:"CENTER", width:0.25, bold:true },
  { text:"Right", align:"RIGHT", width:0.25 }
]);
 
printer.code128("Code128");                         // Print code128 bar code
printer.printQR("https://github.com/Klemen1337/node-thermal-printer"); // Print QR code
printer.printImage('./assets/olaii-logo-black.png', function(done){ }); // Print PNG image (uses callback)
 
print.clear();                                      // Clears printText value
print.getText();                                    // Returns printer buffer string value
print.getBuffer();                                  // Returns printer buffer
print.getWidth();                                   // Get number of characters in one line	
