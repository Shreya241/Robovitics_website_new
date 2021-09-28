(function($) {
    var slide = function(ele,options) {
        var $ele = $(ele);
        var setting = {
            speed: 500,
            interval: 2000,  
        };
        $.extend(true, setting, options);
        var states = [
            { $zIndex: 2, width: "20%", height: "20%", top: "10vh", left: "32%", $opacity: 0.4 },
            { $zIndex: 3, width: "25%", height: "50%", top: "5%", left: "20%", $opacity: 0.7 },
            { $zIndex: 4, width: "30%", height: "60%", top: 0, left: "25%", $opacity: 1 },
            { $zIndex: 3, width: "25%", height: "50%", top: "5%", left: "35%", $opacity: 0.7 },
            { $zIndex: 2, width: "20%", height: "20%", top: "10vh", left: "30%", $opacity: 0.4 }
        ];
        var $lis = $ele.find('li');
        var timer = null;

        $ele.find('.hi-next').on('click', function() {
            next();
        });
        $ele.find('.hi-prev').on('click', function() {
            states.push(states.shift());
            move();
        });
        $ele.on('mouseenter', function() {
            clearInterval(timer);
            timer = null;
        }).on('mouseleave', function() {
        });
        move();
        function move() {
            $lis.each(function(index, element) {
                var state = states[index];
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.$opacity);
            });
        }
        function next() {
            states.unshift(states.pop());
            move();
        }
    }
    $.fn.hiSlide = function(options) {
        $(this).each(function(index, ele) {
            slide(ele,options);
        });
        return this;
    }
})(jQuery);


(function($) {
    var slid = function(ele,options) {
        var $ele = $(ele);
        var setting = {
            speed: 500,
            interval: 2000,  
        };
        $.extend(true, setting, options);
        var states = [
            { $zIndex: 2, width: "20%", height: "20%", top: "10vh", left: "32%", $opacity: 0.4 },
            { $zIndex: 3, width: "35%", height: "80%", top: "5%", left: "2%", $opacity: 0.7 },
            { $zIndex: 4, width: "50%", height: "100%", top: 0, left: "15%", $opacity: 1 },
            { $zIndex: 3, width: "35%", height: "80%", top: "5%", left: "45%", $opacity: 0.7 },
            { $zIndex: 2, width: "20%", height: "20%", top: "10vh", left: "30%", $opacity: 0.4 }
        ];
        var $lis = $ele.find('li');
        var timer = null;

        $ele.find('.hi-next').on('click', function() {
            next();
        });
        $ele.find('.hi-prev').on('click', function() {
            states.push(states.shift());
            move();
        });
        $ele.on('mouseenter', function() {
            clearInterval(timer);
            timer = null;
        }).on('mouseleave', function() {
        });
        move();
        function move() {
            $lis.each(function(index, element) {
                var state = states[index];
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.$opacity);
            });
        }
        function next() {
            states.unshift(states.pop());
            move();
        }
    }
    $.fn.hiSlid = function(options) {
        $(this).each(function(index, ele) {
            slid(ele,options);
        });
        return this;
    }
})(jQuery);


(function($) {
    var sli = function(ele,options) {
        var $ele = $(ele);
        var setting = {
            speed: 500,
            interval: 2000,  
        };
        $.extend(true, setting, options);
        var states = [
            { $zIndex: 2, width: "40%", height: "60%", top: "10vh", left: "32%", $opacity: 0.4 },
            { $zIndex: 3, width: "65%", height: "100%", top: "5%", left: "-20%", $opacity: 0.7 },
            { $zIndex: 4, width: "90%", height: "120%", top: 0, left: "-5%", $opacity: 1 },
            { $zIndex: 3, width: "65%", height: "100%", top: "5%", left: "40%", $opacity: 0.7 },
            { $zIndex: 2, width: "40%", height: "60%", top: "10vh", left: "30%", $opacity: 0.4 }
        ];
        var $lis = $ele.find('li');
        var timer = null;

        $ele.find('.hi-next').on('click', function() {
            next();
        });
        $ele.find('.hi-prev').on('click', function() {
            states.push(states.shift());
            move();
        });
        $ele.on('mouseenter', function() {
            clearInterval(timer);
            timer = null;
        }).on('mouseleave', function() {
        });
        move();
        function move() {
            $lis.each(function(index, element) {
                var state = states[index];
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.$opacity);
            });
        }
        function next() {
            states.unshift(states.pop());
            move();
        }
    }
    $.fn.hiSli = function(options) {
        $(this).each(function(index, ele) {
            sli(ele,options);
        });
        return this;
    }
})(jQuery);



