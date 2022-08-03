$(function(){
     
    // Btn toggle
     
    let btn = $(`header nav .btn`)
    
    btn.click(function(){

        let sidebar = $(`.sidebar`)
        sidebar.toggleClass(`activeSidebar`);
        
    })



})