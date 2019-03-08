var page = {
    wifi : 0,

    /* 此方法在第一次显示窗体前发生 */
    onLoad:function(event){/*
        this.setData({label1 : 'Wifi开发中。。。'});
        this.setData({listctrl1 : {
            page : this,
            xml : 'Panels/item',
            items : [
                {label1 : "001"},
                {label1 : "001"},
                {label1 : "001"},
                {label1 : "001"},
                {label1 : "001"},
            ]
        }});*/

        this.wifi = require('wifi');
        this.wifi.startWifi({
            name : "wlan0",
            success : function(){
                console.log("startWifi success");
            },
            fail : function(){
                console.log("startWifi fail")
            },
            complete : function(){
                console.log("startWifi complete")
            }
        });

        this.wifi.onGetWifiList(function(res) {
            console.log("there is " + res.length + " wifi");
            for (var i = 0; i < res.length; i++) {
                var item = res[i];
                console.log("ssid : "+ item.ssid);
                console.log("bssid : " + item.bssid);
                console.log("strength" + item.strength);
                console.log("secure" + item.secure);
            }
        });

        

        

        this.wifi.onWifiConnected(function(){
            console.log("wifi is connected");
        });

        this.wifi.onNetConnected(function(){
            console.log("net is connected");
        });

        this.wifi.onNetDisonnected(function(){
            console.log("net is disconnected");
        });
    },

    /* 此方法展示窗体前发生 */
    onShow:function(event){

    },

    /* 此方法关闭窗体前发生 */
    onExit:function(event){
        this.wifi.destory();
        this.wifi = 0;
    },

    onTap:function(event){
        pm.navigateBack();
    },

    onBtn:function(event) {
        switch (event.target.id)
        {
            case "btn_join":
                console.log('btn join');
                this.wifi.connectWifi({
                    ssid: "ABC",
                    //bssid: "c0:3d:46:00:43:0a" ,
                    password: "yideguan123",
                    success : function(){
                        console.log("connectWifi success")
                    },
                    fail : function(){
                        console.log("connectWifi fail")
                    },
                    complete : function(){
                        console.log("connectWifi complete")
                    }
                });
            break;
            case "btn_scan":
                console.log('btn scan');
                this.wifi.getWifiList({
                    success : function(){
                        console.log("getWifiList success")
                    },
                    fail : function(){
                        console.log("getWifiList fail")
                    },
                    complete : function(){
                        console.log("getWifiList complete")
                    }
                });
            break;
        }
    }
};

Page(page);

page = 0;
