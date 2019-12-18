        var myphoto=document.getElementById("myimg");
        var submt=document.getElementById("submit");
    		var alphpa=document.getElementById("alpha");
        var number=document.getElementById("numbers");
         var error=document.getElementById("error");
          var word=document.getElementById("word");
    		var ar=[1,2,3,4,5,6,7];
    		var alphpet=
    		["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
              //var i=0;
        var words=["Apple.jpg","Book.jpg","Dog.jpg","Snake.jpg","Zebra.jpg","Yak.jpg","Tiger.jpg","Car.jpg","Wheel.jpg","Rabbit.jpg","Lion.jpg","Egg.jpg","Mango.jpg","Quilt.jpg","Parrot.jpg","Nest.jpg","Umberalla.jpg","Vegetables.jpg","Onion.jpg","Fan.jpg","Kite.jpg","Insects.jpg","Jacket.jpg","Hen.jpg","Goat.jpg","Xray.jpg"];
        //console.log(words);

                var picture=document.getElementById("pict");
                var listspan=document.getElementsByTagName("span");
                
         function Object_Letter(Event_Target,Event_Type,Event_Time)
         {
          this.Event_Target=Event_Target;
          this.Event_Type=Event_Type;
          this.Event_Time=Event_Time;
          
         }
         
                
        function rand()
        {
          var n=Math.floor(Math.random()*26);
          return n;
    
        }
         
      window.addEventListener("load",function(e){
                 //count2=0;
                 //Object_Letters="";
                 var p1=new Object_Letter();
                 //p1.Event_Target=submt.value;
                 p1.Event_Time=new Date();
                 p1.Event_Type=e.type;
                 var con="Loading"+"-"+p1.Event_Time+"-"+p1.Event_Type;
                 //localStorage.setItem('submit',con);
                 if(localStorage.getItem("TheLoading")===null)
                 {
                   localStorage.setItem("TheLoading",con);
                 }
                 else
                 {
                
                   var a= new Array(localStorage.getItem("TheLoading"));
                   a.push(con);
                   localStorage.setItem("TheLoading",a);
                 }
       
       });
      
      
            window.addEventListener("unload",function(e){
       
                 var p1=new Object_Letter();
                 //p1.Event_Target=submt.value;
                 p1.Event_Time=new Date();
                 p1.Event_Type=e.type;
                 var con="UnLoading"+"-"+p1.Event_Time+"-"+p1.Event_Type;
                 //localStorage.setItem('submit',con);
                 if(localStorage.getItem("The UnLoading")===null)
                 {
                   localStorage.setItem("The UnLoading",con);
                 }
                 else
                 {
                
                   var a= new Array(localStorage.getItem("The UnLoading"));
                   a.push(con);
                   localStorage.setItem("The UnLoading",a);
                 }
       
       });
         //
       submt.addEventListener("click",function(e){
                              
                      //chek the entry number is valid or no.
                   myphoto.src="Project_Images"+"/"+"wellcom.jpg";                     
                   word.style.display="none";                     
                   var nnn=number.value;
                   

                   if(nnn=="0"||nnn<0)
                   {
                    error.innerHTML="";
                    error.innerHTML="the number is not valid.";
                    alpha.innerHTML="";
                    myphoto.src="Project_Images"+"/"+"wellcom.jpg";
                   }
                   
                   if(nnn>26)
                   {
                    error.innerHTML="";
                    error.innerHTML="the number is out of range, the range : from 1 to 26 .";
                    alpha.innerHTML="";
                    myphoto.src="Project_Images"+"/"+"wellcom.jpg";
                   }
                   
                   if(nnn!==0 && nnn>0 && nnn<27)
                   { 
                    error.innerHTML="";
                    alpha.innerHTML="";
                    var p1=new Object_Letter();
                    p1.Event_Target=submt.value;
                    p1.Event_Time=new Date();
                    p1.Event_Type=e.type;
                    var con=p1.Event_Target+"-"+p1.Event_Time+"-"+p1.Event_Type;
                    //localStorage.setItem('submit',con);
                    if(localStorage.getItem("submit")===null)
                    {
                      localStorage.setItem("submit",con);
                    }
                    else
                    {
                   
                      var a= new Array(localStorage.getItem("submit"));
                      a.push(con);
                      localStorage.setItem("submit",a);
                    }
                    GenerateArray_RoundNumbers(nnn);
                   }
                              
                              
                              });
           
          //////////////////////generate the random number without repition.
          function GenerateArray_RoundNumbers(randnum)
          {
                   var arr= [];
                for(var i1=0;i1<randnum;i1++)
                  {
                        var m=rand();
                        if(i1===0)
                        {
                            arr[i1]=m;
                        }
                        else
                        {
                            while(Contains(m,arr))
                            {
                                m=rand();
                                
                            }
                            arr[i1]=m;
                            
                        }
                  }

                    
              Create_SpansLetters(arr);
              
          }

        function Create_SpansLetters(arr)
        {
                   alpha.innerHTML="";
                    
                for(var i=0;i<arr.length;i++)
                {
                  var paragrap=document.createElement("span");
                  var text=document.createTextNode(alphpet[arr[i]]);
                  paragrap.appendChild(text);
                  alphpa.appendChild(paragrap);
                  
                }
          
               ShowPict_ByClickInSpan();
          
        }
             
             function ShowPict_ByClickInSpan()
             {
               
                 for(var j=0;j<listspan.length;j++)
                  {
                  listspan[j].addEventListener("click",function(e)
                     {
                      
                       word.innerHTML="";
                    var p1=new Object_Letter();
                    p1.Event_Target=e.target.textContent;
                    p1.Event_Time=new Date();
                    p1.Event_Type=e.type;
                    var con=p1.Event_Target+"-"+p1.Event_Time+"-"+p1.Event_Type;
                    // localStorage.setItem('LeterClick',con);
                    if(localStorage.getItem("span_Letter")===null)
                    {
                      localStorage.setItem("span_Letter",con);
                    }
                    else
                    {
                   
                      var a= new Array(localStorage.getItem("span_Letter"));
                      a.push(con);
                      localStorage.setItem("span_Letter",a);
                    }
                    
                    
                    var word_letter="";
                    var item="";
                    for(var v=0;v<words.length;v++)
                    {
                       item=words[v].split('.');
                      var word_splited=item[0];
                      if(word_splited[0]==p1.Event_Target)
                      {
                        word_letter=word_splited;
                      }
                      
                      
                    }
                    var inp="Project_Images"+"/"+e.target.textContent+'.'+item[1];
                    word.style.display="Block";
                     var _word=document.createElement("p");
                     var _text=document.createTextNode('" '+word_letter+' "');
                     _word.appendChild(_text);
                     word.appendChild(_word);
                      
                       displayPhoto(inp);
                     });
                   }
              
             }
             
             
              function displayPhoto(source)
              {
              
             
                myphoto.src=source;
                 

              }
              
          //for avoid the repition.    
      function Contains(index,arr)
        {
            var flage=false;
            for(var b=0;b<arr.length;b++)
            {
                if(index===arr[b])
                {
                    flage=true;
                    return true;
                }
                
                
            }
            if(flage===false)
            {
                return false;
            }
            
        }
        
        //this code will be done four times.
        //with submit button .
        //with span letter .
        //with load .
        //with unload .
        //must create array of objects including the four previous arrays to send it a json object .
        ////////////////////////////////////////////////////////////////////////////////
        //var Object_Letters=[];
        //var arrlocalstr_Letters=[];
        //var arrlocalstr_Loading=[];
        //var arrlocalstr_UnLoading=[];
        //var arrlocalstr_Submiting=[];
        //console.log(Object_Letters);

                            
    setInterval(function(){
                 /////////////////////////////////////////////////////
                     
                    var Object_Letters=[];
                    var arrlocalstr_Letters=[];
                    var arrlocalstr_Loading=[];
                    var arrlocalstr_UnLoading=[];
                    var arrlocalstr_Submiting=[];
                    var count2=0;
            
                      
                            if(localStorage.getItem("TheLoading"))
                    {
                      
                        arrlocalstr_Loading=localStorage.getItem("TheLoading").split(',');
                        console.log(arrlocalstr_Loading[0]);
                        for(var x=0;x<arrlocalstr_Loading.length;x++)
                        {
                          
                            var localString=arrlocalstr_Loading[x].split('-');
                            Object_Letters[count2++]=new Object_Letter(localString[0],localString[2],localString[1]);
                            
                        }
                      
                    }
            
                    if(localStorage.getItem("The UnLoading"))
                    {
                      
                        arrlocalstr_UnLoading=localStorage.getItem("The UnLoading").split(',');
                        
                        console.log(arrlocalstr_UnLoading[0]);
                          for(var x2=0;x2<arrlocalstr_UnLoading.length;x2++)
                        {
                            var localString2=arrlocalstr_UnLoading[x2].split('-');
                            Object_Letters[count2++]=new Object_Letter(localString2[0],localString2[2],localString2[1]);
                            
                        }
                      
                    }
                    
                    
                    if(localStorage.getItem("submit"))
                    {
                      
                        arrlocalstr_Submiting=localStorage.getItem("submit").split(',');

                        for(var x1=0;x1<arrlocalstr_Submiting.length;x1++)
                        {
                            var localString1=arrlocalstr_Submiting[x1].split('-');
                            Object_Letters[count2++]=new Object_Letter(localString1[0],localString1[2],localString1[1]);
                           
                        }
            
                    }
                    
                    if(localStorage.getItem("span_Letter"))
                    {
                      
                        arrlocalstr_Letters=localStorage.getItem("span_Letter").split(',');
                        for(var x3=0;x3<arrlocalstr_Letters.length;x3++)
                        {
                            var localString3=arrlocalstr_Letters[x3].split('-');
                            Object_Letters[count2++]=new Object_Letter(localString3[0],localString3[2],localString3[1]);
                            
                        }
                                  
                    }
                         
                             
                             ////////////////////////////////////////////////////////////////////
                             //var newobject=Return_all_in_local_strge();
                              $.ajax({
                              "type": "POST",
                              "url": "project.php",
                              "data": {"object":JSON.stringify(Object_Letters)},
                              "success": function(response){
                               console.log(response);
                               localStorage.clear();
                               //Object_Letters.splice(1,Object_Letters.length);
                               
                              }
                           });
 
 
                },5000);
              
              

              ///////////////////////////////////////////////////////
              //////////////////////////////////////to get the data from database .//////////
              $("#bt").on("click",function(){
                 $("#bt").css({"background":"green"});
                 $("#Hide_data").css({"background":"red"});
                 $.ajax({
                     "type": "GET",
                     "url": "project.php",
                     "data": {"person": ""},
                     "success": function(response){
                      
                             if(response)
                             {
                                                            
                                     $("#show_table").css({"display":"block"});
                                     var s="";
                                      var persons = JSON.parse(response);
                                        console.log(persons);
                                        $.each(persons,function(x){
                                            //   x=JSON.stringify(x);
                                        s="The Event : "+persons[x]['_event']+"."+"<br>"+"The time : "+persons[x]['_time']+"."+"<br>"+"The target :  "+persons[x]['_target']+"."+"<br>";
                                        s+="________________________________________________________<br>";
                                        $("#show_table").append(s+"<br>");
                                  
                                        });                             
                             }
                             
                             else{
                              $("#show_table").text("no data to show");
                             }
                             
                             
                     
                     }
                 });
                
                
                
                });
              
              //////////////////////////////////////////////////////////////////
        var bt=$("#btn");
        var _scroll=0;
        
        
       $(window).on("scroll",function(){
        _scroll=$(window).scrollTop();
            });
       
       //display or not for a button scroll top.
        $(window).on("scroll",function(){
            if(_scroll>550)
            {
                $("#btn").fadeIn();
            }
            
            else{ $("#btn").fadeOut();}
            
            });

            
            //scroll top by smoothing within 1 second .
              bt.on("click",function(){
              $('html,body').animate(
                {scrollTop:0},1000
              );
              });
              
              ///////////////////////to hide the data ./////////////////
              $("#Hide_data").on("click",function(){
                $("#Hide_data").css({"background":"green"});
                $("#bt").css({"background":"red"});               
                $("#show_table").css({"display":"none"});
                });
              
              
              

              //setInterval(function(){localStorage.clear();},5000);
     