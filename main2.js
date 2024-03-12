acc_ans = 0
acc_ans1 = 0
acc_ans2 = 0
c = 0
p1_scr = 0;
p2_scr = 0;

function getname(){
    pn = [localStorage.getItem('name1'), localStorage.getItem('name2')];
    console.log(pn);
    window.alert("The Game room Has Loaded");
    pn1 = pn[0];
    pn2 = pn[1];

    console.log(pn1);
    console.log(pn2);

    document.getElementById('p1_scr').innerHTML = pn1 + " : " + p1_scr;
    document.getElementById('p2_scr').innerHTML = pn2 + " : " + p2_scr;
    document.getElementById('question_turn').innerHTML =  pn1;
    document.getElementById('answer_turn').innerHTML =  pn2;

}

function givenum(){

    num1 = parseInt(document.getElementById('num_1').value);
    num2 = parseInt(document.getElementById('num_2').value);
    console.log(num1, num2)

    localStorage.setItem("num1", num1);
    localStorage.setItem("num2", num2);
    document.getElementById('ans').style = "text-align: left;"

    sum_t = document.querySelector('input[name="sum_type"]:checked').value;

   if (sum_t == "add"){

    acc_ans = num1 + num2;
    document.getElementById('ans').innerHTML = "<h2>"+ num1 +" + " + num2 +"</h2>" + "<br><br>  <input type='number' id='as' class='form-control' placeholder='Answer here'><br><button onclick='submit_ans()' class='btn btn-success'>Check</button>"; 

    
   }
   else if (sum_t == "Sub"){

    acc_ans = num1 - num2;
    document.getElementById('ans').innerHTML = "<h2>"+ num1 +" − " + num2 +"</h2>" + "<br><br>  <input type='number' id='as' class='form-control' placeholder='Answer here'><br><button onclick='submit_ans()' class='btn btn-success'>Check</button>"; 


   }
   else if (sum_t == "multiply"){

    acc_ans = num1 * num2;
    document.getElementById('ans').innerHTML = "<h2>"+ num1 +" × " + num2 +"</h2>" + "<br><br>  <input type='number' id='as' class='form-control' placeholder='Answer here'><br><button onclick='submit_ans()' class='btn btn-success'>Check</button>"; 


   }
   else if (sum_t == "divide"){

    acc_ans1 = Math.floor(num1 / num2);
    acc_ans2 = (Math.floor(num1 / num2)) + 1;
    document.getElementById('ans').innerHTML = "<h2>"+ num1 +" ÷ " + num2 +"</h2>" + "<br><br>  <input type='number' id='as' class='form-control' placeholder='Answer here'><br><button onclick='submit_ans()' class='btn btn-success'>Check</button>"; 

    
    console.log(acc_ans1, acc_ans2);;

   }


    
}

    function submit_ans(){

    ansr = document.getElementById('as').value;

    if (sum_t == "add"||sum_t == "Sub"||sum_t == "multiply"){

    
   
    if (ansr == acc_ans && c < 1 ){

        document.getElementById('ans').style = "border-top: 13px solid green; background-color:#beedbe;text-align:left;"
        c++;
        console.log(c);
        p2_scr = p2_scr + 1;
        document.getElementById('p2_scr').innerHTML = pn2 + " : " + p2_scr;
        document.getElementById('question_turn').innerHTML = pn2;
        document.getElementById('answer_turn').innerHTML = pn1;
        num1.value = '';
        num2.value = '';
    }

    else if (ansr == acc_ans && c > 0 ){
        document.getElementById('ans').style = "border-top: 13px solid green; background-color:#beedbe;text-align:left;"
        c--;
        console.log(c);
        p1_scr = p1_scr + 1;
        document.getElementById('p1_scr').innerHTML = pn1 + " : " + p1_scr; 
        document.getElementById('question_turn').innerHTML = pn1;
        document.getElementById('answer_turn').innerHTML = pn2;
        num1.value = '';
        num2.value = '';

    }
    else if (ansr != acc_ans && c < 1) {
        document.getElementById('ans').style = "border-top: 13px solid red; background-color:#ffbdbd;text-align:left;" 
        c++;
        console.log(c);
        document.getElementById('question_turn').innerHTML = pn2;
        document.getElementById('answer_turn').innerHTML = pn1;
        num1.value = '';
        num2.value = '';
    }
    else if (ansr != acc_ans && c > 0) {
        document.getElementById('ans').style = "border-top: 13px solid red; background-color:#ffbdbd;text-align:left;" 
        c--;
        console.log(c);
        document.getElementById('question_turn').innerHTML = pn1;
        document.getElementById('answer_turn').innerHTML = pn2;
        num1.value = '';
        num2.value = '';
    }

    }
    else if (sum_t == "divide"){

        if (ansr >= acc_ans1 && ansr <= acc_ans2 && c < 1 ){

            document.getElementById('ans').style = "border-top: 13px solid green; background-color:#beedbe;text-align:left;"
            c++;
            console.log(c);
            p2_scr = p2_scr + 1;
            document.getElementById('p2_scr').innerHTML = pn2 + " : " + p2_scr;
            document.getElementById('question_turn').innerHTML = pn2;
            document.getElementById('answer_turn').innerHTML = pn1;
            num1.value = '';
            num2.value = '';
        }
    
        else if (ansr >= acc_ans1 && ansr <= acc_ans2 && c > 0 ){
            document.getElementById('ans').style = "border-top: 13px solid green; background-color:#beedbe;text-align:left;"
            c--;
            console.log(c);
            p1_scr = p1_scr + 1;
            document.getElementById('p1_scr').innerHTML = pn1 + " : " + p1_scr; 
            document.getElementById('question_turn').innerHTML = pn1;
            document.getElementById('answer_turn').innerHTML = pn2;
            num1.value = '';
            num2.value = '';
    
        }
        else if (ansr != acc_ans1 && ansr != acc_ans2 && c < 1) {
            document.getElementById('ans').style = "border-top: 13px solid red; background-color:#ffbdbd;text-align:left;" 
            c++;
            console.log(c);
            document.getElementById('question_turn').innerHTML = pn2;
            document.getElementById('answer_turn').innerHTML = pn1;
            num1.value = '';
            num2.value = '';
        }
        else if (ansr != acc_ans1 && ansr != acc_ans2 && c < 1&& c > 0) {
            document.getElementById('ans').style = "border-top: 13px solid red; background-color:#ffbdbd;text-align:left;" 
            c--;
            console.log(c);
            document.getElementById('question_turn').innerHTML = pn1;
            document.getElementById('answer_turn').innerHTML = pn2;
            num1.value = '';
            num2.value = '';
        } 

    }

}
