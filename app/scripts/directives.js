// Generated by CoffeeScript 1.7.1
Mifan.directive("more", function() {
  var template;
  template = ['<div class="load-more" ng-class="{loading: isLoading}" ng-click="loadingMore()">', '<span class="loading-tip">加载更多</span>', '<i class="ui-loading"></i>', '</div>'].join("");
  return {
    template: template,
    replace: true,
    restrict: "E"
  };
});

// Generated by CoffeeScript 1.7.1
(function(window, angular) {

  /*
  angualr 指令
  轮播器
  支持mobile and pc
   */
  'use strict';
  var DOC, END_EVENT, IsAndroid, IsTouch, MOVE_EVENT, START_EVENT, UA, UNDEFINED, WIN, ngScorller;
  DOC = document;
  WIN = window;
  UNDEFINED = void 0;
  IsTouch = 'ontouchstart' in WIN;
  UA = WIN.navigator.userAgent;
  IsAndroid = /Android|HTC/i.test(UA) || !!(WIN.navigator["platform"] + "").match(/Linux/i);
  START_EVENT = IsTouch ? 'touchstart' : 'mousedown';
  MOVE_EVENT = IsTouch ? 'touchmove' : 'mousemove';
  END_EVENT = IsTouch ? 'touchend' : 'mouseup';
  return ngScorller = angular.module("binnng.scroller", []);
})(window, angular);

// Generated by CoffeeScript 1.7.1
Mifan.directive("snslogin", function() {
  var template;
  template = ['<div class="sns-login">', '<a ng-href="http://mifan.us/index.php?app=pubs&ac=plugin&plugin=weibo&in=login" class="weibo"><i></i><span>新浪微博</span></a>', '<a ng-href="http://mifan.us/index.php?app=pubs&ac=plugin&plugin=qq&in=login" class="qq"><i></i><span>腾讯QQ</span></a>', '<a ng-href="http://mifan.us/index.php?app=pubs&ac=plugin&plugin=douban&in=login" class="douban"><i></i><span>豆瓣</span></a>', '</div>'].join("");
  return {
    template: template,
    replace: true,
    restrict: "E"
  };
});

// Generated by CoffeeScript 1.7.1
(function(window, angular) {

  /*
  angualr 指令
  手指轻碰一下就会触发事件
   */
  'use strict';
  var IsTouch, LOC, NA, UA, WIN, tap;
  tap = angular.module('binnng.tap', []);
  WIN = window;
  IsTouch = "ontouchend" in WIN;
  if (!IsTouch) {
    return false;
  }
  LOC = location;
  NA = WIN.navigator;
  UA = NA.userAgent;
  return tap.directive("tap", function() {
    return {
      link: function(scope, element, attrs) {
        var fn, fnName;
        fnName = attrs["tap"].replace("()", "");
        fn = scope[fnName];
        if (!fn) {
          return false;
        }
        return element.on("touchstart", function(event) {
          fn();
          return event.stopPropagation();
        });
      }
    };
  });
})(window, angular);

// Generated by CoffeeScript 1.7.1
(function(window, angular) {

  /*
  angualr 指令
  目的是链接跳转采用touch事件模拟，跳转行为响应更快
   */
  'use strict';
  var IsAndroid, IsTouch, LOC, MOVE_BUFFER_RADIUS, NA, UA, WIN, getCoordinates, ngTouchHref;
  ngTouchHref = angular.module('ngTouchHref', []);
  WIN = window;
  IsTouch = "ontouchend" in WIN;
  if (!IsTouch) {
    return false;
  }
  LOC = location;
  NA = WIN.navigator;
  UA = NA.userAgent;
  IsAndroid = /Android|HTC/i.test(UA) || /Linux/i.test(NA.platform + "");
  MOVE_BUFFER_RADIUS = IsAndroid ? 10 : 6;
  getCoordinates = function(event) {
    var e, touches;
    touches = event.touches && (event.touches.length ? event.touches : [event]);
    e = (event.changedTouches && event.changedTouches[0]) || (event.originalEvent && event.originalEvent.changedTouches && event.originalEvent.changedTouches[0]) || touches[0].originalEvent || touches[0];
    return {
      x: e.clientX,
      y: e.clientY
    };
  };
  return ngTouchHref.directive("ngHref", function() {
    return {
      link: function(scope, element, attrs) {
        var active, lastPos, onTouchCancel, onTouchEnd, onTouchMove, onTouchStart, startCoords, totalX, totalY, _ref;
        if (((_ref = element[0]) != null ? _ref.tagName.toUpperCase() : void 0) === "A") {
          totalX = totalY = 0;
          startCoords = lastPos = null;
          active = false;
          onTouchStart = function(event) {
            startCoords = getCoordinates(event);
            active = true;
            return lastPos = startCoords;
          };
          onTouchCancel = function(event) {
            return active = false;
          };
          onTouchMove = function(event) {
            var coords;
            if (!active && !startCoords) {
              return false;
            }
            coords = getCoordinates(event);
            totalX += Math.abs(coords.x - lastPos.x);
            totalY += Math.abs(coords.y - lastPos.y);
            lastPos = coords;
            if (totalX < MOVE_BUFFER_RADIUS && totalY < MOVE_BUFFER_RADIUS) {
              return false;
            }
            if (totalY > totalX) {
              return active = false;
            } else {
              return event.preventDefault();
            }
          };
          onTouchEnd = function(event) {
            if (!active) {
              return false;
            }
            active = false;
            event.preventDefault();
            return LOC["href"] = attrs.ngHref;
          };
          element.on("touchstart", onTouchStart);
          element.on("touchcancel", onTouchCancel);
          element.on("touchmove", onTouchMove);
          return element.on("touchend", onTouchEnd);
        }
      }
    };
  });
})(window, angular);

// Generated by CoffeeScript 1.7.1
Mifan.directive("usermenu", function() {
  var template;
  template = ['<ul>', '<li><a href="#!/"><span class="glyphicon glyphicon-cog"></span>设置</a></li>', '<li><a href="#!/"><span class="glyphicon glyphicon-search"></span>找人</a></li>', '<li><a href="#!/"><span class="glyphicon glyphicon-phone-alt"></span>反馈</a></li>', '<li><a ng-click="support()"><span class="glyphicon glyphicon-thumbs-up"></span>32个赞</a></li>', '<li><a ng-click="logout()"><span class="glyphicon glyphicon-off"></span>登出</a></li>', '</ul>'].join("");
  return {
    template: template,
    replace: true,
    restrict: "E"
  };
});
