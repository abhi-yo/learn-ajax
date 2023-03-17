document.getElementById("btnajax").addEventListener("click", makerequest);
function makerequest() {
  console.log("Button Clicked");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "data.txt", true);
  xhr.withCredentials = true;
  xhr.responseType = "text";
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log("XHR object", xhr);
      console.log("Response text", xhr.responseText);
      console.log("statusText", xhr.statusText);
      console.log("reesponse", xhr.response);
      console.log("responseUrl", xhr.responseURL);
      console.log("withCredentials", xhr.withCredentials);
      console.log(xhr.getResponseHeader("LAST-Modified"));
      console.log(xhr.getAllResponseHeaders());
    } else {
      console.log("Problem Occured");
    }
  };
  xhr.send();
}
