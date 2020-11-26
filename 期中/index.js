'use strict';

let Html = function (tag) {
  let el = document.createElement(tag);

  return {
    get node() {
      return el;
    },

    appendChild: function (node) {
      el.appendChild(node);

      return this;
    },

    setAttribute: function (attribute, value) {
      el[attribute] = value;

      return this;
    },

    setClass: function (cls) {
      el.className = cls;

      return this;
    },
  };
};

window.addEventListener('load', () => {
  console.log("drafting.js loaded");

  let siteTitle = Html('h1')
    .setAttribute('innerHTML', 'Drafting');

  let siteSubtitle = Html('h3')
    .setAttribute('innerHTML', '一個 html/css/node.js 的練習專案');

  let siteBanner = Html('header')
    .setClass('site-banner')
    .appendChild(siteTitle.node)
    .appendChild(siteSubtitle.node);

  let siteStatus = Html('header')
    .setClass('site-status')
    .setAttribute(
      'innerHTML',
      '<span>x:<span id="cursor-x">0</span>y:<span id="cursor-y">0</span>'
    );

  let siteBody = Html('article')
    .setClass('site-body')
    .appendChild(siteStatus.node);

  let copyright = Html('small')
    .setClass('float-right')
    .setAttribute(
      'innerHTML',
      '&copy; Copyright 2020，佛光大學資訊應用學系'
    );

  let siteFooter = Html('footer')
    .setClass('site-footer')
    .appendChild(copyright.node);

  let siteContainer = Html('div')
    .setClass('site-container')
    .appendChild(siteBanner.node)
    .appendChild(siteBody.node)
    .appendChild(siteFooter.node);

  document.body.appendChild(siteContainer.node);

  // 準備承載 *網頁標題* (title) 的 HTML 元素
  let cardTitle = Html('span')
    .setAttribute('textContent', 'Drafting!');

  // 準備承載 *網頁版頭* (header) 的 HTML 元素
  let cardHeader = Html('header')
    .setClass('card-header')
    .appendChild(cardTitle.node); // 將 *網頁標題* 放上 *網頁版頭*
    
	
  let FirstRName = Html('input')
    .setClass('input')
    .setAttribute('placeholder','傑尼條碼貓')
    .setAttribute('id','name')
    .setAttribute('type','text');

  let FirstRRect = Html('p')
    .setClass('control')
    .appendChild(FirstRName.node);
    
  let FirstLRect = Html('label')
    .setClass('control-label')
    .setAttribute('htmlFor','name')
    .setAttribute('innerHTML','姓名');
    
  let FRect =Html('div')  
    .setClass('h-filed')
    .appendChild(FirstLRect.node)
    .appendChild(FirstRRect.node);

  let SecondRName = Html('input')
    .setClass('input')
    .setAttribute('placeholder','100')
    .setAttribute('id','hp')
    .setAttribute('type','number');

  let SecondRRect = Html('p')
    .setClass('control')
    .appendChild(SecondRName.node);
    
  let SecondLRect = Html('label')
    .setClass('control-label')
    .setAttribute('htmlFor','hp')
    .setAttribute('innerHTML','血量(hp)');
    
  let SRect =Html('div')  
    .setClass('h-filed')
    .appendChild(SecondLRect.node)
    .appendChild(SecondRRect.node);
  
  let ThirdRName = Html('input')
    .setClass('input')
    .setAttribute('placeholder','35')
    .setAttribute('id','ap')
    .setAttribute('type','number');

  let ThirdRRect = Html('p')
    .setClass('control')
    .appendChild(ThirdRName.node);
    
  let ThirdLRect = Html('label')
    .setClass('control-label')
    .setAttribute('htmlFor','ap')
    .setAttribute('innerHTML','攻擊力(ap)');
    
  let TRect =Html('div')  
    .setClass('h-filed')
    .appendChild(ThirdLRect.node)
    .appendChild(ThirdRRect.node);

  let fourRName = Html('input')
    .setClass('input')
    .setAttribute('placeholder','35')
    .setAttribute('id','ap')
    .setAttribute('type','number');

  let fourRRect = Html('p')
    .setClass('control')
    .appendChild(fourRName.node);
    
  let fourLRect = Html('label')
    .setClass('control-label')
    .setAttribute('htmlFor','dp')
    .setAttribute('innerHTML','防禦力(dp)');
    
  let fRect =Html('div')  
    .setClass('h-filed')
    .appendChild(fourLRect.node)
    .appendChild(fourRRect.node);  

  
  let Main =Html('div')
    .setClass('pane')
    .appendChild(FRect.node)
    .appendChild(SRect.node)
    .appendChild(TRect.node)
    .appendChild(fRect.node);
    
    

  // 準備承載 *網頁內容* 的 HTML 元素
  let cardContent = Html('article')
    .setClass('card-content');

  // 準備 *網頁桌面* 的 HTML 元素
  let cardDesktop = Html('section')
    .setClass('card')
    .appendChild(cardHeader.node)   // 將 *網頁版頭* 放上 *網頁桌面*
    .appendChild(cardContent.node); // 將 *網頁內容* 放上 *網頁桌面*

  // 將 *網頁桌面* 放上 *網頁*
  let desktop = document
    .querySelector('.site-body')
    .appendChild(cardDesktop.node);

  /**
   * 滑鼠游標移動追踪
   *
   * @callback
   * @param 'mousemove' : DOM 事件名
   * @param e : DOM event 物件
   * @returns {undefined}
   */
  desktop.addEventListener('mousemove', (e) => {
    document.getElementById('cursor-x').textContent = e.clientX;
    document.getElementById('cursor-y').textContent = e.clientY;
  });
});
