<script setup lang="ts">
import { ref } from 'vue'
import { RiEmotionHappyLine, RiCloseLine } from '@remixicon/vue'
import { Spacer, ElevatedButton, Dialog, IconButton } from '../../../src'

const dialog1Open = ref(false)
const dialog2Open = ref(false)
const dialog3Open = ref(false)
</script>

<template>
  <section>
    <h2>Overlay</h2>
    <br />

    <Spacer>
      <ElevatedButton @click="dialog1Open = true">
        <template #icon>
          <RiEmotionHappyLine />
        </template>
        Open dialog
      </ElevatedButton>

      <ElevatedButton @click="dialog3Open = true">
        <template #icon>
          <RiEmotionHappyLine />
        </template>
        Open dialog 3
      </ElevatedButton>

      <Dialog v-model="dialog1Open" backdrop-close xs>
        <template #btnAction> </template>

        <template #btnClose>
          <IconButton @click="dialog1Open = false">
            <RiCloseLine />
          </IconButton>
        </template>

        <template #title>
          This is a very very very very very very very very loooong title
        </template>

        <template #default>
          <p>This is the content ahihi</p>
          <br />

          <ElevatedButton @click="dialog2Open = true">
            Open dialog 2
          </ElevatedButton>

          <Dialog v-model="dialog2Open" backdrop-close sm>
            <template #btnAction> </template>

            <template #btnClose>
              <IconButton @click="dialog2Open = false">
                <RiCloseLine />
              </IconButton>
            </template>

            <template #title>
              This is a very very very very very very very very loooong title
            </template>

            <template #default>
              <p><i> Trẻ con sa mạc truyền tai nhau bài đồng dao: </i></p>
              <p>Xương rồng đơm lá đơm hoa</p>
              <p>Nước đong đầy trên cao nguyên đá</p>
              <p>Là ngày hoàng đế trở về nhà</p>
              <br />

              <p><i>Desert children pass on a nursery rhyme:</i></p>
              <p>Cactus sprouts leaves and flowers</p>
              <p>Water fills up on the rocky plateau</p>
              <p>It's the day the emperor returns home</p>
            </template>
          </Dialog>
        </template>
      </Dialog>

      <Dialog v-model="dialog3Open" backdrop-close sm fluid>
        <template #btnAction> </template>

        <template #btnClose>
          <IconButton @click="dialog3Open = false">
            <RiCloseLine />
          </IconButton>
        </template>

        <template #title> Ahihi </template>

        <template #default>
          <p>This is the content ahihi</p>
        </template>
      </Dialog>
    </Spacer>
  </section>
</template>
