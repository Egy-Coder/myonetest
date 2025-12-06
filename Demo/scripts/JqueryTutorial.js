

// $  ==>  Jqury (Access Jquery File)
// document  ==> body
// ready ==> Action(Event) - load the body before accessing the script
// function(){ // Logic }


// $(document).ready(function(){
//     // Jquery Logic HEre
//     $("#myh1").text("Welcome");
// });

// OR

// Recommended
$(function () {


    // Jquery Logic HEre
    //    $("#myh1").text("Welcome");


    // $('p').hide();


    // $('p').click(function(){
    //     // $('p').hide();
    //     $(this).hide();
    // });


    // $('#btn').mouseleave(function(){
    //     $('p').hide();
    // });


    // $('#btn').mouseenter(function(){
    //     $('p').hide();
    // });

    // $('#btn').dblclick(function(){
    //     $('p').hide();
    // });

    // $('#btn').click(function(){
    //     $('p').hide();
    // });

    // if button created at run time
    // $('#btn').on('click', function(){
    //      $('p').hide();
    // });


    // If You want to add More Then One Event On The Same Button 'On()'

    // $('#btn').on({ 
    //     'mouseenter' : function(){
    //         $('p:first').hide();
    //     } , 
    //     'click' : function(){
    //         $('#p2').hide();
    //     } , 
    //     'dblclick' : function(){
    //         $('#p3').hide();
    //     } , 
    //     'mouseleave' : function(){
    //         $('p').show();
    //     } , 
    // });


    // $('#btn1').click(function () {

    //     $('h1').show();

    // });


    // $('#btn2').click(function () {

    //     $('h1').hide(1000);

    // });


    // $('#btn3').click(function () {

    //     $('h1').toggle();

    // });


    // $('#btn').on({

    //     'mouseenter' : function (){
    //         $('h1').css('color','red');
    //     },
    //     'click' : function (){
    //         $('h1').css('color','green');
    //     },
    //     'dblclick' : function (){
    //         $('h1').css('color','blue');
    //     },
    //     'mouseleave' : function (){
    //         $('h1').css('color','black');
    //     }

    // });





    // Set

    // $('body').text('<h1>Welcome</h1>');
    // $('body').html('<h1>Welcome</h1>');
    // $('#txt1').val('ahmed');



    // Get
    // var text = $('h1').text();
    // alert(text);

    // var text = $('h1').html();
    // alert(text);

    // var text = $('#txt1').val();
    // alert(text);



    // $('#txt').focus(function(){
    //      $('#txt').css('color' , 'red').css('border', '3px solid red');
    // });


    // $('#txt').blur(function(){
    //      $('#txt').css('color' , 'black').css('border', '3px solid black');
    // });


    // $('#txt').keydown(function(){
    //      $('#txt').css('color' , 'blue');
    // });


    // $('#txt').keyup(function(){
    //      $('#txt').css('color' , 'black');
    // });


    // $('#txt').keyup(function(){
    //      $('#txt').css('color' , 'black');
    // });


    // $('#txt').keypress(function(){
    //     var countLength =  $('#txt').val().length;
    //     $('span').text(countLength);
    // });


    // $('#txt').blur(function(){
    //     $('#txt').val('').focus();
    //     $('span').text(0);
    // });


    // $('#btn1').click(function () {

    //     // $('h1').addClass('mystyle');
    //      $('h1').addClass('text-primary')
    //      .addClass('display-1');

    // });


    // $('#btn2').click(function () {

    //     // $('h1').removeClass('mystyle');
    //     $('h1').removeClass('text-primary')
    //      .removeClass('display-1');

    // });


    // $('#btn3').click(function () {

    //     // $('h1').toggleClass('mystyle');
    //     $('h1').toggleClass('text-primary')
    //      .toggleClass('display-1');

    // });



    // $('#btn').click(function () {

    //     var fName = $('#txt1').val();
    //     var sName = $('#txt2').val();

    //     var fullName = fName + ' ' + sName;

    //     $('#txt3').val(fullName);


    //     $('#txt1').val('').focus();
    //     $('#txt2').val('');

    // });



    // $('#btn').click(function () {

    //     var fnum = Number($('#txt1').val());
    //     var snum = Number($('#txt2').val());

    //     var sum = fnum + snum;

    //     $('#txt3').val(sum);

    //     $('#txt1').val('').focus();
    //     $('#txt2').val('');

    // });


    // $('#btn').click(function () {

    //     var fName = $('#txt1').val();
    //     var sName = $('#txt2').val();
    //     var fullName = fName + ' ' + sName;

    //     var fnum = Number($('#txt1').val());
    //     var snum = Number($('#txt2').val());
    //     var sum = fnum + snum;


    //     if(!isNaN(sum))
    //         $('#txt3').val(sum);
    //     else
    //         $('#txt3').val(fullName);


    //     $('#txt1').val('').focus();
    //     $('#txt2').val('');

    // });



    // $('#btn').click(function(){

    //     var course = $('#txt1').val();
    //     var list = $('#myList');

    //     // $('#myList').append('<li>'+course+'</li>'); // Way 1
    //     // list.append("<li>"+course+"</li>");  // Way 2

    //     Way 3 - Recommended
    //     list.append(`
    //            <li> ${course} </li>
    //         `);

    //    $('#txt1').val('').focus();

    // });






    // $('#btn').click(function(){

    //     var country = $('#txt1').val();
    //     var list = $('#myList');

    //     list.append(`
    //            <option> ${country} </option>
    //         `);

    //    $('#txt1').val('').focus();

    // });









    // $('#myList').change(function () {

    //     var name = $('#txt1').val();
    //     var salary = $('#txt2').val();
    //     var country = $('#myList option:selected').text();
    //     var table = $('#mytbl');


    //     table.append(`
            
    //             <tr>
    //                 <td class='name'> ${name} </td>
    //                 <td class='salary'> ${salary} </td>
    //                 <td class='cntry'> ${country} </td>
    //                 <td> <input type='button' value='Delete' class='btn btn-primary rmv' /> </td>
    //             </tr>
            
    //         `);

    //     $('#myList option:selected').remove();

    //     // $('#txt1').val('').focus();
    //     // $('#txt2').val('');

    // });


    // $('#mytbl').on('click', '.rmv', function () {

    //     // $(this).parent().parent().remove();
    //     // $(this).parent().parent().children('td:first').remove();
    //     // var x = $(this).parent().parent().children('.cntry').text();
    //     // alert(x);

    //     var selectedCountry = $(this).parent().siblings('.cntry').text();
    //     $(this).parent().parent().remove();

    //     $('#myList').append('<option> '+selectedCountry+' </option>');

    // });



    // $('#mytbl').on('click', '.name', function () {

    //     var txt = $(this).text();

    //     $('.name').empty();

    //     $(this).append(`
            
    //            <input type='text' value='${txt}'/>
            
    //         `);
    // });



    // $('#btn').click(function(){

    //     $('#tbl').empty();
    //     $('#tbl').append('<tr><td>Content</td></tr>');

    //     $.each($('div') , function(i,e){

    //           var data = $(e).text();

    //           $('#tbl').append(`
    //                 <tr>
    //                   <td> ${data} </td>
    //                 </tr>
    //             `);
    //     });

    // });


    // $('#check1').click(function(){

    //     var checkbox = $(this)[0].checked;
        
    //     if(checkbox == true)
    //         $('#txt1').prop('type' , 'text');
    //     else
    //         $('#txt1').prop('type' , 'password');

    // });




    // Ajax Request => Asyncronous Javascript and XML


    // ajax request
    $.Ajax({

        // http request type that needed for api
        type:"GET",
        // to request the api
        url:"jsonplaceholder.typicode.com/posts?_limit=10",
        // To send parameter to api
        data: {},
        // Catch Response from API
        success : function(res){

            // Your Logic Here
        }

    });



});