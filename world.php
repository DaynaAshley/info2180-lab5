<?php
$host = 'localhost';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';

$country= $_GET['country'];
$context=$_GET['context'];


$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
$stmt = $conn->query("SELECT * FROM countries WHERE name LIKE '%{$country}%'");

$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

if ($context=='cities'){
  $stmt1 = $conn->query("SELECT cities.name ,cities.district, cities.population FROM cities join countries on cities.country_code = countries.code Where countries.name = '$country'" );
  $results1 = $stmt1->fetchAll(PDO::FETCH_ASSOC);
}

?>

<?php if($context=='country'){?>
 <table class= "ctable">
  <thead>
    <tr>
    <th>Country Name</th>
    <th>Continent</th>
    <th>Independence Year</th>
    <th>Head of State</th>
</tr>
  </thead>

  <?php foreach ($results as $row): ?>
  <tbody>
    <tr>
  <td><?=$row['name'];?></td>
  <td><?=$row['continent'];?></td>
  <td><?=$row['independence_year'];?></td>
  <td><?=$row['head_of_state'];?></td>
  </tr>
 </tbody>
 <?php endforeach; ?>
</table>
<?php } ?> 

<?php if($context=='cities'){?>
 <table class= "citytable">
  <thead>
    <tr>
    <th>Name</th>
    <th>District</th>
    <th>Population</th>
    </tr>
  </thead>

  <?php foreach ($results1 as $row1): ?>
  <tbody>
    <tr>
  <td><?=$row1['name'];?></td>
  <td><?=$row1['district'];?></td>
  <td><?=$row1['population'];?></td>
  </tr>
 </tbody>
 <?php endforeach; ?>
</table>
<?php } ?> 


