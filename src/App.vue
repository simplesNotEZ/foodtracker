<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from "./atoms/Header.vue";
import Body from "./organisms/Body.vue";
import Footer from "./atoms/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Body,
    Footer
  }
};
</script>

<style lang="less">
#app {
  height: 100vh;
  max-width: 100vw;
  margin: 10px;
}
.container:before,
.container:after {
  content: " ";
  display: table;
}
.container:after {
  clear: both;
}
.container:before,
.container:after {
  content: " ";
  display: table;
}
.container:after {
  clear: both;
}
.row {
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 10px;
}
.row:before,
.row:after {
  content: " ";
  display: table;
}
.row:after {
  clear: both;
}
.row:before,
.row:after {
  content: " ";
  display: table;
}
.row:after {
  clear: both;
}
.row .col {
  float: left;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.row .col.no-collapse {
  min-height: 1px;
}
.row .col.twelvecol {
  float: left;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.row .nestedcol.twelvecol {
  float: left;
  width: 100%;
  padding-left: 0;
  padding-right: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.row .col.twelvecol.no-collapse {
  min-height: 1px;
}
.row .col.elevencol {
  float: left;
  width: 91.66666667%;
  padding-left: 10px;
  padding-right: 10px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.row .nestedcol.elevencol {
  float: left;
  width: 91.66666667%;
  padding-left: 0;
  padding-right: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.row .col.elevencol.no-collapse {
  min-height: 1px;
}
.row .elevenoffset {
  margin-left: 91.66666667%;
}
.row .col.tencol {
  float: left;
  width: 83.33333333%;
  padding-left: 10px;
  padding-right: 10px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.row .nestedcol.tencol {
  float: left;
  width: 83.33333333%;
  padding-left: 0;
  padding-right: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.row .col.tencol.no-collapse {
  min-height: 1px;
}
.row .tenoffset {
  margin-left: 83.33333333%;
}
.row .col.ninecol {
  float: left;
  width: 75%;
  padding-left: 10px;
  padding-right: 10px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.row .nestedcol.ninecol {
  float: left;
  width: 75%;
  padding-left: 0;
  padding-right: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.row .col.ninecol.no-collapse {
  min-height: 1px;
}
.row .nineoffset {
  margin-left: 75%;
}
.row .col.eightcol {
  float: left;
  width: 66.66666667%;
  padding-left: 10px;
  padding-right: 10px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.row .nestedcol.eightcol {
  float: left;
  width: 66.66666667%;
  padding-left: 0;
  padding-right: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.row .col.eightcol.no-collapse {
  min-height: 1px;
}
.row .eightoffset {
  margin-left: 66.66666667%;
}
.row .col.sevencol {
  float: left;
  width: 58.33333333%;
  padding-left: 10px;
  padding-right: 10px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.row .nestedcol.sevencol {
  float: left;
  width: 58.33333333%;
  padding-left: 0;
  padding-right: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.row .col.sevencol.no-collapse {
  min-height: 1px;
}
.row .sevenoffset {
  margin-left: 58.33333333%;
}
.row .col.sixcol {
  float: left;
  width: 50%;
  padding-left: 10px;
  padding-right: 10px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.row .nestedcol.sixcol {
  float: left;
  width: 50%;
  padding-left: 0;
  padding-right: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.row .col.sixcol.no-collapse {
  min-height: 1px;
}
.row .sixoffset {
  margin-left: 50%;
}
.row .col.fivecol {
  float: left;
  width: 41.66666667%;
  padding-left: 10px;
  padding-right: 10px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.row .nestedcol.fivecol {
  float: left;
  width: 41.66666667%;
  padding-left: 0;
  padding-right: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.row .col.fivecol.no-collapse {
  min-height: 1px;
}
.row .fiveoffset {
  margin-left: 41.66666667%;
}
.row .col.fourcol {
  float: left;
  width: 33.33333333%;
  padding-left: 10px;
  padding-right: 10px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.row .nestedcol.fourcol {
  float: left;
  width: 33.33333333%;
  padding-left: 0;
  padding-right: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.row .col.fourcol.no-collapse {
  min-height: 1px;
}
.row .fouroffset {
  margin-left: 33.33333333%;
}
.row .col.threecol {
  float: left;
  width: 25%;
  padding-left: 10px;
  padding-right: 10px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.row .nestedcol.threecol {
  float: left;
  width: 25%;
  padding-left: 0;
  padding-right: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.row .col.threecol.no-collapse {
  min-height: 1px;
}
.row .threeoffset {
  margin-left: 25%;
}
.row .col.twocol {
  float: left;
  width: 16.66666667%;
  padding-left: 10px;
  padding-right: 10px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.row .nestedcol.twocol {
  float: left;
  width: 16.66666667%;
  padding-left: 0;
  padding-right: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.row .col.twocol.no-collapse {
  min-height: 1px;
}
.row .twooffset {
  margin-left: 16.66666667%;
}
.row .col.onecol {
  float: left;
  width: 8.33333333%;
  padding-left: 10px;
  padding-right: 10px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.row .nestedcol.onecol {
  float: left;
  width: 8.33333333%;
  padding-left: 0;
  padding-right: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.row .col.onecol.no-collapse {
  min-height: 1px;
}
.row .oneoffset {
  margin-left: 8.33333333%;
}

/* Floats */
.cf:before,
.clear:before,
.clearfix:before,
.cf:after,
.clear:after,
.clearfix:after {
  content: " ";
  display: table;
}
.cf:after,
.clear:after,
.clearfix:after {
  clear: both;
}
.float-r {
  float: right;
}
.float-l {
  float: left;
}
.pr,
.pull-right {
  float: right;
}
.pl,
.pull-left {
  float: left;
}
</style>
