let hostname = window && window.location && window.location.hostname;

if (hostname.indexOf("localhost") > -1) {
  hostname = "http://127.0.0.1:5000/api";
} else {
  hostname = "https://bcg-gamma.herokuapp.com/api";
}

export default hostname;
