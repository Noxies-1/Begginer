<?php

require_once "database.php";

class Barang
{
    private Database $db;

    function __construct()
    {
        $this->db = new Database();
    }

    function tampilData($table, $where = null)
    {
        return $this->db->select($table, $where);
    }
}