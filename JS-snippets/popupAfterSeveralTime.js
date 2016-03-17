function onPageLoad(){		
	If Cookie Doesn't exist for your site		
	Create Cookie		
	Record Timestamp		
	//Start Checking the cookie to see if		
	//it's time to show the popup		
	checkCookieTime()		
}		
function checkCookieTime(){		
// Check to see if at least 3 minutes		
// Have elapsed from the time of the cookie's		
// cookie's creation		
If Now is >= (Cookie.TimeStamp  + 3 minutes )		
	popSignupForm()		
	Else		
// Check again in 10 Seconds		
	setTimeout( function(){		
	checkCookieTime()		
	}, 10000 );		
}		