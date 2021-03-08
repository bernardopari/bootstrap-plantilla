function sendMail(params) {
    var tempParams = {
    from_name: document.getElementById("fromName").Value,
    to_name: document.getElementById("toName").Value,
    message: document.getElementById("msg").Value,
    };

    emailjs.send('gmail','template_e7zg27w',tempParams)
    .then(function(res){
      console.log("success", res.status);
    })
}