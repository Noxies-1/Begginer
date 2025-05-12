<?php

require_once "barang.php";

$brg = new Barang();

$table = "barang";

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TUGAS 8</title>
</head>

<body>
    <h1>Tabel Barang</h1>
    <table border="1">
        <thead>
            <tr>
                <th>ID</th>
                <th>NAMA BARANG</th>
                <th>STOK</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $row = $brg->tampilData($table);
            foreach ($row as $data) {
            ?>
                <tr>
                    <td><?= $data['id']; ?></td>
                    <td><?= $data['nama_barang']; ?></td>
                    <td><?= $data['stok']; ?></td>
                </tr>
            <?php } ?>
        </tbody>
    </table>
</body>

</html>