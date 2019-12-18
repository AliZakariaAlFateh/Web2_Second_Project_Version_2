<?php
$server='localhost';
$username='root';
$password='rootroot';
//$password='';
$database='Alphabet';
$table='alphabet_events';

$con=mysqli_connect($server,$username,$password,$database);


 if(isset($_POST['object'])){
	//Convert it to an Associative Array
    //echo ("now recived object");
	$person = json_decode($_POST['object'], true);
	print_r($person);

    for($i=0;$i<count($person);$i++)
    {
      
        $Event=$person[$i]['Event_Type'];
        $Time=$person[$i]['Event_Time'];
        $Target=$person[$i]['Event_Target'];
        //$addr=$person[$i]['Address'];
        $q="insert into alphabet_events values('$Event','$Time','$Target')";
         $result=$con->query($q);
           
    }
    
    
	//Converting it back to a JSON String
	echo json_encode($person);  //important
	
}


	 if(isset($_GET['person'])){
   $sql = "Select * from alphabet_events"; 

   if ($result = $con->query($sql)){
     $rows = array();
     if($result->num_rows > 0){
      while($row = $result->fetch_assoc()){
       array_push($rows, $row);
      }
     //Convert to JSON Before Sending to Client
     echo json_encode($rows);
	  //echo $rows;
    }
  }
  else{
   echo "No Data to Retrieve";
  }
 }
	//echo("Any thing");


?>