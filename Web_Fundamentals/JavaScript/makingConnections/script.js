//This variable and function will change the profile name
//Select name to change via id
var mainName = document.querySelector("#mainName");
//Upon click of the edit profile text, the 
//function switchName will change the profile name
function switchName() {
    mainName.innerText = "Harry Sasquatch";  
}

//This variable set and function will remove the 
//connection and alter the counts on the request connection
//and connections card
var icon = document.querySelector(".icon");
var requestCount = document.querySelector("#requestCount");
var connectCount = document.querySelector("#connectCount")
var count = 2;
var count2 = 418;

function removePerson(element) {
    count--;
    count2++;
    requestCount.textContent = count;
    connectCount.textContent = count2;
    element.remove();
}
