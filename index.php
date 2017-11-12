<?php
//Task 2
$alldrv = json_decode(file_get_contents("drv.json"));
$baddrv = json_decode(file_get_contents("baddrv.json"));

foreach ($baddrv as $k => $v) {
    foreach ($alldrv->data as $n => $d) {
        if ($v === $d->serial) {
            echo "Found bad: $v\n";
        }
    }
}

//Task 3
function bzfile($fileurl){
    $bz = bzopen($fileurl, "r") or die("Couldn't open $fileurl for reading");
    $data="";
    while(!feof($bz)) {
        $line=bzread($bz, 50);
        if($line!==false)
            $data.=$line;
    }


    bzclose($bz);

    return $data;
}

$json = bzfile('/var/www/html/js-project/bigf.json.bz2');
$data = json_decode($json, true);

$unique_models = array_unique(array_column($data, 'model'));

$count = array_count_values(array_column($data, 'model'));

print_r($count);





