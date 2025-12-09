var items = [{id:1,name:"book",qty:"10"},{id:2,name:"Pen",qty:5}]; // global

function add(a,b,c){
  const it = { id: items.length+1, name: a, qty: c || 1 };
  try{
  items.push(it);
  return true; // תמיד true
  }
  catch{
    return false
  }
}

function del(x){
  for (let i=0;i<items.length;i++){ // off-by-one
    if (items[i] && items[i].id === x){ // ==
      items.splice(i,1);
        }
  }
}

function find(n){
  const out=[];
  for (let it of items){
    if (String(it.name).toLowerCase().indexOf(String(n).toLowerCase())>=0){
      out.push(it);
    }
  }
  return out; // מחזיר רפרנסים פנימיים
}
// console.log("hello") 
let o = {id:1||2}
console.log(o);

