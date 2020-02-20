var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require('cors');
var app = express();
var http = require('http');
// ** Get port from environment and store in Express. // *
var port = normalizePort(process.env.PORT || '3000');
// ** Create HTTP server. // *
var server = http.createServer(app);
var io = require('socket.io').listen(server);
// todo : email 
var mailer = require("nodemailer");
// ! end email







// ! ลอง test import image  ////



var upload = require('./router/test/test-image-single-28');
var uploadmultiple = require('./router/test/test-image-Multiple-28');
var testGetpro = require('./router/test/test-get-pro');
var postArticle = require('./router/post/post-article/post-art');


// chat
var chat = require('./router/test/chat/test-get-chat');
var userchat = require('./router/test/chat/test-get-chat-user');
var postchat = require('./router/test/chat/test-post-chat');
var searchuser = require('./router/test/chat/test-search-user');
var firstchat = require('./router/test/chat/test-first-chat');

// email
var email = require('./router/test/mail/send-mail');


// ! end image




// todo :post
var loginuser = require('./router/post/login');
var register = require('./router/post/register');
var postlocation = require('./router/post/post-location');
var postreq = require('./router/post/post-req');
var postpro = require('./router/post/post-pro/post-property');
var poststyle = require('./router/post/post-pro/post-pro-style');
var postdraft = require('./router/post/post-pro/post-pro-draft');
var postdraftstyle = require('./router/post/post-pro/post-pro-draft-style');
var postproimage = require('./router/post/post-image/post-pro-image');
var postFavorate = require('./router/post/post-favorite');



// todo :get
var test = require('./router/get/test');
var getlocation = require('./router/get/get-location');
var recommend = require('./router/get/get-recommend');
var property = require('./router/get/get-pro/get-property');
var list_proWait = require('./router/get/get-pro/get-pro-wait-appro')
var member = require('./router/get/get-member');
var profile = require('./router/get/get-profile');
var zone = require('./router/get/get-loc-zone');
var province = require('./router/get/get-loc-province');
var location = require('./router/get/get-loc-location');

// ! ยกเลิก var getupgrade = require('./router/get/get-require/get-req-upgrade');
// ! ยกเลิก var countup = require('./router/get/get-require/get-count-upgarde');
var recommainpage = require('./router/get/get-recom-mainpage');
// อสังหา
var house = require('./router/get/get-pro/get-pro-house');
var townhouse = require('./router/get/get-pro/get-pro-townhouse');
var apartment = require('./router/get/get-pro/get-pro-apartment');
var commercial = require('./router/get/get-pro/get-pro-commercial');
var condominium = require('./router/get/get-pro/get-pro-condominium');
var land = require('./router/get/get-pro/get-pro-land');
var prodetail = require('./router/get/get-pro/get-pro-detail');
//  todo แก้ไม่น้าจะใช้ var promap = require('./router/get/get-pro/get-pro-map');
var protype = require('./router/get/get-pro/get-pro-type');
var type = require('./router/get/get-pro/get-type');

// ขาย
var sellhouse = require('./router/get/get-sell/get-sell-house');
var selltownhouse = require('./router/get/get-sell/get-sell-townhouse');
var sellapart = require('./router/get/get-sell/get-sell-apart');
var sellcomm = require('./router/get/get-sell/get-sell-comm');
var sellcondo = require('./router/get/get-sell/get-sell-condo');
var sellland = require('./router/get/get-sell/get-sell-land');
// เช่า
var renthouse = require('./router/get/get-rent/get-rent-house');
var renttownhouse = require('./router/get/get-rent/get-rent-townhouse');
var rentapart = require('./router/get/get-rent/get-rent-apt');
var rentcomm = require('./router/get/get-rent/get-rent-comm');
var rentcondo = require('./router/get/get-rent/get-rent-condo');
var rentland = require('./router/get/get-rent/get-rent-land');
// seller
var mypro = require('./router/get/get-pro/get-pro-seller/get-My-pro');
var myproawait = require('./router/get/get-pro/get-pro-seller/get-my-pro-wait')
var myprodraft = require('./router/get/get-pro/get-pro-seller/get-My-pro-draft');
var myproedit = require('./router/get/get-pro/get-pro-seller/get-pro-wait-edit');
var myproclose = require('./router/get/get-pro/get-pro-seller/get-My-pro-close');
var countpro = require('./router/get/get-pro/get-pro-seller/get-count-pro');
var filter = require('./router/get/get-pro/get-pro-filter');
var poppular = require('./router/get/get-pro/get-pro-poppular');
var article = require('./router/get/get-article/get-art');
var artdetial = require('./router/get/get-article/get-art-detail');
var count_pro_wait = require('./router/get/get-pro/get-count-pro-wait')
// ความต้องการซื้อ 
var requirement = require('./router/get/get-require/get-requirement');
var reqmatch = require('./router/get/get-require/get-req-match');
// test
var gettest = require('./router/get/get-test');
// get รูป
var getnameavatar = require('./router/get/get-image/get-name-avatar');
var getnamepro = require('./router/get/get-image/get-name-pro');
var proFromLocat = require('./router/get/get-pro/get-from-location')
var proFromProvin = require('./router/get/get-pro/get-from-province')
var proFromprice = require('./router/get/get-pro/get-mainpage/get-pro-fromPrice')
var proFromArea = require('./router/get/get-pro/get-mainpage/get-pro-fromArea')
var profollow = require('./router/get/get-pro/get-mainpage/get-pro-favorite')
var follow = require('./router/get/get-pro/get-mainpage/get_follow')
var guide_price = require('./router/get/get-pro/get-pro-seller/guide_price')
var pro_public = require('./router/get/get-pro/get-pro-public')
// todo :select
// ? get version 2



