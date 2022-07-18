const convert = { 
  f1: function getWeekDate(d1) { 
  pd = new Date(d1); 
  var day = pd.getDay(); 
  var weeks = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"); 
  var week = weeks[day]; 
  return week; 
  },

}
