 <?php 
/*
 * Juan Jose Murillo Aguirre
 * Test for Gravility inc 
 */
//leemos el valor de T 

//$t= $_GET["t"];
?>
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Test for Grability</title>
<meta name="description" content="">
<meta name="viewport" content="width=device-width">
<link rel="stylesheet" href="public/themes/default/css/bootstrap.min.css">
<link rel="stylesheet" href="public/themes/default/css/bootstrap-responsive.min.css">
<link rel="stylesheet" href="public/themes/default/css/style.css">

</head>
<body>
<div class="navbar navbar-fixed-top">
   <div class='box-content box-nomargin'>
  
 <div class="container">
  <div class="jumbotron">
    <h1>Grability Inc &reg;</h1> 
    <p>Test  code challenge para Grability inc, Proceso de Seleccion de Personal..</p> 
    <p>Level: Dificult</p> 
  </div>
  


    <p>
 <form name="frmEmail" method="GET" action=""  class="form-horizontal" id="contact-form">
    <fieldset>

      <?php
       $m=$_GET["m"];
       $t=$_GET["t"];
        if ($t<0){
			?>
          <div class="alert alert-success" style="width:350px !important">
  				<strong>Success!</strong> Test Finalizado Satisfactoriamente.
		</div>
         <p> <a class="btn btn-primary btn-large" href='inicio.php' > Iniciar Nuevo Test</a></p>
          <?php
        } else{
           
           if($m==""){?>
         
    <div class="alert alert-info" style="width:350px !important">
  <strong>Test N&ordm;</strong> <?php echo $t ?>
</div>
  <div class="alert alert-info" style="width:350px !important">
    <p><strong>Nota:</strong> El valor <strong>M</strong> equivale al numero de QUERY´S que deseas enviar al sistema
      Recuerda enviar los comandos con la sintaxis correcta</p>
    <strong>Ej: UPDATE 2 2 2 4  </strong>
    <p>o  </p>
    <strong>QUERY 1 1 1 3 3 3 </strong>
  </div>

        <?php
          $t--;
    
		  ?>
         
            <div class="control-group">
            
     Valor  M: 
    
    
    <input type="text" class="input-small" value="" name="m" id="m">
     
   
     <input type='hidden'  name='t'   value='<?php echo $t ?>' > 
      
    <button type="submit" class="btn btn-primary btn-large">Generar</button>
     </div>  
          <?php }?>
          <input type='hidden'  name='t'   value='<?php echo $t ?>' > 
           

          <div class="control-group">
          <?PHP for ($key = 1; $key <= $m; $key++)
          {?>
          Query:
          <input type="text" class=""    name="name[]" id="name[]" ><br>
          <?php } ?>
          
          <?php if($m!=""){;?>
          <br>
            <div class="controls">
    <button type="submit" class="btn btn-primary btn-large">Procesar</button>
     </div>
          <?php } ?>
          </div>
    </fieldset>
</form>

        <?php
	//inicializar matrix en 0 
		for ($x = 0; $x <= $n; $x++){
			for ($y = 0; $y <= $n; $y++) {
				for ($z = 0; $z <= $n; $z++){
						$matrixn[$x][$y][$z] = 0;
				}
			}
	}
  	    if($name!=""){
          foreach( $name as  $m ) {
            $query=$m;
            $codquery=explode(" ", $query) ;
            $type_query=$codquery[0];
            if($type_query == "UPDATE"){
              $x=$codquery[1]; $y=$codquery[2];$z=$codquery[3];$w=$codquery[4];
              $matrixn[$x][$y][$z] = $w;
			 

              echo $result=$matrixn[$x][$y][$z]."<br>";
			   
            }
            else if($type_query=="QUERY"){
              $x1=$codquery[1];$y1=$codquery[2];$z1=$codquery[3];$x2=$codquery[4];$y2=$codquery[5];$z2=$codquery[6];
              //suma de los blocks segun consulta tipo query  x y z
			  	 
              echo  $result= $matrixn[$x1][$y1][$z1] + $matrixn[$x2][$y2][$z2]."<br>";
              //echo "</br>"."Resultado= ".$result."</br>";
			   
            }
            else{
				
              echo $result="Por favor digite los tipos de comandos correctamente." ;
            }
			
          }//fin de foreach
  		}//fin if M
      } //fin del else
?>
</div>
<script type="text/javascript" src="public/themes/default/js/jquery.js"></script>
<script src="public/themes/default/js/jquery-ui-1.10.0.custom.min.js"></script>
<script src="public/themes/default/js/bootstrap.min.js"></script>
<script src="public/themes/default/js/jquery.dataTables.min.js"></script>
<script src="public/themes/default/js/custom.js"></script>
<script src="public/themes/default/js/jquery.validate.min.js"></script>
</div>
</body>
</html>