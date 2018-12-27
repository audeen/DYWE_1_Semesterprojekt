function HHfootMenu()
{
    var x = document.getElementById("HHfootNav");
    if (x.className === "foot_nav")
    {
        x.className += " responsive";
    }
    else
    {
        x.className = "foot_nav";
    }
}