(function($) {
    var sl = function(ele,options) {
        var $ele = $(ele);
        var setting = {
            speed: 500,
            interval: 2000,  
        };
        $.extend(true, setting, options);
        var states = [
            { $zIndex: 2, width: "40%", height: "100%", top: "10vh", left: "32%", $opacity: 0.4 },
            { $zIndex: 3, width: "65%", height: "140%", top: "10%", left: "-50%", $opacity: 0.7 },
            { $zIndex: 4, width: "140%", height: "180%", top: 0, left: "-30%", $opacity: 1 },
            { $zIndex: 3, width: "65%", height: "140%", top: "10%", left: "70%", $opacity: 0.7 },
            { $zIndex: 2, width: "40%", height: "100%", top: "10vh", left: "30%", $opacity: 0.4 }
        ];
        var $lis = $ele.find('li');
        var timer = null;

        $ele.find('.hi-next').on('click', function() {
            next();
        });
        $ele.find('.hi-prev').on('click', function() {
            states.push(states.shift());
            move();
        });
        $ele.on('mouseenter', function() {
            clearInterval(timer);
            timer = null;
        }).on('mouseleave', function() {
        });
        move();
        function move() {
            $lis.each(function(index, element) {
                var state = states[index];
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.$opacity);
            });
        }
        function next() {
            states.unshift(states.pop());
            move();
        }
    }
    $.fn.hiSl = function(options) {
        $(this).each(function(index, ele) {
            sl(ele,options);
        });
        return this;
    }
})(jQuery);


(function($) {
    var sle = function(ele,options) {
        var $ele = $(ele);
        var setting = {
            speed: 500,
            interval: 2000,  
        };
        $.extend(true, setting, options);
        var states = [
            { $zIndex: 2, width: "40%", height: "150%", top: "10vh", left: "32%", $opacity: 0.4 },
            { $zIndex: 3, width: "65%", height: "220%", top: "20%", left: "-80%", $opacity: 0.7 },
            { $zIndex: 4, width: "170%", height: "280%", top: 0, left: "-45%", $opacity: 1 },
            { $zIndex: 3, width: "65%", height: "220%", top: "20%", left: "100%", $opacity: 0.7 },
            { $zIndex: 2, width: "40%", height: "150%", top: "10vh", left: "30%", $opacity: 0.4 }
        ];
        var $lis = $ele.find('li');
        var timer = null;

        $ele.find('.hi-next').on('click', function() {
            next();
        });
        $ele.find('.hi-prev').on('click', function() {
            states.push(states.shift());
            move();
        });
        $ele.on('mouseenter', function() {
            clearInterval(timer);
            timer = null;
        }).on('mouseleave', function() {
        });
        move();
        function move() {
            $lis.each(function(index, element) {
                var state = states[index];
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.$opacity);
            });
        }
        function next() {
            states.unshift(states.pop());
            move();
        }
    }
    $.fn.hiSle = function(options) {
        $(this).each(function(index, ele) {
            sle(ele,options);
        });
        return this;
    }
})(jQuery);


// about section button toggle
const tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector('.section');
let imgSection = document.querySelector('.header-img');
let IMG = document.querySelector('.img');
let ftr = document.querySelector('.foot');
let head = document.querySelector('.head');
tabsContainer.addEventListener("click", (e) => {
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active"))
    {
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");

        const target = e.target.getAttribute('data-target');
        aboutSection.querySelector('.tab-content.active').classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");

        const tg = e.target.getAttribute('target');
        imgSection.querySelector('.img-content.active').classList.remove("active");
        imgSection.querySelector(tg).classList.add("active");

        const tar = e.target.getAttribute('tg');
        IMG.querySelector('.content.active').classList.remove("active");
        IMG.querySelector(tar).classList.add("active");

        const targ = e.target.getAttribute('tmg');
        ftr.querySelector('.cont.active').classList.remove("active");
        ftr.querySelector(targ).classList.add("active");

        const t = e.target.getAttribute('t');
        head.querySelector('.img-content.active').classList.remove("active");
        head.querySelector(t).classList.add("active");
    }
});

// navbar
const allItems = document.querySelectorAll('.navmenu ul li a');
allItems.forEach(item => {
    item.addEventListener("click", function(e){
        for(var i=0;i< allItems.length; i++){
            allItems[i].classList.remove('active');  
        }
        this.classList.add("active");
    })
})