// todo :put
var putlocation = require('./router/put/put-location');
var putrecom = require('./router/put/put-recom');
var propublish = require('./router/put/put-status-pro-Publish');
var prodraft = require('./router/put/put-status-pro-draft');
var promodify = require('./router/put/put-status-pro-modify');
var proclose = require('./router/put/put-status-pro-close');
var proview = require('./router/put/put-pro-view');
var artview = require('./router/put/put-art-view');
var putprofile = require('./router/put/put-profile');
var putprolimit = require('./router/put/put-pro_limit');
var putavatar = require('./router/put/profile-image');


// todo :delete
var deletelocation = require('./router/delete/delete-location');
var deletereq = require('./router/delete/delete-req');
var unfollow = require('./router/delete/un_follow');
// ! ยกเลิก var deleteupgrade = require('./router/delete/delete-req-upgrade');

// todo : test
var testgetimage = require('./router/test/get-image');
var socket = require('./router/test/socket.io/soctet');









// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json({ limit: '10mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))



//  ****** part ******

// todo :select
app.use('/test', test);
app.use('/getlocation', getlocation);                   // ทำเล
app.use('/recommend', recommend);                       // จัดการรายการแนะนำ
app.use('/property', property);                         // รายการอสังหา
app.use('/member', member);                             // รายการสมาชิก
app.use('/profile', profile);                           // โปรไฟลสมาชิก
app.use('/house', house);                               // บ้านเดี่ยว
app.use('/townhouse', townhouse);                       // ทาวน์เฮ้าส์
app.use('/apartment', apartment);                       // อพาร์ทเม้น
app.use('/commercial', commercial);                     // เชิงพาณิชย์
app.use('/condominium', condominium);                   // คอนโดมิเนียม
app.use('/land', land);                                 // ที่ดิน
app.use('/prodetail', prodetail);                       // รายละเอียดอสังหา    
//  todo แก้ไม่น้าจะใช้ app.use('/promap', promap);                             // อสังหาจากแผนที่    
app.use('/zone', zone);                                 // ภูมิภาค   
app.use('/province', province);                         // จังหวัด  
app.use('/location', location);                         // เขตในจังหวัด  

// ! ยกเลิก app.use('/getupgrade', getupgrade);                     // รายการร้องขอ การอัพเกรด
// ! ยกเลิก app.use('/countup', countup);                           // count รายการร้องขอ 
app.use('/protype', protype);                           // อสังหา จาก ประเภท  
app.use('/recommainpage', recommainpage);               // รายการแนะนำ  
app.use('/type', type);                                 // ประเภทอสังหา 
app.use('/sellhouse', sellhouse);                       // รายการ ขาย  
app.use('/selltownhouse', selltownhouse);               // รายการ ขาย  
app.use('/sellapart', sellapart);                       // รายการ ขาย  
app.use('/sellcomm', sellcomm);                         // รายการ ขาย  
app.use('/sellcondo', sellcondo);                       // รายการ ขาย  
app.use('/sellland', sellland);                         // รายการ ขาย  
app.use('/renthouse', renthouse);                       // รายการ เช่า  
app.use('/renttownhouse', renttownhouse);               // รายการ เช่า  
app.use('/rentapart', rentapart);                       // รายการ เช่า  
app.use('/rentcomm', rentcomm);                         // รายการ เช่า  
app.use('/rentcondo', rentcondo);                       // รายการ เช่า  
app.use('/rentland', rentland);                         // รายการ เช่า  
app.use('/list_proWait', list_proWait);                 // รายการ รอตรวจสอบ 
app.use('/count_pro_wait', count_pro_wait);             // นับรายการ รอตรวจสอบ 

