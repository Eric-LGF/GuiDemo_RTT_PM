var json_obj_weather = 0;

var page = {

    /* 此方法在第一次显示窗体前发生 */
    onLoad:function(event){
        this.setData({label1 : 'Weather开发中。。。'});
        this.setData({animatedImage1 : 'start'});
        this.setData({panel_T : {background : 0xFFFFFFFF}})
    },

    /* 此方法展示窗体前发生 */
    onShow:function(event){

    },

    /* 此方法关闭窗体前发生 */
    onExit:function(event){        
        this.setData({animatedImage1 : 'stop'});
    },

    getWeatherInfo:function(event){
        var thiz = this;
        var str =0;

        var rq1 = pm.request({
            url : 'http://t.weather.sojson.com/api/weather/city/101190101',
            method : 'GET',
            header:{
                "Content-Type":"application/json"
            },
            //与开发者服务器连接成功后，执行的回调函数
            success: function(res) {    
                // 把data从Buffer转成string
                str = res.data.toString('utf8'); 
                console.log(str);
                //把JSON格式的string转成JSON对象，以便获取数据   
                json_obj_weather=JSON.parse(str); 
                //更新各个控件的值  
                thiz.onUpdate();    
            },
            fail: function(){
                console.log('request failed')
            }
        })
    },

    onBtn:function(event){
        console.log(event);
        switch (event.target.id)
        {
            case "btn_exit":
                pm.navigateBack();
            break;
            case "btn_T":
                this.setData({panel_T : {background : 0xFFFFFFFF, refresh : true}});
                this.setData({panel_W : {background : 0xFF808080, refresh : true}});
                this.setData({panel_s : {background : 0xFF808080, refresh : true}});
            break;
            case "btn_W":
                this.setData({panel_T : {background : 0xFF808080, refresh : true}});
                this.setData({panel_W : {background : 0xFFFFFFFF, refresh : true}});
                this.setData({panel_s : {background : 0xFF808080, refresh : true}});
            break;
            case "btn_S":
                this.setData({panel_T : {background : 0xFF808080, refresh : true}});
                this.setData({panel_W : {background : 0xFF808080, refresh : true}});
                this.setData({panel_s : {background : 0xFFFFFFFF, refresh : true}});
            break;
        }
        
    },

    onGet:function(event){
        this.getWeatherInfo();
    },

    onUpdate:function() {
        console.log(json_obj_weather.time);
        console.log(json_obj_weather.cityInfo.city);
        console.log(json_obj_weather.cityInfo.updateTime);
        console.log(json_obj_weather.date);
        console.log(json_obj_weather.data.shidu);
    }


};

Page(page);

page = 0;
