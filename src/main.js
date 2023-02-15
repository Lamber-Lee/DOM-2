const $div = $('<div><span>1</span></div>')
const $childList = $('.child')
$('body').append($childList)

//const api1 = jQuery('.test')
//api2 = api1.find('.child').addClass('red').addClass('blue').addClass('green')
//const oldApi = api2.end().addClass('yellow')


//const api = jQuery('.test') //不返回元素们，返回api 对象
//api.addClass('red') //this 就是api
   //.addClass('blue') //this 就是api
   //.addClass('green')//链式操作


  // Obj.fn(p1) //函数里的this就是 obj
  // Obj.fn.call(obj,p1)
