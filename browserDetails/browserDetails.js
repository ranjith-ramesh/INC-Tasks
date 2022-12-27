
let screenHeight, screenWidth, browserName, browserVersion, whole;
function fl(){
	screenHeight = document.getElementById("sh");
	screenWidth  = document.getElementById("sw");
	browserName  = document.getElementById("brn");
	browserVersion= document.getElementById("brv");
	statusT= document.getElementById("statusT");
	screenHeight.innerText = screen.height;
	screenWidth.innerHTML =  screen.width;whole = document;
	let userA = JSON.stringify(navigator.userAgent);
	let tempBoolean = navigator.onLine;
	if(tempBoolean){statusT.innerText="Connected"}
	else{statusT.innerText="Not Connected"}
	if(userA.match(/safari/i)!== null && userA.match(/chrome/i)== null)
					{
			        browserName.innerHTML = "Safari";
		            let brv = userA.split('Safari/')[1];
	         		browserVersion.innerHTML = brv.slice(0,7);
	 				}
		           else 
		           	{
					 if(userA.match(/opr\//i)!== null)
					 {
		             browserName.innerHTML = "Opera";
		             let brv = userA.split('Opera/')[1];
		             browserVersion.innerHTML = brv.slice(0,3);
		           	 }
		           else
		            {
					if(userA.match(/firefox/i)!== null)
					 {
		             browserName.innerHTML = "Firefox";
		             let brv = userA.split('Firefox/')[1];
             		 browserVersion.innerHTML = brv.slice(0,5);
			         }
		           else 
		            {let userAgent = JSON.stringify(navigator.userAgentData.brands);
					if(userA.match(/chrome/i) !== null && userAgent.match(/google chrome/i) !== null )
					{	
		             browserName.innerHTML = "Google chrome";
		             let brv = userA.split('Chrome/')[1];
		             browserVersion.innerHTML = brv.slice(0,13);
           			}
          			else 
          			{
					if(userAgent.match("Edg")!== null)
					 {
		             browserName.innerHTML = "Microsoft-edge";
		             let brv = userA.split('Edg/')[1];
		             browserVersion.innerHTML = brv.slice(0,13);
		           	 }
		           else 
		           	{browserName.innerHTML="No browser detection";
		           } } } } } } 