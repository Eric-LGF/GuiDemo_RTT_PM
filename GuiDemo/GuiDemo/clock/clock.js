var page = {
    timer : 0,  // 定时器
    time : 0,   // 时间：秒

    /* 此方法在第一次显示窗体前发生 */
    onLoad:function(event){
        var thiz = this;
        var rtc = require("gui/module/rtc.js");


        this.setData({label1 : 'Clock开发中。。。'});

        // 根据RTC对时钟进行初始化
        console.dir(rtc);

        var rtcclock = rtc.getRtcTime();
        console.log(rtcclock);
        thiz.time = rtcclock.getHours()*3600 + rtcclock.getMinutes()*60 + rtcclock.getSeconds();
        thiz.setData({Clock1 : {value : thiz.time}});
        thiz.setData({label2 : {value : rtcclock.toLocaleString()}});

        thiz.timer = setInterval(function(){
            thiz.setData({Clock1 : {value : thiz.time, refresh : true}});
            thiz.time++;
            rtcclock = rtc.getRtcTime();
            //console.log(rtcclock);
            thiz.setData({label2 : {value : rtcclock.toLocaleString(), refresh : true}});
        }, 1000)
        
    },

    /* 此方法展示窗体前发生 */
    onShow:function(event){

    },

    /* 此方法关闭窗体前发生 */
    onExit:function(event){
        if (this.timer)
            clearInterval(this.timer);
    },

    onTap:function(event){
        pm.navigateBack();
    }
};

Page(page);

page = 0;
