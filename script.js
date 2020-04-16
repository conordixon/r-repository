
// Form Script

function sendingFunction()	{
      valid = true;
  
      if ( document.forms["contact_form"]["name"].value == "" )
      {
          alert ( "Please type in your name." );
          valid = false;
      } else if( document.forms["contact_form"]["email"].value == "" )
      {
          alert ( "Please type in your email." );
          valid = false;
      } else if( document.forms["contact_form"]["subject"].value == "reset" )
      {
          alert ( "Please select your subject." );
          valid = false;
      } else if( document.forms["contact_form"]["feedback"].value == "" )
      {
          alert ( "Please type in your message." );
          valid = false;
      } else{
          alert (" We will contact you as soon as possible")
          valid = true;
      }
  
      return valid;
}

// Menu Script


function toggleMenu(){
  if (navbar.style.display ==="none"){
    navbar.style.display="block";
  }else{
    navbar.style.display="none";
  }
}