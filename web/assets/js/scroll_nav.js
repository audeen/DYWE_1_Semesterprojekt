    window.onscroll = function() {scrollNav()};
    var offsetHeight;

    function scrollNav()
    {
        offsetHeight = document.getElementById('Head').offsetHeight;
        if (document.body.scrollTop > offsetHeight || document.documentElement.scrollTop > offsetHeight)
        {
            document.getElementById("topNav").className = "nav_border";
            document.getElementById("scroll_nav").className = "nav_logo";
        }
        else
        {
            document.getElementById("topNav").className = "nav";
            document.getElementById("scroll_nav").className = "nav_logo_hidden";
        }
    }
