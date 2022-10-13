<?php

/**
package Carrousel
version 1.0.0
*/
/*
Plugin name: carrousel_JP
*/

function genere_boite(){
    $contenu = "<div class='carrousel'>carrousel</div>";

    return $contenu;
}
add_shortcode("carrousel_JP","genere_boite");
