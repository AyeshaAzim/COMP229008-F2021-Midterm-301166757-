// Author name: Ayesha Mohammed Azim Shaikh
// Student ID: 301166757
// Web App name: comp229008-f2021-301166757.herokuapp.com
// File name: public/javascripts/app.js

console.log('Goes to the client side.');

if(getTitle == "Book List")
{
    let deleteButtons = document.querySelectorAll('.btn-danger');
        
    for(button of deleteButtons)
    {
        button.addEventListener('click', (event)=>{
            if(!confirm("Are you sure?")) 
            {
                event.preventDefault();
            }
        });
    }
}