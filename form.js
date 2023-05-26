function errorHandler()
{
    let text=document.getElementById("value").value
    let error=document.getElementById("error")
    if (text.length<8)
    {
        error.innerHTML="should be more than 8 char"
    }
    else{
        error.innerHTML="everything okay"

    }
}