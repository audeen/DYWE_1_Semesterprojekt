    window.onscroll = function() {scrollHead()};
    var offsetHeight;

    function scrollHead()
    {
        offsetHeight = document.getElementById('Head').offsetHeight;
        if (document.body.scrollTop > offsetHeight || document.documentElement.scrollTop > offsetHeight)
        {
            document.getElementById("HHheadNav").className = "nav_scroll";
            document.getElementById("Head").className = "head_scroll";
            document.getElementById("logo").className = "logo_scroll";
            document.getElementById("headerline").className = "headerline_scroll";
            document.getElementById("hlnav").className = "hl_nav_scroll";
        }
        else
        {
            document.getElementById("HHheadNav").className = "nav";
            document.getElementById("Head").className = "head";
            document.getElementById("logo").className = "logo";
            document.getElementById("headerline").className = "headerline";
            document.getElementById("hlnav").className = "hl_nav";
        }
    }
