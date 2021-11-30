<template>
  <div class="Home">
   
     <head>
        


        <meta name="viewport" content="width=device-width, initial-scale=1">
    
        </head>
       
    <form action="/action_page.php">
        <div class="container">
            <div class="title"><b>Hello, customer!</b>
                <div class="subtitle">
                    Please fill your car details below</div>  
            </div>    
            </div>   
            <hr>
            <div class="content">
            <div class="user-details">
           
            </div> 
              
            <div class="input-box">
                <label class="details" for="Year"><b>Year: </b></label>  
                <select name="Year" required>
                    <option value="" selected disabled hidden>Select a Year</option>
                    <option value="2021">2021</option>
                    <option value="2021">2022</option>
                </select>
            </div>  
      
      <div class="input-box"> 
             
                <label class="details" for="Manufacturer"><b>Manufacturer: </b></label> 
                <select data-target="secondList" class="firstList selectFilter" v-on:click="change">
  <option value="" selected disabled hidden>Select a Manufacturer</option>
<option data-ref="audi" >audi</option>
<option data-ref="bmw" >bmw</option>
<option data-ref="jeep">First Three</option>>
                    </select>     
        
                <label class="details" for="Model"><b>Model: </b></label> 
                <select data-target="thirdList" class="secondList selectFilter">

	<option value="-1">Select</option>
	<option  data-belong="audi">a1</option>
	<option  data-belong="bmw">b1</option>
	<option  data-belong="audi">TT</option>
	<option  data-belong="audi">a2</option>
	<option  data-belong="bmw">b2</option>


</select>
                      
            </div> -->
       
            <div  class="input-box">
                <label class="details" for="Condition"><b>Condition: </b></label>
                <input type="text" placeholder="Condition" id="Condition" name="Condition"/>
            </div>
            <div class="input-box">
                <label class="details" for="Cylinders(?)"><b>Cylinders(?): </b></label>
                <input type="text" placeholder="Cylinders(?)" id="Cylinders(?)" name="Cylinders(?)"/>
            </div>
            <div class="input-box">
                <label class="details" for="Mileage"><b>Mileage: </b></label>
                <input type="text" placeholder="Mileage" id="Mileage" name="Mileage"/>
            </div>
            <div class="input-box">
                <label class="details" for="Fuel Type"><b>Fuel Type: </b></label>
                <select name="Fuel Type" required>
                    <option value="" selected disabled hidden>Select a Fuel Type</option>
                    <option value="95">95</option>
                </select>
            </div>
            <div class="input-box">
                <label class="details" for="Transmission"><b>Transmission: </b></label>
                <select name="Transmission" required>
                    <option value="" selected disabled hidden>Select a Transmission</option>
                </select>
            </div>
            <div class="input-box">
                <label class="details" for="Drive"><b>Drive: </b></label>
                <select name="Drive" required>
                    <option value="" selected disabled hidden>Select a Drive like 4X4</option>
                </select>
            </div>
            <div class="input-box">
                <label class="details" for="Size of vehicle"><b>Size of vehicle: </b></label>
                <select name="Size of vehicle" required>
                    <option value="" selected disabled hidden>Select a Size of vehicle</option>
                </select>
            </div>
            <div class="input-box">
                <label class="details" for="Type of vehicle"><b>Type of vehicle: </b></label> 
                <select name="Type of vehicle" required>
                    <option value="" selected disabled hidden>Select a Type of vehicle</option>
                </select>
            </div>
            <div class="input-box">
                <label class="details" for="Color"><b>Color: </b></label>
                <select name="Color" required>
                    <option value="" selected disabled hidden>Select a Color</option>
                </select>
            </div>
            
            <hr>
            
            <button @click.prevent="goToResult" type="submit" class="registerbtn">continue to recommended price</button>
        </div>
        
     </form> 
    </div> 
  
    
     
    
  
</template>


<script>
import $ from 'jquery'


