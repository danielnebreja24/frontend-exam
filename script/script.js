let toggle = false;

$("#playVideo").click(() => {
  alert();
  $("#home").html(`<iframe id="myVideo" width="100%" height="100%"
  src="https://www.youtube.com/embed/0BkvpEpbItI?&vq=hd720&rel=0&playlist=0BkvpEpbItI&enablejsapi&mute=1&autoplay=1"
  title="YouTube video player" allowtransparency="true" frameborder="0" allowfullscreen></iframe>`);
});

$("#homePlay-btn").click(() => {
  $("#home").html(`<iframe id="myVideo" width="100%" height="100%"
  src="https://www.youtube.com/embed/0BkvpEpbItI?&vq=hd720&rel=0&playlist=0BkvpEpbItI&enablejsapi&mute=1&autoplay=1"
  title="YouTube video player" allowtransparency="true" frameborder="0" allowfullscreen></iframe>`);
});

$(function () {
  $(".menu1").on("click", () => {
    $(this).addClass("activeMenu").siblings().removeClass("activeMenu");
  });
});

$(function () {
  $(
    "#section3Content > div:first-child"
  ).html(`<iframe id="myVideo" width="100%" height="100%"
  src="https://www.youtube.com/embed/0BkvpEpbItI?&vq=hd720&rel=0&playlist=0BkvpEpbItI&enablejsapi"
  title="YouTube video player" allowtransparency="true" frameborder="0" allowfullscreen></iframe>`);
  $(".menu3").on("click", function () {
    $(this).addClass("activeMenu3").siblings().removeClass("activeMenu3");
  });
});

$("#video").click(() => {
  $("#section3Content > div:first-child")
    .html(`<iframe id="myVideo" width="100%" height="100%"
  src="https://www.youtube.com/embed/0BkvpEpbItI?&vq=hd720&rel=0&playlist=0BkvpEpbItI&enablejsapi&mute=1&autoplay=1"
  title="YouTube video player" allowtransparency="true" frameborder="0" allowfullscreen></iframe>`);
});

$("#photo").click(() => {
  $("#section3Content > div:first-child").html(
    `<img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"  alt="Photography" />`
  );
});

$("#social").click(() => {
  $("#section3Content > div:first-child").html(
    `<img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"  alt="Photography" />`
  );
});

$("#PR").click(() => {
  $("#section3Content > div:first-child").html(
    `<img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"  alt="Photography" />`
  );
});

$("#radio").click(() => {
  $("#section3Content > div:first-child").html(
    `<img src="https://images.unsplash.com/photo-1604838577951-fc3334039881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="Photography" />`
  );
});

$("#toggleMenu").click(() => {
  console.log(toggle);
  if (toggle) {
    $("#menuHeader").removeClass("openHeader");
    $("#menuHeader").addClass("closeHeader");
    toggle = false;
  } else {
    $("#menuHeader").removeClass("closeHeader");
    $("#menuHeader").addClass("openHeader");
    toggle = true;
  }
});

// ACTIVE HEADER MENU WHEN SCROLLING

var lastId,
  topMenu = $(".mainHead-home"),
  topMenuHeight = topMenu.outerHeight() + 15,
  menuItems = topMenu.find("a"),
  scrollItems = menuItems.map(function () {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });

$(window).scroll(function () {
  var fromTop = $(this).scrollTop() + topMenuHeight;

  var cur = scrollItems.map(function () {
    if ($(this).offset().top < fromTop) return this;
    // console.log(this);
  });
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    for (let i = 0; i < $(menuItems).length; i++) {
      let selMenu = $(menuItems[i]);
      let selHref = selMenu.attr("href").replace("#", "");

      if (selHref === id) {
        selMenu.addClass("activeMenu").siblings().removeClass("activeMenu");
      }
    }
  }
});
