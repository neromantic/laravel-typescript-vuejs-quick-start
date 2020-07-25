<template>
    <div>
        <h1 class="text-center">{{title}}</h1>
    </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component
export default class MainApp extends Vue{
    title:string
    constructor(){
        super();
        this.title = "Laravel Typescript and VueJs";
    }
}
</script>
