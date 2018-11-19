    window.onscroll = function() {scrollNav()};
    var offsetHeight;

    function scrollNav()
    {
        offsetHeight = document.getElementById('Head').offsetHeight;
        if (document.body.scrollTop > offsetHeight || document.documentElement.scrollTop > offsetHeight)
        {
            /* document.getElementById("HHheadNav").className = "nav_border"; */
            document.getElementById("scroll_nav").className = "nav_logo";
        }
        else
        {
            document.getElementById("HHheadNav").className = "nav";
            document.getElementById("scroll_nav").className = "nav_logo_hidden";
        }
    }
