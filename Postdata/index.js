document.getElementById("btnajax").addEventListener("click", makerequest);
let table = document.getElementById("table");
function makerequest() {
  console.log("Button Clicked");
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
  xhr.responseType = "json"; // automatically parse
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(xhr.response);
      document.getElementById("info").innerText = "Data Inserted";
    } else {
      console.log("Problem Occured");
    }
  };
  mydata = '{"name":"Sonam","salary":"10","age":"25"}';
  xhr.send(mydata);
}
