var page = {

    /* 此方法在第一次显示窗体前发生 */
    onLoad:function(event){

    },

    /* 此方法展示窗体前发生 */
    onShow:function(event){
    },

    /* 此方法关闭窗体前发生 */
    onExit:function(event){

    },

    onChange:function(event){
        item = event.detail.value;
        console.log(item + ' be selected.')

        /* 设置提示标签内容与图标一致 */
        this.setData({label_tip : {value : item, refresh : true}});
    },

    onTap:function(event){
        console.log(event);
        item = event.detail.value;
        pm.navigateTo(item+"/"+item);
    }
};

Page(page);

page = 0;
