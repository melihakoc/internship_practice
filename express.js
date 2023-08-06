//express kütüphanesini kullandım
var express = require("express");
var app = express();
var fs = require("fs"); //dosyaya erişiriyorum fs(file system)
var bodyParser = require("body-parser");

app.use(bodyParser.json());

//kullanıcı veritabanı oluşturup içinde kullanıcıları tutucam.
app.get("/listele", function (req, res) {
  fs.readFile("contacts.json", "utf-8", function (err, data) {
    //konsoldan bastırmakla respond ile bastırma arasında fark var
    //birisi obje, diğeri json objesinin içeriğini gösteriyor
    res.send(data);
    console.log(data);
  });
});

// CRUD Methods
// Create - Read - Update   - Delete
// Post   - Get  - Put/Post - Delete, Post

// get /list?bt=500&600

//Front --> Backend --> DB

//bu komutun amacı db olarak kullanacağım json dosyasındaki kullanıcıların listesini ekrana dökmek.
app.post("/ekle", function (req, res) {
  var yenikullanici = [];

  console.log(req.body);

  const { isim, sifre, mail } = req.body;
  ///

  yenikullanici.push({
    mail,
  });

  console.log(yenikullanici);

  fs.readFile("contacts.json", "utf-8", function (err, data) {
    data = JSON.parse(data); //datanın herhangi bir elemanına ulaşmak için önce bunu parçlamamız gerekiyor.
    data["kullanici3"] = yenikullanici["kullanici3"]; //dizi oluşturduk
    console.log(data);
    res.end(JSON.stringify(data)); // http responsu olarak yazarken stringe çevirmemiz gerekiyor.
    //oluşturduğum datayı sunucuya kaydetmek istiyorum
    fs.writeFile("contacts.json", JSON.stringify(data), function (err) {
      console.log("hata oluştu");
    });
  });
});

app.delete("/sil", function (req, res) {
  fs.readFile("contacts.json", "utf-8", function (err, data) {
    data = JSON.parse(data);
    delete data["kullanici3"];
    console.log(data);
    res.end(JSON.stringify(data)); // http responsu olarak yazarken stringe çevirmemiz gerekiyor.
    //oluşturduğum datayı sunucuya kaydetmek istiyorum
    fs.writeFile("contacts.json", JSON.stringify(data), function (err) {
      console.log("hata oluştu");
    });
  });
});

//express kütüphanesinden bir obje oluşturdum

var server = app.listen(3000, function () {
  console.log("sunucu calisiyor");
});
//objenin listen metodunu çağırarak 8bin numaralı portta bir de fonksiyon vererek çalıştırdım
