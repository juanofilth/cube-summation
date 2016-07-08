

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
	
	<?php
    $t=$_GET["t"];
    $m=$_GET["m"];
    $k=$t
?>
    <form name="form1" method="GET" action="process.php"  class="form-horizontal" id="contact-form">
    <br>
    <fieldset>
     <div class="alert alert-info" style="width:350px !important">
  <strong>Nota:</strong> Recuerda que el valor T equivale al numero de test que deseas realizar!
</div>
    <br>
<?php
    if($t==""){;
?>
    Ingrese Valor T:
    <input type="text" class="" size="2" value="<?php echo $t;?>"  name="t" id="t" ><br>
<?php
    //echo "<input type='hidden'  name='key'   value='$k' >";
?>
    <button type="submit" class="btn btn-primary btn-large" >Iniciar Test</button>
    
    </fieldset></form>
<?php
    }
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