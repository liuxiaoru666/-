
import * as constants  from './constants';
import {fromJS} from 'immutable';
// immutalble.js 生成immutable对象，把state变成不可改变的对象
const defaultState = fromJS({
   topicList:[
       {id:1,title:'社会热点',imgUrl:'https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'},
       {id:2,title:'手绘',imgUrl:'https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'},
       {id:3,title:'社会热点',imgUrl:'https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'},
       {id:4,title:'手绘',imgUrl:'https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'},
       {id:5,title:'社会热点',imgUrl:'https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'},
       {id:6,title:'手绘',imgUrl:'https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'},
       {id:7,title:'社会热点',imgUrl:'https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'},
       {id:8,title:'手绘',imgUrl:'https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'}
    ],
    listArr:[
        {id:1,title:'女人心死了的三大征兆，非常准',content:'现在市面上各种类型的读书app层出不穷，但大多数都主打阅读，做笔记的app并不多见，可是阅读之余不少人也会有做笔记的需要。 或者是记录一下读过的...',imgUrl:'https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'},
        {id:2,title:'好用的读书笔记app精选',content:'现在市面上各种类型的读书app层出不穷，但大多数都主打阅读，做笔记的app并不多见，可是阅读之余不少人也会有做笔记的需要。 或者是记录一下读过的...',imgUrl:'https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'},
        {id:3,title:'又一童年女神以脸僵终结，田丽出演《都挺好》，网友：不敢认',content:'现在市面上各种类型的读书app层出不穷，但大多数都主打阅读，做笔记的app并不多见，可是阅读之余不少人也会有做笔记的需要。 或者是记录一下读过的...',imgUrl:'https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'},
        {id:4,title:'3款高质量黑科级APP，一个万能BT种子资源网站，请低调使用',content:'现在市面上各种类型的读书app层出不穷，但大多数都主打阅读，做笔记的app并不多见，可是阅读之余不少人也会有做笔记的需要。 或者是记录一下读过的...',imgUrl:'https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'},
        {id:5,title:'书籍中有哪些句子容易触动人心？',content:'现在市面上各种类型的读书app层出不穷，但大多数都主打阅读，做笔记的app并不多见，可是阅读之余不少人也会有做笔记的需要。 或者是记录一下读过的...',imgUrl:'https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'},  
    ],
    boardList:[
        {id:1,imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'},
        {id:2,imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'},
        {id:3,imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'},
        {id:4,imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'}
    ],
    writerList:[],
    page:1,
    totalPage:1
});


export default (state=defaultState,action) => {
    switch(action.type){
        case constants.UPDATA_WRITER_LIST:
        return state.set('writerList',action.data).set('totalPage',action.totalPage);
        case constants.CHANGE_PAGE:
            return state.set('page',action.page);
        default:
        return state;
    }
}