app.use('/mypro', mypro);                               // รายการ เจ้าของอสัง
app.use('/myproawait', myproawait);                     // รายการเจ้าของอสัง รอตรวจสอบ
app.use('/myprodraft', myprodraft);                     // รายการ เจ้าของอสัง ฉบับร่าง
app.use('/myproedit', myproedit);                       // รายการ เจ้าของอสัง รอแก้
app.use('/myproclose', myproclose);                     // รายการ เจ้าของอสัง ปิดการขาย
app.use('/countpro', countpro);                         // จำนวนรายการอสังหา ต่อ คน 
app.use('/filter', filter);                             // รายการ filter  
app.use('/poppular', poppular);                         // รายการ ยอดนืยม
app.use('/article', article);                           // รายการ โฆษณา
app.use('/artdetial', artdetial);                       // รายละเอียด โฆษณา
app.use('/requirement', requirement);                   // ความต้องการซื้อ 
app.use('/reqmatch', reqmatch);                         // รายการต้องการ ตรงกัน  
app.use('/gettest', gettest);                           // test
app.use('/getnameavatar', getnameavatar);               // รูป avatar ที่ใช้
app.use('/getnamepro', getnamepro);                     // รูป รายละเอียด property test ที่ใช้
app.use('/proFromLocat', proFromLocat);                 // รายการ เจ้าของอสัง จากเขต
app.use('/proFromProvin', proFromProvin);               // รายการ เจ้าของอสัง จากจังหวัด
app.use('/proFromprice', proFromprice);                 // รายการ ของอสัง จากราคา
app.use('/proFromArea', proFromArea);                   // รายการ ของอสัง จากขนาดพื้นที่
app.use('/profollow', profollow);                       // รายการ ของอสัง ที่ติดตาม
app.use('/follow', follow);                             // เช็ค อสัง ที่ติดตาม
app.use('/guide_price', guide_price);                   // ราคาแนะนำ
app.use('/pro_public', pro_public);                     // รายการ อสัง เผยแพร่











//  todo :update 
app.use('/putlocation', putlocation);                   //  ทำเล
app.use('/putrecom', putrecom);                         // รายการแนะนำ
app.use('/propublish', propublish);                     // สถานะ อสังหา เผยแพร่
app.use('/prodraft', prodraft);                         // สถานะ อสังหา ร่าง
app.use('/promodify', promodify);                       // สถานะ อสังหา แก้ไข
app.use('/proclose', proclose);                         // สถานะ อสังหา ปิดประกาศ
app.use('/proview', proview);                           //  อัพยอดวิว อสังหา
app.use('/artview', artview);                           //  อัพยอดวิว โฆษณา
app.use('/putprofile', putprofile);                     //  อัพเดตโปรไฟล
app.use('/putprolimit', putprolimit);                   //  อัพเดตสิทธิการโพส
app.use('/putavatar', putavatar);                       //  อัพเดต avatar


// todo :insert - post
app.use('/login', loginuser);
app.use('/register', register);                         // สมัครสมาชิก ขาย
app.use('/postlocation', postlocation);                 // เพิ่มทำเล
app.use('/postreq', postreq);                           // เพิ่มความต้องการ
app.use('/postproimage', postproimage);                 // เพิ่มรายการรูป อสังหา
app.use('/postArticle', postArticle);                   // post โฆษณา
app.use('/postFavorate', postFavorate);                 // post รายการชื่นชอบ

// ? page : seller
app.use('/postpro', postpro);                           // เพิ่มอสังหา เนื้อหา
app.use('/poststyle', poststyle);                       // เพิ่มอสังหา style
app.use('/postdraft', postdraft);                       // เพิ่มอสังหา ร่าง
app.use('/postdraftstyle', postdraftstyle);             // เพิ่มอสังหา ร่าง style




// todo :delete
app.use('/deletelocation', deletelocation);
app.use('/deletereq', deletereq);
app.use('/unfollow', unfollow);             // Un follow

// ! ยกเลิก app.use('/deleteupgrade', deleteupgrade);               // ลบรายการ อัพเกรด






// todo : test image

app.use('/upload', upload);                             // อัพรูปเดี่ยว v2
app.use('/uploadmultiple', uploadmultiple);             // อัพรูปหลายรูป v2
app.use('/testGetpro', testGetpro);                     // get test pro

// chat 
app.use('/chat', chat);                                 // get test chat
app.use('/userchat', userchat);                         // get test user chat
app.use('/postchat', postchat);                         // post test chat chat
app.use('/searchuser', searchuser);                     // get test user
app.use('/firstchat', firstchat);                       // get test first chat

app.use('/testgetimage', testgetimage);                           // ลองแสดงรูป

// email
app.use('/email', email);                       // email
app.use('/', socket);



// end part ^^

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});





// todo : Use socket.io 
io.on('connection', function (socket) {
  // แสดงข้อความ "a user connected" ออกมาทาง console
  console.log('a user connected');

  socket.on('new-message', (message) => {
    io.emit(message);
    console.log(message);

  });


});

// ! end todo socket


/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port, () => {
  console.log(`started on port: ${port}`);
});
server.on('error', onError);

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}








module.exports = app;

