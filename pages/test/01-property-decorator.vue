<template>
  <div class="container">
    <!--    <p>COUNT: {{ count }} - {{ portrait.name }}</p>-->
    <!--    <button @click="setPortrait">-->
    Add
    </button>
    <paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc ille tuus non vult omnibusque ex rebus voluptatem quasi mercedem exigit. Sed ad haec, nisi molestum est, habeo quae velim. Quare ad ea primum, si videtur; Uterque enim summo bono fruitur, id est voluptate. Recte, inquit, intellegis. Verba tu fingas et ea dicas, quae non sentias?
    </paragraph>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import paragraph from '~/components/v1/text/paragraph.vue'
// import { Portrait } from '~/entity/v1/portrait'
// import portraitData from '~/static/v1/portrait/01.jpg-file-portrait.json'

@Component({
  components: {
    paragraph
  }

})

export default class About extends Vue {
/*
private count: number = 0
public portrait: Portrait = portraitData

setPortrait (): void {
  this.portrait = {
    name: '02_bla.jpg',
    seriesNumber: 1,
    fileSize: '1MB'
  }
}

getPortrait (): Portrait {
  return this.portrait
}

getCount (): number {
  return this.count
}

setCount (c: number) {
  this.count = c
}

incrementCount () {
  this.count++
}
*/
}

</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
