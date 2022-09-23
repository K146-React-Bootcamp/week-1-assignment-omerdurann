// Session Stronge 

// Session Stronge kullanarak tarayıcımızda geçici bilgilerin saklandığının örneğini yapacağız

// Butonları seçmek

const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

// Inputlar

const addkey = document.querySelector("#addkey");
const addvalue = document.querySelector("#addvalue");
const deletekey = document.querySelector("#deletekey");

add.addEventListener("click",addItem);
del.addEventListener("click",deleteItem);
clear.addEventListener("click",clearItem);

function addItem(e) {
    sessionStorage.setItem(addkey.value, addvalue.value);
}
function deleteItem(e) {
    sessionStorage.removeItem(deletekey.value);
}
function clearItem(e) {
    sessionStorage.clear();
}

// Cookie 

// Cookie sayesinde tarayıcımızda bilginin kalmasını istediğimiz süreyi kedimiz seçebileceğiz

function createCookie(cookieName,cookieValue,daysToExpire) {
    var date = new Date();
    date.setTime(date.getTime()+(daysToExpire*24*60*60*1000));
    document.cookie = cookieName + "=" + cookieValue + "; expires=" + date.toGMTString();
}
function accessCookie(cookieName) {
    var name = cookieName + "=";
    var allCookieArray = document.cookie.split(';');
    for(var i=0; i<allCookieArray.length; i++){
        var temp = allCookieArray[i].trim();
        if (temp.indexOf(name)==0)
        return temp.substring(name.length,temp.length);
      }
  	return "";
}
function checkCookie() {
    var user = accessCookie("testCookie");
    if (user!="")
    alert("Tekrardan Hoşgeldin " + user + "!!!");
    else{
        user = prompt("Lütfen isminizi giriniz :)");
        num = prompt("İsminizi tarayicinizda kaç gün kalmasini istiyorsunuz? :)");
        if (user!="" && user!=null){
            createCookie("testCookie", user, num);
            }
    }
}