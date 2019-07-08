<template>
  <div class="row">
    <div class="col twelvecol button-div">
      <router-link :to="{ name: 'spots-list' }">
        <input class="spotsListButton" type="button" value="Spots List">
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowSpotsButton"
};
</script>

<style lang="less" scoped>
.row {
  .button-div {
    text-align: center;
    margin: 2vh 0 2vh;
    .spotsListButton {
      padding: 1.25vh 2vw;
      color: orange;
      background-color: green;
      border: 2px solid black;
      border-radius: 10px;
      font-size: 4vh;
      font-weight: bold;
      cursor: pointer;
    }
  }
  .spotsListButton:hover {
    background-color: #006600;
  }
}
</style>


