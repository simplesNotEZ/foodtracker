<template>
    <div id="footer-outer-div">
        <div id="footer-inner-div">
            <h2>Look at these shoes!</h2>
        </div>
    </div>
</template>

<script>

export default {
    
    name: 'Footer',
    
    data() {
        return {

        }
    }
}

</script>


<style>

#footer-outer-div {
    background-color: green;
    display: flex;
    flex-direction: column;
}
#footer-inner-div {
    flex-shrink: 0;
}

h2 {
    color: yellow;
}

</style>