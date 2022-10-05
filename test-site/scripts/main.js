// /* 文档对象模型Document引用的 querySelector() 方法返回文档中
// 与指定选择器或选择器组匹配的第一个 Element对象。
// 如果找不到匹配项，则返回null*/
// /*首先用 querySelector() 函数获取标题的引用，并把它储存在 myHeading 变量中。*/
// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// alert('hello!');

// //if判断 + alert提示弹出
// let iceCream = 'chocolate';
// if (iceCream === 'chocolate') {
//   alert('我最喜欢巧克力冰激淋了。');
// } else {
//   alert('但是巧克力才是我的最爱呀……');
// }

// //函数
// function multiply(num1, num2) {
//     let result = num1 * num2;
//     return result;
//   }

// //事件
// document.querySelector('html').onclick = function(){
//   alert('别戳我，疼死爸爸了！')
// }
// //事件也可以这么写
// // let myHTML = document.querySelector('html');
// // myHTML.onclick = function() {};

// //事件还可以这么写
// document.querySelector('html').addEventListener('click', ()=>{
// alert('别戳我，我怕疼。');
// })

//点击图片，更换图片
let myImage = document.querySelector('img');
myImage.onclick = function(){
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox.jpg'){
    myImage.setAttribute('src','images/silverfox.jpg');
  }else{
    myImage.setAttribute('src','images/firefox.jpg');
  }
}

//添加个性化欢迎信息
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
  let myName = prompt('请输入你的名字。');
  /*如果 myName 没有值或值为 null，就再次从头运行setUserName()。
  如果有值（上面的表达式结果不为真），就把值存储到 localStorage 并且
  设置标题。*/
  if(!myName){
    setUserName();
  }else{
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Mozilla is cool' + myName;
  }
}
/*该函数首先调用了 prompt() 函数，与 alert() 类似会弹出一个对话框。
但是这里需要用户输入数据，并在确定后将数据存储在 myName 变量里。
接下来将调用 localStorage API，它可以将数据存储在浏览器中供后续获取。
这里用 localStorage 的 setItem() 函数来创建一个'name' 数据项，并
把 myName 变量复制给它。最后将 textContent 属性设置为一个欢迎字符串
加上这个新设置的名字。*/

if(!localStorage.getItem('name')){
  setUserName();
}else{
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool' + storedName;
}
/*这里首次使用了取非运算符（逻辑非，用 ! 表示）来检测 'name' 数据
是否存在。若不存在，调用 setUserName() 创建。若存在（即用户上次
访问时设置过），调用 getItem() 获取保存的名字，像上文的 
setUserName() 那样设置 textContent。*/

myButton.onclick = function(){
  setUserName();
}
