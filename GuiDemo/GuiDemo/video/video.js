var page = {

    /* 此方法在第一次显示窗体前发生 */
    onLoad:function(event){
        this.setData({label1 : 'Video开发中。。。'});

    },

    /* 此方法展示窗体前发生 */
    onShow:function(event){

    },

    /* 此方法关闭窗体前发生 */
    onExit:function(event){

    },

    onTap:function(event){
        pm.navigateBack();
    }
};

Page(page);

page = 0;
