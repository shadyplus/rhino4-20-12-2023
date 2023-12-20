setTimeout("$('.body').css('transform','translateY(0)');", 1e3), setTimeout("$('.main-desc').addClass('b-show')", 1500), setTimeout("$('body').addClass('add-scroll')", 3e3), setTimeout("$('html').addClass('add-scroll')", 3e3), $(".glow-button").on("click", function () {
    $(".comment-item").addClass("comment-item-show"), $(".glow-button").addClass("hide"), $(".shine-button").addClass("show")
});
const OFFER = "RHINOXX";
let now = new Date,
    mm = now.getMonth() + 1,
    day = now.getDate(),
    year = now.getFullYear(),
    date = day + "." + mm + "." + year;
const massange = [{
    m: "    مرحبًا! أنا Davis P. Viprakasit  أستاذ مساعد جراحة المسالك البولية .  . أقوم هنا بإجراء تشخيصات مجانية وتقديم توصيات شخصية ساعدت العديد من  الرجال على التخلص من مشاكل البروستات و إلتهاب البروتات المزمن  . "
}, {
    m: "أعتقد انه انت هنا لانه لديك مشكلة بالبروستات و لا تستطيع التخلص منها . و أنا هنا اليوم لمساعدتك على التخلص من مشاكل البروستات لديك . أعتقد أيضاً انك جربت العديد من المنتجات الكيميائية لتتخلص من هذه مشاكل البروستات  و لكن جميعها كانت دون جدوى أو على الأقل مفعولها كان مؤقتاً و لكن لا تقلق كل شيء سيكون بخير ."
}, {
    m: "فقط عليك الإجابة على بعض الأسئلة حتى أستطيع مساعدتك و معرفة حالتك أكثر ."
}, {
    m: '<p class="quest">كم عمرك ؟  </p>'
}, {
    m: '<p class="quest">ما هي الأعراض الأكثر وضوحا بالنسبة لك؟</p>'
}, {
    m: '<p class="quest">كم المدة التي تعاني فيها من هذه المشكلة؟</p>'
}, {
    m: '<p class="quest">هل جربت تناول مواد كيميائية للتخلص من مشكلتك ؟  </p>'
}, {
    m: '<p class="quest">هل تدخن ؟ </p>'
}, {
    m: '<p class="quest">هل تشتكي  شريكتك او زوجتك  من جودة ومدة ممارسة الجنس؟ </p>'
}, {
    m: "شكرا على الرد. لن أطمئنك عبثًا: مشاكل البروستات  لها عواقب إجرائية معقدة وهي يمكن ان تؤدي بك إلى العجز الجنسي و في هذه الحالة، لا فائدة من الاستعانة بالمواد الكيميائية التي ليس لها أي قيمة أو فائدة . "
}, {
    m: "عليك أن تفهم أن مشاكل البروستات   ليس مجرد مشكلة صحية و ستمر مرور الكرام . و لكن هي مشكلة خطيرة للغاية، إذا تركتها دون حل سريع و أمن ، فإنه يمكن أن يسبب  لك مشاكل جنسية و ضعف جنسي و ركود في السائل المنوي  و به يؤدي إلى سرطان البروستات  ويمكن لهذه المشكلة  أن تقتل المصاب  في غضون بضع سنوات."
}, {
    m: "يمكن أن تتطور مشاكل البروستات  ببطء،لكن هذه المشكلة  مثل القنبلة الموقوتة التي لا تنفجر على الفور، ولكن لديها فرصة 100% للانفجار عاجلاً أم آجلاً."
}, {
    m: "وحتى وقت قريب، لم تكن هناك طريقة فعالة للتخلص من مشاكل البروستات  لدى الرجال  بشكل كامل. إذا تم تشخيصك انك مصاب بمشاكل بالبروستات  او  بالعجز الجنسي، فإن الحل  الأكثر احتمالا لحالتك الذي يمكن إعطاؤه هو أي منتج كيميائي يمكنه  تنشيط البروستات أكثر و توسيع الأوعية الدموية للعضو  الذكري لديك ، و للأسف هذا الشيء يدمر البروستات  ببطء ويجهد القلب بشكل كبير."
}, {
    m: "ونظراً لتعقيد الوضع لديك  وأهمية حل هذه المشكلة  في أسرع وقت ممكن، فإنني لن أعرض عليك مواد كيميائية عديمة الفائدة. لا يمكن لأي منهم مساعدتك حقًا في هذه حالتك  . "
}, {
    m: "الحل الأكثر فعالية للتخلص من مشاكل البروستات  و زيادة القوة الجنسية في خلال اسابيع  هو إستخدام مكمل غذائي طبيعي مثل : \"RHINOXX\"."
}, {
    m: "بمجرد إستخدامك للمكمل الغذائي RHINOXX    ستتخلص من مشكلة ضعف تدفق البول وصعوبة في بدء التبول و مشكلة التبول المتكرر، خاصةً في الليل و مشكلة وجود دم في البول أو السائل المنوي و التخلص من الألم في منطقة الحوض أو الظهر . ستحصل على حياة هادئة بدون مشاكل البروستات المزعجة ."
}, {
    m: "هذا المكمل الغذائي هو منتج  فريد من نوعه، وليس له نظائر في الخارج وفي الجزائر . "
}, {
    m: ' <img src="img/prod.png" class="product-img" style="width: 100%; max-width: 240px;">'
}, {
    m: "يساعد حتى في الحالات المتقدمة والشديدة،و ينشط  وظيفة الجهاز التناسلي الذكري  و يساعد بنسبة كبير في التخلص من مشاكل البروستات لدى الرجال  في أي عمر و يمكن إستخدامه لأي شخص فوق 18 عاماً . والأهم من ذلك أنه يمكن استخدامه ببساطة في المنزل. "
}, {
    m: "نجح هذا المكمل الغذائي في الحصول على رضا كل من إستخدمه لأنه منتج طبيعي 100% و حلال 100% و ليس به أي مواد كيميائية ضارة ."
}, {
    m: "يتميز هذا المنتج بتركيبته الطبيعية تماما وتركيبته الفريدة التي تؤثر على البروستات مباشرةً . يحتوي على المكونات التالية:  الجينسينج الاحمر  ، نبات القراص، الماكا  ، التورين ، الزنجبيل ، تونكة علي    ."
}, {
   m: ' <img src="img/message-img.jpeg"> '
}, {
    m: "تستخدم تونكات علي   في الطب التقليدي لزيادة الطاقة وتحسين الصحة الجنسية ودعم البروستات و زيادة نشاطها الهرموني وتقوية الجسم بشكل عام وخاصة البروستات و  الخصوبة والمناعة. "
}, {
    m: "الآثار الرئيسية التي يمكن توقعها بعد استخدام المكمل الغذائي RHINOXX : زيادة الانتصاب،إختفاء مشاكل البروستات ،التخلص من مشكلة التبول المتكرر و مشاكل التبول عموماً و التخلص من إلتهاب البروستات ،و تكبير العضو الذكري . "
}, {
    m: "العديد  من الرجال في الجزائر  الذين تناولوا RHINOXX أكدوا فعاليته منذ الإستخدام الأول، كما إختفت لديهم أعراض مشاكل البروستات و إلتهاب البروستات المزعجة و  أيضاً حصلوا على زيادة في القوة الجنسية و تخلصوا بنسبة كبيرة من مشكلة القذف السريع . "
}, {
    m: 'سوف أظهر لك الأن  أراء حقيقية  من المحظوظين اللذين جربوا هذا المكمل الغذائي : '
}, {
    m: ' <img src="img/1.png?v2"> '
}, {
    m: '<img src="img/2.png?v2">'
}, {
    m: '<img src="img/3.png?v2"> '
}, {
    m: "لدي نبأ عظيم بالنسبة لك. لقد تم تشخيص حالتك عبر الإنترنت وأصبحت عميلي رقم 2000."
},
 {
    m: "يمكنك الحصول على RHINOXX بالمشاركة في مسابقة حصرية عن طريق تدوير عجلة الحظ التي ستظهر لك بالأسفل و إذا كنت محظوظاً سوف تتمكن من الحصول على تخفيض قد يصل إلى  65% عند شرائك دورة RHINOXX و بعد ذلك سيظهر لك نموذج الطلب لملئ إسمك و رقم هاتفك في نموذج الطلب أدناه. عدد الحزم الترويجية محدود، لذا أنصحك بالحصول على طلبك بسرعة."
}];

