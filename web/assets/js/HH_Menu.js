function HH_Menu()
{
    var x = document.getElementById("HH_Nav");
    if (x.className === "nav")
    {
        x.className += " responsive";
    }
    else if (x.className === "nav_border")
    {
        x.className += " responsive";
    }
        else
    {
        x.className = "nav";
    }
}
