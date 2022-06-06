name_of_the_student_array=[];//array is a variable which can store multiple values
function submit(){
  var name_1=document.getElementById("student1").value;
  var name_2=document.getElementById("student2").value;
  var name_3=document.getElementById("student3").value;
  var name_4=document.getElementById("student4").value;
  var name_5=document.getElementById("student5").value;

  name_of_the_student_array.push(name_1);//push function is used to put the values inside the array
  name_of_the_student_array.push(name_2);
  name_of_the_student_array.push(name_3);
  name_of_the_student_array.push(name_4);
  name_of_the_student_array.push(name_5);

  document.getElementById("student1").innerHTML="";
  console.log(name_of_the_student_array);
  document.getElementById("list_of_names").innerHTML=name_of_the_student_array;
  document.getElementById("submit_button").style.display="none";
  document.getElementById("sort_button").style.display="inline-block";
}

function sort()
{
    name_of_the_student_array.sort();// sort function is for arranging names in alphabetical order
    console.log(name_of_the_student_array);
    document.getElementById("sorted_list_of_names").innerHTML = name_of_the_student_array;
}