var mass_id = 0,
    length_mass = 0,
    lengt_num_mas = 0,
    text = "",
    speedtext = 65,
    process = !0;

function app() {
    var e = new Date,
        s = ("0" + e.getMinutes()).slice(-2),
        t = ("0" + e.getHours()).slice(-2) + ":" + s;
    if ($(".chat").height() + 100 > $(".content").height()) {
        $("#scroll_id").removeClass("hide");
        var n = $(".inp").val();
        $(".inp").val(++n)
    }
    const c = '<div class="chat-content-item manager "><div class="chat-content-desc"><div class="chat-content-desc-item manager ch1"><p class="text text_img" id="mass' + mass_id + '"></p><p class="message-time" id="time">' + t + '</p></div></div></div>';
    $(".chat-content-list").append(c);
    $(".content").animate({
        scrollTop: $(".chat").height()
    }, 700)
}

function myMassange(e) {
    var s = new Date,
        t = ("0" + s.getMinutes()).slice(-2);
    let n = `<div class="chat-content-item user item-active"><div class="chat-content-desc"><div class="chat-content-desc-item user"><p class="text" class="users_mass"> ${e} </p><p class="message-time new_time" id="time">${ (("0" + s.getHours()).slice(-2) + ':' + t)  }</p></div></div></div>`;
    $(".chat-content-list").append(n), $(".content").animate({
        scrollTop: $(".chat-content-list").height()
    }, 700), $("#scroll_id").addClass("hide")
}

