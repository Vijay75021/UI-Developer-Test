function getUrlParameterValue(url, parameter) {
 var vars = url.split("?");
  var parameters=vars[1].split("&");
  for(var i=0;i<parameters.length;i++){
    var pairs=parameters[i].split("=")
    if(pairs[0]==parameter){
      return pairs[1]
    }
  }
}
