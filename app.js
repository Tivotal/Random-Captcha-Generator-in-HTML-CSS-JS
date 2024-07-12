/* Created by Tivotal */

let captchaTxt = document.querySelector(".captcha-text");
let refreshBtn = document.querySelector(".refresh-btn");

let captcha = "";

let generateCaptcha = () => {
  const randomString = Math.random()
                      .toString(36)
                      .substring(2, 7);
  const randomStringArray = randomString.split("");
  const changeString = randomStringArray.map((char) =>
    Math.random() > 0.5 
    ? char.toUpperCase() 
    : char
  );
  captcha = changeString.join("   ");
  captchaTxt.value = captcha;
};

refreshBtn.addEventListener("click", generateCaptcha);
generateCaptcha();