export default {

  name: "Home",
  components: {},
  
  methods:{
      change()
      {
          $(".selectFilter").on("change",function(){var e=$(this).data("target"),i=$(this).find(":selected").data("ref");$("select."+e).val("-1"),null==i?$("select."+e).find("option").each(function(){console.log("inside undefined"),$(this).removeAttr("disabled hidden")}):$("select."+e).find("option").each(function(){var e=$(this).data("belong"),t=$(this).val();i!=e&&-1!=t?($(this).prop("disabled",!0),$(this).prop("hidden",!0)):($(this).prop("disabled",!1),$(this).prop("hidden",!1))})});
      },
   goToResult()
   {
   this.$router.push({name:"Result"});
   },
  } 
  
};

</script>
    <style lang="scss">
        @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Quicksand", sans-serif;
        }
        body {
            font-family: "Quicksand", sans-serif;
            background: linear-gradient(135deg, #71b7e6, #9b59b6);
            margin: 50px;
            padding: 10px;
            align-items: center;
            justify-content: center;
            text-align: center;
            display: flex;
        }

        * {
          box-sizing: border-box;
          border-radius: 5px;
        }
        
        /* Add padding to containers */
        .container{
        max-width: 700px;
        width: 100%;
        background-color: #fff;
        padding: 25px 30px;
        border-radius: 5px;
        box-shadow: 0 5px 10px rgba(0,0,0,0.15);
        }
        .container .title{
        font-size: 40px;
        font-weight:500;
        position: relative;
        text-align: left;
        
        }
        .container .subtitle{
        font-size: 15px;
        font-weight: 500;
        position: relative;
        }
        .container .title::before{
        content: "";
        position: absolute;
        left: 0;
        bottom: -5;
        height: 3px;
        width: 100px;
        border-radius: 5px;
        background: linear-gradient(135deg, #71b7e6, #9b59b6);
        }
        
        .content .user-details{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 20px 0 12px 0;
        }
        .user-details .input-box{
        margin-bottom: 15px;
        width: calc(100% / 2 - 20px);
        }
        .input-box label.details{
        display: block;
        font-weight: 500;
        margin-bottom: 5px;
        }
        
        .user-details .input-box  input[type=text]{
        height: 45px;
        width: 100%;
        outline: none;
        font-size: 16px;
        border-radius: 5px;
        padding-left: 15px;
        border: 1px solid #ccc;
        border-bottom-width: 2px;
        transition: all 0.3s ease;
        background: #f1f1f1;
        margin: 5px 0 22px 0;
        display: inline-block;
        text-align: left;
        }
       
        /* Overwrite default styles of hr */
        hr {
        border: 0px solid #ccc;
        margin-bottom: 25px;
        }
        
        /* Set a style for the submit button */
        .registerbtn {
        background: linear-gradient(135deg, #71b7e6, #9b59b6);
        height: 45px;
        width: 100%;
        margin: 35px 0;
        border-radius: 5px;
        border: none;
        color: #fff;
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 1px;
        cursor: pointer;
        transition: all 0.3s ease;
        }
        
        .registerbtn:hover {
          /* transform: scale(0.99); */
        background: linear-gradient(-135deg, #71b7e6, #9b59b6);
        }
    
        .select {
        width: 100%;
        height: 25px;
        padding: 15px;
        margin: 5px 0 22px 0;
        display: inline-block;
        background: #f1f1f1;
        cursor:pointer;
        position:relative;
        border:1px solid #ccc;
        }

        label {
        width: 130px;
        display: inline-block;
        text-align: left;
        }
        select {
        height: 45px;
        width: 100%;
        outline: none;
        font-size: 16px;
        border-radius: 5px;
        padding-left: 15px;
        border: 1px solid #ccc;
        border-bottom-width: 2px;
        transition: all 0.3s ease;

        background: #f1f1f1;
        margin: 5px 0 22px 0;
        display: inline-block;
        text-align: left;
        }
        </style>