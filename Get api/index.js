document.getElementById("btnajax").addEventListener("click", makerequest);
function makerequest() {
  console.log("Button Clicked");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
  xhr.responseType = "json"; // automatically parse
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(xhr.response);
    } else {
      console.log("Problem Occured");
    }
  };
  xhr.send();
}
