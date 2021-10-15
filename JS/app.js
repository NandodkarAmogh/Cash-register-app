
//UI class
class UI{
    static displayChange(){
        const change = recieved-due;
        console.log(change);
    }

    static showAlert(message,className){
        const div = document.createElement('div');
        div.className=`alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#register-form');
        container.insertBefore(div,form);

        //vanish in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(),3000);

    }
    static clearFields(){
        document.querySelector('#due').value ='';
        document.querySelector('#recieved').value = '';
    }
}

//display the change due
document.querySelector('#register-form').addEventListener('submit', (e) =>{

    //prevent default action of submit button
    e.preventDefault();

    //take the amount due from user
    const due = document.querySelector('#due').value;

    //take the amount paid by the user
    const recieved = document.querySelector('#recieved').value;

    //validate
    if(due === '' || recieved === ''){
        UI.showAlert('Please fill all the fields','danger');
    }
    else if(due === recieved){
        UI.showAlert('No change due','success');
    }
    else{
        const change = recieved-due;
        const two_thousand = Math.trunc(change/2000);
        console.log(two_thousand);
        const five_hundred = Math.trunc((change-(two_thousand*2000))/500);
        console.log(five_hundred);
        const two_hundred = Math.trunc((change-((two_thousand*2000)+(five_hundred*500)))/200);
        console.log(two_hundred);
        const one_hundred = Math.trunc((change-((two_thousand*2000)+(five_hundred*500)+(two_hundred*200)))/100);
        console.log(one_hundred);
        const fifty = Math.trunc((change-((two_thousand*2000)+(five_hundred*500)+(two_hundred*200)+(one_hundred*100)))/50);
        console.log(fifty);
        const twenty = Math.trunc((change-((two_thousand*2000)+(five_hundred*500)+(two_hundred*200)+(one_hundred*100)+(fifty*50)))/20);
        console.log(twenty);
        const ten = Math.trunc((change-((two_thousand*2000)+(five_hundred*500)+(two_hundred*200)+(one_hundred*100)+(fifty*50)+(twenty*20)))/10);
        console.log(ten);
        const five = Math.trunc((change-((two_thousand*2000)+(five_hundred*500)+(two_hundred*200)+(one_hundred*100)+(fifty*50)+(twenty*20)+(ten*10)))/5);
        console.log(five);
        const two = Math.trunc((change-((two_thousand*2000)+(five_hundred*500)+(two_hundred*200)+(one_hundred*100)+(fifty*50)+(twenty*20)+(ten*10)+(five*5)))/2);
        console.log(two);
        const one = Math.trunc((change-((two_thousand*2000)+(five_hundred*500)+(two_hundred*200)+(one_hundred*100)+(fifty*50)+(twenty*20)+(ten*10)+(five*5)+(two*2)))/1);
        console.log(one);

        //adding the change due to the table
        const money = document.querySelector('#change');

        const row = document.createElement('tr');

        row.innerHTML = `
        <th scope="row">${change}</th>
        <td>${two_thousand}</td>
        <td>${five_hundred}</td>
        <td>${two_hundred}</td>
        <td>${one_hundred}</td>
        <td>${fifty}</td>
        <td>${twenty}</td>
        <td>${ten}</td>
        <td>${five}</td>
        <td>${two}</td>
        <td>${one}</td>
        `;
        money.appendChild(row);

        //clear fields
        UI.clearFields();

        //success message
        UI.showAlert('Check below for the change due','success');
    }

});










