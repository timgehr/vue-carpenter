# vue-carpenter

This plugin creates a masonry-adjacent layout for images.

## Import into Vue 3 project

<template>
    <Carpenter :photos="photos" />
</template>

<script setup>
import { Carpenter } from 'vue-carpenter'
import "vue-carpenter/dist/style.css";
import photos from "./photos.json";
</script>

## Create your photos.json

[
    {
        "title": "Disco",
        "url": "https://i.imgur.com/NcgCvIq.jpg"
    },
    {
        "title": "Splash",
        "url": "https://i.imgur.com/0S2pmXh.jpg"
    },
    //etc...
]