function question1() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question1M">أقل من 20 عاماً</span></div><div class="chat-content-buttons-gender-block"><span class="question1W">بين 21-30</span></div><div class="chat-content-buttons-gender-block"><span class="question1P">بين 31-40</span></div><div class="chat-content-buttons-gender-block"><span class="question1T">أكبر من 40 عاماً </span></div></div>')
}

function choise1() {
    $(".question1M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أقل من 20 عاماً"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question1W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("بين 21-30"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question1P").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("بين 31-40"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question1T").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أكبر من 40 عاماً "), setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question2() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question2M">االتبول المتكررة</span></div><div class="chat-content-buttons-gender-block"><span class="question2W">ضعف الإنتصاب </span></div><div class="chat-content-buttons-gender-block"><span class="question2P">سرعة القذف </span></div><div class="chat-content-buttons-gender-block"><span class="question2T">ألم في منطقة الحوض أو الظهر</span></div></div>')
}

function choise2() {
    $(".question2M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("التبول المتكرر"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question2W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("ضعف الإنتصاب "), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question2P").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("سرعة القذف "), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question2T").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("ألم في منطقة الحوض أو الظهر"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question3() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question3M">سنة واحدة على الأقل </span></div><div class="chat-content-buttons-gender-block"><span class="question3W">من 1-3 سنوات</span></div><div class="chat-content-buttons-gender-block"><span class="question3P">أكثر من 3 سنوات</span></div></div>')
}

function choise3() {
    $(".question3M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("سنة واحدة على الأقل "), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question3W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("من 1-3 سنوات"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question3P").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أكثر من 3 سنوات"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question4() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question4M">نعم</span></div><div class="chat-content-buttons-gender-block"><span class="question4W">لا</span></div></div>')
}

function choise4() {
    $(".question4M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("نعم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question4W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("لا"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question5() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question5M">نعم</span></div><div class="chat-content-buttons-gender-block"><span class="question5W">لا</span></div></div>')
}

function choise5() {
    $(".question5M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("نعم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question5W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("لا"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question6() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question6M">نعم</span></div><div class="chat-content-buttons-gender-block"><span class="question6W">لا</span></div></div>')
}

function choise6() {
    $(".question6M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("نعم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question6W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("لا"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}




setTimeout(() => {


    var e = new Date,
        s = ("0" + e.getMinutes()).slice(-2);
    const t = '<div class="chat-content-item manager "><div class="chat-content-desc"><div class="chat-content-desc-item manager ch1"><p class="text" id="mass' + mass_id + '"></p><p class="message-time" id="time">' + (("0" + e.getHours()).slice(-2) + ":" + s) + '</p></div></div></div>';
    $(".chat-content-list").append(t), $("#scroll_id").click(function (e) {
        $(this).removeClass("hide-q"), $(".content").animate({
            scrollTop: $(".chat").height()
        }, 700)
    });
    const n = setInterval(function () {
        if (1 == process)
            if (lengt_num_mas != massange.length) {
                if (text += massange[lengt_num_mas].m[length_mass], length_mass++, $("#mass" + lengt_num_mas).html(text), 3 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question1(), process = !1, choise1(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 4 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question2(), process = !1, choise2(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 5 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question3(), process = !1, choise3(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 6 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question4(), process = !1, choise4(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 7 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question5(), process = !1, choise5(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 8 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question6(), process = !1, choise6(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 9 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question7(), process = !1, choise7(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), length_mass == massange[lengt_num_mas].m.length) {
                    lengt_num_mas++, mass_id++, length_mass = 0, text = "", app();
                
                }
                
            } else clearInterval(n), $("#mass" + lengt_num_mas).parent().parent().parent().css("display", "none"), $(".iframe-form").addClass("show"), $(".btn-top").addClass("show")
    }, speedtext)
}, 1e3);
var $marker = $("#down-box");
// $(".content").scroll(function() {
//     $(".content").scrollTop() + $(".content").height() >= $(".chat").height() + 100 ? (document.getElementById("res").value = "0",  : $("#scroll_id").removeClass("hide")
// });

function viewDiv() {
    document.getElementById("div1").style.display = "block";
    document.querySelector(".content").style.opacity = "0.5";
};

function viewDiv2() {
    document.getElementById("div1").style.display = "none";
    document.querySelector(".content").style.opacity = "1";

};

function viewDiv3() {
    document.getElementById("div1").style.display = "none";
    document.querySelector(".content").style.opacity = "1";

};

function viewDiv4() {
    document.getElementById("div1").style.display = "block";
    document.querySelector(".content").style.opacity = "0.5";

};