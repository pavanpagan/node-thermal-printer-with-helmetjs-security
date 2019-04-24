var pg = require('pg');
var moment = require('moment-timezone');
var printer = require("node-thermal-printer");

  var config = {
      user: 'postgres',
      database: 'newkot1',
      password: 'root',
      host: 'localhost',
      port: 5432
  };
 
  var confighotel = {
      user: 'postgres',
      database:'newhotel1',
      password: 'root',
      host: 'localhost',
     port: 5432
 };

let current_date_time=moment().tz('Asia/Kolkata').format("YYYY-MM-DD h:mm:ss a");


let hotel_name_first='Sree Krishna Hotels Pvt.Ltd'
let hotel_name='KRISHNA VEGETARIAN RESTAURANT';
let hotel_address='Chitra Complex -575108,';
let hotel_contact='Bengaluru-0824-243240812/7878967451';
let hotel_gst='29AAKCS0789DCVX'


 let reception_bar_Interface='tcp://127.0.0.1';
 let kitchen_interface= 'tcp://127.0.0.1';

//  Dont forget to give lp0 permission for server to access printer in ubuntu or u can add lp0 to user group 
printer.init({
    type: 'epson',
    interface:'/dev/usb/lp0', 
});

// printer.init({
//   type: 'epson',
//   interface:'tcp://127.0.0.1', 
// });      
var con = new pg.Client(config);
con.connect();

var conhotel = new pg.Client(confighotel);
conhotel.connect();


printer.init({
  type: 'epson',
  interface: '/dev/usb/lp0', 
});

//Epson TM 82 paper size format


/**************************GET request*************************/
module.exports.printOrder = async function()
{
let current_date_time=moment().tz('Asia/Kolkata').format("YYYY-MM-DD h:mm:ss a");
    try{
        //Epson TM 82 paper size format
        printer.isPrinterConnected(async function(isConnected)
        {         
          console.log("came");
                  printer.clear();
                  printer.underline(false);
        
                  printer.alignCenter();
                  printer.setTypeFontA();
                  printer.bold(true);
                  printer.println(hotel_name_first);
                  printer.println(hotel_name);
        
                  printer.setTypeFontA(false); 
        
                  printer.setTextNormal();
                  printer.println(hotel_address);
                  printer.println(hotel_contact);
                  printer.println(hotel_gst);
                  printer.println(moment(current_date_time).format('lll'));
                  printer.print("------------------------------------------------");
                  printer.newLine(); 
        
                  printer.tableCustom([     
                      { text:"    Bill.No:"+1, align:"Left",width:0.7},                        
                      { text:"T.No:"+12, align:"Left",width:0.4}
                    ]);
        
                    printer.alignLeft();
                    printer.bold(true);
        
                    printer.alignCenter();
                    printer.print("Description                     ");
        
                    printer.alignRight();
                    printer.print("Price");
                    printer.bold(false);
                    printer.newLine();
                    printer.newLine();
        
        
                   for(let i=0;i<5;i++)
                   {
                      printer.tableCustom([                               
                          // { text:i+1, align:"Left",width:0.03,bold:false},
                          { text:"   "+"1"+" x "+"item name"+"-"+"item price", align:"Center",width:0.7,bold:false},
                          { text:"  "+parseInt(10*1), align:"Right",width:0.4,bold:false},
                        ]);
                   }
            printer.print("------------------------------------------------");
                    printer.newLine();
                    printer.tableCustom([                               
                      { text:"                Total Amount",width:0.7,bold:false},
                      { text:"   "+10,width:0.5,bold:false}
                    ]);
        
                    printer.tableCustom([                               
                      { text:"                CGST "+5/2+"%",width:0.7,bold:false},
                      { text:"   "+2.5,width:0.5,bold:false}
                    ]);
        
                    printer.tableCustom([                               
                      { text:"                SGST "+5/2+"%",width:0.7,bold:false},
                      { text:"   "+2.5,width:0.5,bold:false}
                    ]);
        
                    printer.tableCustom([
                      { text:"                Service Tax "+5+"%",width:0.7,bold:false},
                      { text:"   "+5,width:0.5,bold:false}
                    ]);
        
                    printer.print("------------------------------------------------");
                    printer.tableCustom([                               
                      { text:"                Net Amount",width:0.7,bold:true},
                      { text:"   "+100,width:0.5,bold:false}
                    ]);
        
                     printer.print("------------------------------------------------");
                    printer.alignCenter();
                    printer.bold(true);
                    printer.alignCenter();
                  
                    printer.println("Thank You visit again");
                    printer.bold(false);
                    printer.newLine();
                     printer.print("------------------------------------------------");
                    printer.newLine();
                    printer.cut();
                    
         printer.execute(function(err)
            {
              if(err)
              {
        
              }
              else 
              {
        
              }
          });
          return true;
        })
      
    }
    catch(error)
    {
    }
}

