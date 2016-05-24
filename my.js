exports.parse = function(url) {

	function isUrlValid(userInput) {

	    //var res = userInput.match();
	    if(/http/g.test(userInput) && /www/g.test(userInput)){
             
		return true;
	    }else{
               
		return false;
            }
	}
  //validation
  if(!isUrlValid(url)){
    return  null;
  }

  let parsed = require('url').parse(url);
  return {
	    url : parsed.href,
	    host: parsed.host,
	    port: parsed.port,
	    file: parsed.pathname,
	    path: parsed.path
	};
}
