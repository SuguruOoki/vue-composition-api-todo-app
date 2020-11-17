<template>
  <div class="container">
    <div class="title">
      <h1>TODO APP</h1>
    </div>
    <form class="add">
      <label id="title">title</label>
      <input v-model="title" for="title" type="text" />
      <label id="description">description</label>
      <input v-model="description" for="description" type="text" />
      <button
        type="button"
        @click="add"
      >
        追加
      </button>
    </form>
    <div
      v-for="item in items" :key="item.id"
      class="list-container"
      >
      <div class="item-container">
        <div class="item-title">
          {{ item.title }}
        </div>
        <div class="item-description">
          {{ item.description }}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      title: '' as string,
      description: '' as string,
      items: [
        {
          title: 'todo',
          description: 'description1',
        },
        {
          title: 'todo2',
          description: 'description2',
        },
        {
          title: 'todo3',
          description: 'description3',
        },
      ],
    }
  },
  methods: {
    add() {
      const item = {
        title: this.title,
        description: this.description,
      }
      console.log
      this.items.push(item)
    },
  },
})
</script>
<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;

  .list-container {
    background-color: #35495e;
  }
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 28px;
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

.item-container {
  .item-title {
    font-weight: 600;
    font-size: 20px;
  }

  .item-description {
    font-size: 16px;
  }
}

.links {
  padding-top: 15px;
}
</style>
