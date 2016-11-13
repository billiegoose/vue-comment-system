<template>
  <div id="app" style="height: 100%">
    <base-comments :comments="comments" :article_id='1234'></base-comments>
  </div>
</template>

<style src="semantic-ui-css/semantic.min.css">
/* Side note - it totally works as "scoped" too, but the body styles are missing */
/*@import "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.6/semantic.css";*/
</style>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/prism/1.5.1/themes/prism.css";
#app {
  margin: 20px;
}
</style>

<script>
require('prismjs')

import Vue from 'vue'
Vue.component('reply-form', require('./reply-form.vue'))
Vue.component('base-comments', require('./base-comments.vue'))
Vue.component('child-comment', require('./child-comment.vue'))

export default {
  computed: {
    comments () {
      return [ comment1, comment3 ]
    }
  }
}

let comment1 = {
  author: 'wmhilton',
  uuid: '898989',
  timestamp: (new Date).valueOf()-1000*60*5,
  body: `Lorem *markdownum* amarunt et formae et mandataque tutae, lumina. Oculis in tene
excoquit audent, at caelebs capit, volat neque altum.

- Inachus tenui
- Fiducia nubemque
- Parte et illi inpositum Eurytus pectora funestaque

Regunt prodest, quot vesana qui cantus tantum se caelo: nisi. *Illum* gregesque
mortale Ausoniae Marte materiamque sublimibus idem gemitus adnuit foedera.
Collesque me somnus et Phrygia fronde invitaque Corintho, aut putes ad timetur,
temerasse! Et arbore, iners animae uberibus *fugit aequalis* vertice invictos
creator.`,
  replies: []
}
let comment2 = {
  author: 'feross',
  timestamp: (new Date).valueOf()-1000*60*60*5,
  uuid: 'asdfasdf',
  body: `# Bello tantum possedit

## Haud modo perque est

Lorem markdownum etiam frondibus quidem; vocari invidiamque longae parentum
freta perluitur probabit vidit. Tristisque modo Chariclo aeternum pharetram
tamen, ille nec illa genitus, per quod erat spatio corpora Learchum advena!
Atque ut moenia homini Cinyreius circum **generat** ad semper bracchia proles et
in? Cura est simul, refugitque congelat, pius.

    crossplatform_internal += bareMetal(menu(3 + 89));
    var document_rootkit = compile_error.encryptionAndWave(scrollBus(mysql),
            denialGoogleGpu - repository + -3, sample);
    firewall *= 45;
    dosComputerDefragment.modeResponsive += yahooColdPacket(76) -
            opengl_secondary_zettabyte(disk_box(5, rate_ascii, net),
            perlCharacterTable, newline_null_recycle(5, 1));

Ordine enim carmina: tardos belli lustro venefica victor. Credit non siquis,
bracchia, inque manu poterat aliis. Unam [infracto dixit](http://duobus.io/),
caelo [et](http://tenetaras.io/caraeque.html) speciem vincetis omnem concursibus
aera ego enim credas.
`,
  replies: []
}
let comment3 = {
  author: 'substack',
  timestamp: (new Date).valueOf()-1000*5,
  uuid: 'fjfjfjjff',
  body: `Relictis color ponto Iunonem hasta quae, admirantibus aevo, nec in iubet
fecitque nonam. Pallae spinae; et lucis, aequo contigerant lite fulminis,
caelestia Lycabas moras lumen Cytherea veri, quemquam? Obliquo est veloxque
parte, restat patriam dominos nil, at **gremio futurae** quotiens. Vestrae
illic. Orbis secreta perque, a tuba factum, tibi.

- Omina usque oculos fessa moenia
- Quas Arachnes avellit ventos
- Tum Cnosia humum hominum

Iactavit Memnonis Latonam aptamque proles plangentibus tulit frustraque aera,
voco. Exteriusque utraque, ordine, fit dixerat inque. Abibat **effugit**.
`,
  replies: [ comment2 ]
}
</script>
