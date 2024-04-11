# vue-carpenter

## What is carpetry

This plugin creates a masonry-lite layout for images using the bare minimum javascript. Without the need for caluclating positions, vue-carpenter gets the job done quick, meaning your masonry layout loads in the DOM  far faster than true masonry libraries.

Because of the naive nature of this approach, this library is best used when your images are all similar dimensions. The carpenter approach doesn't know which columns are the longest, so columns can end at different points. Hence the name carpenter; it's not perfect, but it can do most of masonry!

## Import into Vue 3 project
```
<template>
    <Carpenter :photos="photos" />
</template>

<script setup>
import { Carpenter } from 'vue-carpenter'
import "vue-carpenter/dist/style.css";
import photos from "./photos.json";
</script>
```
## Create your photos.json
```
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
```

...and you're done!

## What's Next
* Support for custom styles (sizing, spacing, colors around borders)
* A fast, true masonry approach so users can use this single library for multiple use cases in case some galleries are uniform image sizes and others have varying sizes
* More documentation. This was rippped from my personal website, so documentation and use cases are minimal at the moment.
* Better json support so users don't have to make their own json files for images
