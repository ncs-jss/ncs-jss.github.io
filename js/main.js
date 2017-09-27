// document.addEventListener("load", function(event) {
$(window).bind("load", function () {
    $(document).ready(function () {
        $("#main-body").removeClass("unloaded");
        // $(".preloader-wrapper").hide();
        $(".preloader-wrapper").fadeOut("slow");
        $(".image-gallery-wrapper").addClass("loaded");
        $(".back-button").on("click", function () {
            window.history.back();
        });
        $.get("partials/sidebar-modal.html", function (data) {
            $(".modal-wrapper").html(data);
            $("#menuModal").on('show.bs.modal', function () {
                console.log('show');
                $(".float-menu .hamburger").addClass("closed");
            });
            $("#menuModal").on('hide.bs.modal', function () {
                $(".float-menu .hamburger").removeClass("closed");
            });
        });
        var route = $("body").data("page");
        // var baseUrl = "http://techtrek.hackncs.com/api/";
        var baseUrl = "/partials/";
        switch (route) {
        case "home":
            var textFields = $(".toi-text");
            var imgFields = $(".images-list img");
            if (imgFields.length > 0 && textFields.length > 0) {
                var activeImg = 0;
                var activeText = 0;
                var len = textFields.length;

                function changeImg() {
                    $(imgFields[activeImg]).removeClass("visible");
                    activeImg = (activeImg + 1) % len;
                    $(imgFields[activeImg]).addClass("visible");
                }

                function changeText() {
                    $(textFields[activeText]).removeClass("visible");
                    activeText = (activeText + 1) % len;
                    $(textFields[activeText]).addClass("visible");
                }
                setInterval(changeText, 4000);
                setInterval(changeImg, 4000);
            }
            var address = baseUrl + "upcomingEvent.json";
            $.get(address, function (data) {
                var imgUrl = data.image;
                $("#event-description").html(data.desc);
                $("#event-image").attr("src", imgUrl);
            });
            onePage();
            // home ends
            break;
        case "register":
            console.log('register');
            var address = baseUrl + "studentRegister";
            var $input = $('.form-fieldset > input');
            $input.blur(function (e) {
                $(this).toggleClass('filled', !!$(this).val());
            });
            console.log($input);
            var submitBtn = $('#register-form input[type=submit]');
            submitBtn.on("click", function () {
                if ($('#register-form:valid').length > 0) {
                    var formData = {
                        name: $input.eq(0).val(),
                        email: $input.eq(1).val(),
                        contactNo: $input.eq(2).val(),
                        admissionNumber: $input.eq(3).val(),
                        year: $input.eq(4).val()
                    }
                    $.post(address, formData, function (data) {
                        console.log(data);
                    });
                }
            });
            break;
        case "team":
            onePage();
            break;
        case "events":
            var address = baseUrl + "events.json";
            $.get(address, function (data) {
                sessionStorage.setItem("events", JSON.stringify(data));
                var parent = $(".cd-gallery");
                var section = $(".cd-gallery .section").eq(0);
                var item = section.find(".cd-item");
                var imgBase = "/media/events/";
                //First Image
                var imgUrl = imgBase + data[0].image;
                item.eq(0).css('background-image', 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(..' + imgUrl + ')');
                item.find("a").eq(0).attr("href", 0);
                //Second Image
                imgUrl = imgBase + data[1].image;
                item.eq(1).css('background-image', 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(..' + imgUrl + ')');
                item.find("a").eq(1).attr("href", 1);
                var len = data.length;
                var i = 2;
                for (; i < len; i += 2) {
                    var node = section.clone(true);
                    item = node.find(".cd-item");
                    imgUrl = imgBase + data[i].image;
                    item.eq(0).css('background-image', 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(..' + imgUrl + ')');
                    item.find("a").eq(0).attr("href", i);
                    //Second Image
                    imgUrl = imgBase + data[i + 1].image;
                    item.eq(1).css('background-image', 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(..' + imgUrl + ')');
                    item.find("a").eq(1).attr("href", i + 1);
                    node.appendTo(parent);
                }
                //at last add plugins
                var jsString = '<script type="text/javascript" src="/js/jquery.onepage-scroll.min.js"></script><script src="/js/folding-panel.js" type="text/javascript" charset="utf-8"></script>';
                $(jsString).appendTo("body");
                onePage();
            });
            break;
        }

        function onePage() {
            var pages = $("#full-page").children(".section");
            $("#top").hide();
            if (pages.length > 0) {
                $("#full-page").onepage_scroll({
                    sectionContainer: ".section",
                    loop: false,
                    pagination: false,
                    updateURL: false,
                    beforeMove: function (index) {
                        // console.info(index);
                        index -= 1;
                        switch (index) {
                        case 1:
                            break;
                        case 2:
                            break;
                        case 3:
                            $(".stats-grid-box").removeClass("anim-in-view");
                            break;
                        case 4:
                            // animated fadeInDown
                            break;
                        }
                    },
                    afterMove: function (index) {
                        switch (index) {
                        case 1:
                            break;
                        case 2:
                            break;
                        case 3:
                            $(".stats-grid-box").addClass("anim-in-view");
                            break;
                        }
                        if (index === pages.length) {
                            console.log('bottom' + index);
                            $(".arrow-wrapper:not(#top)").hide();
                            $("#top").show();
                        } else {
                            $(".arrow-wrapper:not(#top)").show();
                            $("#top").hide();
                        }
                    }
                    // anim-in-view
                });
                $(".arrow-wrapper").on("click", function () {
                    var dir = $(this).attr('id');
                    console.log();
                    if (dir === "top") {
                        console.log('up');
                        $("#full-page").moveTo(1);
                    } else {
                        $("#full-page").moveDown();
                    }
                });
            }
        }
    })
});
