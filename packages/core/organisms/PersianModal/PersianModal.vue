<script setup lang="ts">
import { computed, onMounted } from 'vue'
import PersianModalContent from './PersianModalContent.vue'
import { useModal } from './'

const props = defineProps({
  modalId: {
    type: String,
    required: true
  }
})

onMounted(() => {
  registerModal(props.modalId)
})

const { modals, registerModal, closeModal } = useModal()
const visible = computed(() => (modals?.value ? modals.value[props.modalId]?.open || false : false))
</script>

<template>
  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <PersianModalContent :show="visible" @close="closeModal(modalId)">
      <template v-for="(_index, name) in $slots" #[name]="data">
        <slot :name="name" v-bind="data" />
      </template>
    </PersianModalContent>
  </Teleport>
</template>
