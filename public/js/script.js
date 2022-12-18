const underline1 = document.querySelector(".underline1");
const underline2 = document.querySelector(".underline2");
const underline3 = document.querySelector(".underline3");
     
    var mq = window.matchMedia("(max-width: 430px)");
    if (mq.matches) {
        underline1.insertAdjacentHTML("afterend", '<div class="block1"><div class="text">Calcium 12322, New York</div> <div class="princeandlink"> <div class="prince">$948</div><div class="link"><a href="">More info</a></div></div></div>');
        underline2.insertAdjacentHTML("afterend", "<div class='block2'><div class='text'>California 129067</div><div class='princeandlink'><div class='prince'>$777</div> <div class='link'><a href=''>More info</a></div></div></div>");
        underline3.insertAdjacentHTML("afterend", '<div class="block3"><div class="text">Illinois 905689</div><div class="princeandlink"><div class="prince">$535</div><div class="link"><a href="">More info</a></div></div> </div>');
    }
    