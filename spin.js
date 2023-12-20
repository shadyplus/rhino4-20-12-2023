const alert = ()=> {

    var namesArray = ['محمد', 'أحمد', 'محمود', 'ناصر', 'أيمن', 'صلاح'];
    var cityArray = ['الجزائر', 'الجزائر', 'الجزائر', 'الجزائر', 'الجزائر', 'চট্টالجزائرগ্রাম'];
    var alert = document.querySelector('.alert');
    var alertName = alert.querySelector('.alert__name');
    var alertCity = alert.querySelector('.alert__city');
    var alertCount = alert.querySelector('.alert__count');
    var clsAlertShow = 'alert--show';
    var alertInterval = null;
    alertInterval = setInterval(intervalHandler, getRandom(26000, 34000));

    function intervalHandler() {
        if (alert.classList.contains(clsAlertShow)) {
            clearInterval(alertInterval);
            alertInterval = setInterval(intervalHandler, getRandom(26000, 34000));
            return;
        }
        createAlertMessage();
        alertShow();
        setTimeout(function () {
            alertHidden();
        }, 10000);
    }

    function createAlertMessage() {
        var name = namesArray[getRandom(0, namesArray.length - 1)];
        var city = cityArray[getRandom(0, cityArray.length - 1)];
        var count = getRandom(2, 4);
        alertName.textContent = name;
        alertCity.textContent = city;
        alertCount.textContent = count;
    }

    function alertShow() {
        alert.classList.add(clsAlertShow);
    }

    function alertHidden() {
        alert.classList.remove(clsAlertShow);
    }

    function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}





$(function () {
    var wheel = document.querySelector('.wheel-img');
    var resultWrapper = document.querySelector('.spin-result-wrapper');
    var isWheelSpun = localStorage.getItem('isWheelSpun');


    $('.cursor-text').click(function () {
        $(".cursor-text").css("pointer-events","none");
        if (wheel.classList.contains('rotated')) {
            resultWrapper.style.display = "block";
        } else {
            wheel.classList.add('super-rotation');
            setTimeout(function () {
                resultWrapper.style.display = "block";
            }, 8000);
            setTimeout(function () {
                $('.spin-wrapper').slideUp();
                start_timer();
                $('.order_block').slideDown();
                $('.header').slideUp();
                $('.form-title').slideDown();
                $('.footer-wrap').slideDown();
                localStorage.setItem('isWheelSpun', 'true');
                alert();
            }, 8000);
            wheel.classList.add('rotated');
        }
    });

    $('.close-popup, .pop-up-button').click(function (e) {
        e.preventDefault();
        $('.spin-result-wrapper').fadeOut();
        $(".content").animate({
            scrollTop: $(".chat").height()
        }, 700)
    });


    var time = 1200;
    var intr;

    function start_timer() {
        intr = setInterval(tick, 1000);
        $('.timer').addClass('timer--show');
    }


    function tick() {
        time = time - 1;
        var mins = Math.floor(time / 60);
        var secs = time - mins * 60;
        if (mins == 0 && secs == 0) {
            clearInterval(intr);
        }
        secs = secs >= 10 ? secs : "0" + secs;
        mins = mins >= 10 ? mins : "0" + mins;
        $("#min").html(mins);
        $("#sec").html(secs);
    }

    $('[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 800)
    })
})
