var note = 0
var t_b = getElementById("true_button");
var f_b = getElementById("false_button");
const l_1 = getElementById("list1");
const choix_l1 = l_1[l_1.selectedIndex];
let r_q1 = false;
const l_2 = getElementById("list2");
const choix_l2 = l_2[l_2.selectedIndex];
var b_3 = getElementById("3_button");
var b_5 = getElementById("5_button");
var v_b = getElementById("f_button");
var result_p = getElementById("result_p").innerHTML;

t_b.onclick = function(){
  note = note + 1;
  r_q1 = true;
}
f_b.onclick = function(){
  note = note + 0;
  r_q1 = true;
}

b_3.onclick = function(){
  R_f("field1")
}
b_5.onclick = function(){
  R_f("field2")
}

function R_f(id) {
  var reponse = getElementById(id).value;
  if (reponse=='turtle') {
    note = note+1
  } 
  else if(reponse=='Baby blue'){
    note = note+1
  }
  else {
    note = note+0
  }
}

function qcm() {
  if(r_q1 == true){
    if(choix_l1 == 1){
      note = note+1
    }
    if(choix_l2 == 2){
      note = note + 1
    }
    result_p = 'votre note est de:' + note;
  }
}

v_b.onclick = qcm() 
