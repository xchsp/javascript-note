/**
 * [debounce 防抖函数：密集事件间隔时间小于 interval，只响应最后一次]
 * @param  {Function} fn       [要执行的回调函数]
 * @param  {[type]}   interval [密集事件间隔时间]
 * @return {[type]}            [description]
 */
function debounce(fn, delay) {
    var delay = delay || 200;
    var timer;
    return function(){
        var _this = this;
        var args = arguments;
        if (timer) clearTimeout(timer);
        timer = setTimeout(function() {
            timer = null;
            fn.apply(_this, args);
        }, interval);
    };
}
/*debounce 处理的 keydown 用户名验证：http://www.webfront-js.com/showDemo/debounce的keydown事件在验证用户名的应用.html
  这个例子中使用 debounce 方法包装了 keydown 事件，在用户名验证时的 keydown 事件上能很好的节省网络资源。
*/
dom.addEventListener('keydown', debounce(function() {
}));
/*debounce 处理的 mousemove 拖动：http://www.webfront-js.com/showDemo/debounce的拖动.html
  这个例子中使用 debounce 方法包装了 mouseove 事件，整个拖动效果就不见了。就变成了跳动了。
*/
dom.addEventListener('mousemove', debounce(function() {
}));