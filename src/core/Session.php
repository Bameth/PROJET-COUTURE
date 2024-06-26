<?php
namespace ab\Core;

class Session {
    public static function ouvrirSession() {
        if (session_status() == PHP_SESSION_NONE) {
            session_start();
        }
    }

    public static function add(string $key, mixed $data) {
        $_SESSION[$key] = $data;
    }

    public static function remove(string $key) {
        if (isset($_SESSION[$key])) {
            unset($_SESSION[$key]);
            return true;
        }
        return false;
    }

    public static function get(string $key): mixed {
        return $_SESSION[$key] ?? false;
    }

    public static function fermerSession() {
        unset($_SESSION["userConnect"]);
        session_destroy();
    }
}
