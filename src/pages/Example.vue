<script setup lang="ts">
import { Button, InputNumber, InputText, Message, Select, SelectButton } from 'primevue';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { backArrow, marker } from '@/assets/icons';
import FormLabel from '@/components/Form/FormLabel.vue';
import VInputMask from '@/components/Form/VInputMask.vue';
import LangSwitcher from '@/components/UI/LangSwitcher.vue';
import { useValidation } from '@/composables/Form';
import { $formRules } from '@/composables/Form/models';
import { useMask, useThemeMode } from '@/composables/UI/';
import { $confirm } from '@/plugins/confirmation.ts';
import { useToastStore } from '@/store/toastsStore.ts';

const { t } = useI18n();
const $toast = useToastStore();
const $router = useRouter();

const { modeModel, modes } = useThemeMode();
const defaultConfirm = async () => {
  const result = await $confirm.default({ title: 'toast.warn', subtitle: 'confirmations.warning' });
  if (result) {
    $toast.info('Do smth after accept.');
  }
  else {
    $toast.warning('Do smth after reject.');
  }
};
const infoConfirm = async () => {
  await $confirm.info({ title: 'toast.info', subtitle: 'confirmations.warning' });
  $toast.info('After button click. Info');
};
const successConfirm = async () => {
  await $confirm.success({ title: 'toast.success', subtitle: 'confirmations.warning' });
  $toast.success('After button click. Success');
};
const errorConfirm = async () => {
  await $confirm.error({ title: 'toast.error', subtitle: 'confirmations.warning' });
  $toast.error('After button click. Error');
};

const severities = ['error', 'secondary', 'info', 'success', 'warn', 'contrast'];

const buttonLoading = ref(true);

const { maskedValue: stringMask, unmaskedValue: stringMaskUnmasked, maskModel: stringMaskModel } = useMask('@@-@@-AA');

const test = ref({
  str: 'aaa',
  strUnmasked: 'aaa',
  number: '',
});

const testValidationModel = ref({
  age: 0,
  name: '',
  surname: '',
  maskedString: '',
  unmaskedString: '',
});

const { errors } = useValidation(testValidationModel, {
  name: [$formRules.required()],
  age: [$formRules.required(), $formRules.minValue(18)],
  surname: [$formRules.required()],
  maskedString: [$formRules.required()],
  unmaskedString: [$formRules.required()],
});
</script>

<template>
  <div class="page">
    <div style="display: flex; align-items: center; gap: 1rem; width: 100%;">
      <LangSwitcher />

      <h1> {{ t('toast.info') }} </h1>

      <div style="margin-left: auto" />
      <SelectButton v-model="modeModel" :options="modes" :allow-empty="false" size="small" />
      <SelectButton v-model="modeModel" :options="modes" :allow-empty="false" />
      <SelectButton v-model="modeModel" :options="modes" :allow-empty="false" size="large" />
    </div>

    <div style="display: flex; align-items: center; gap: 1rem;">
      <pre style="background: var(--black); color: var(--white); padding: 4rem; border-radius: var(--radius-l); font-size: 16px">
        {{ `const getPosts = async () => {
            const { data, error } = await $axios.get('/posts', body, { loading });
            posts.value = error ? [] : data;
            postsError.value = Boolean(error);
            console.log(posts.value);
        };` }}
      </pre>

      <Button label="Check router transition" size="large" @click="$router.push({ name: 'status', params: { type: 'approved' } })" />
    </div>

    <hr>

    <Button label="Primary small" size="small" />
    <Button label="Primary" />
    <Button label="Primary large" size="large" />

    <Button label="Secondary small" size="small" severity="secondary" />
    <Button label="Secondary" severity="secondary" />
    <Button label="Secondary large" size="large" severity="secondary" />

    <hr>

    <Button label="svg icon" :icon="marker" severity="success" />
    <Button label="Icon no-fill" :icon="marker" icon-pos="right" severity="info" icon-class="no-fill" />
    <Button label="Icon fill-red" :icon="marker" icon-pos="top" severity="secondary" icon-color="red" />

    <Button :icon="backArrow" severity="primary" text />

    <Button label="Loading test" severity="help" :loading="buttonLoading" />
    <Button label="Loading test" severity="help" />

    <hr>

    <Button label="Default confirmation" severity="warn" @click="defaultConfirm" />
    <Button label="Info confirmation" severity="info" @click="infoConfirm" />
    <Button label="Success confirmation" severity="success" @click="successConfirm" />
    <Button label="Error confirmation" severity="danger" @click="errorConfirm" />

    <Button label="Success toast" severity="success" @click="$toast.success('success toast')" />
    <Button label="Info toast" severity="info" @click="$toast.info('info toast')" />
    <Button label="Warning toast" severity="warn" @click="$toast.warning('warning toast')" />
    <Button label="Error toast" severity="danger" @click="$toast.error('error toast')" />

    <hr>

    <Message v-for="type in severities" :key="type" :severity="type">
      {{ type }} message example
    </Message>

    <hr>

    <div class="field-group" style="align-items: center">
      <InputText placeholder="Text-field-small" size="small" />
      <InputText placeholder="Text-field-regular" />
      <InputText placeholder="Text-field-large" size="large" />

      <Select size="small" :options="severities" placeholder="Select small" />
      <Select :options="severities" placeholder="Select" />
      <Select size="large" :options="severities" placeholder="Select large" />
    </div>

    <div class="field-group">
      <FormLabel label="Letters with mask">
        <InputText
          v-model="stringMask"
          v-maska="stringMaskModel"
        />
      </FormLabel>
      <FormLabel label="Letters with mask-2">
        <VInputMask
          v-model="test.str"
          v-model:unmasked="test.strUnmasked"
          mask="@@-@@-AA"
        />
      </FormLabel>
      <FormLabel label="Number with mask">
        <VInputMask
          v-model="test.number"
          mask="##-##"
        />
      </FormLabel>
    </div>
    <div class="field-group">
      <FormLabel label="Age" :error-message="errors.age">
        <InputNumber v-model="testValidationModel.age" />
      </FormLabel>
      <FormLabel label="name" :error-message="errors.name">
        <InputText v-model="testValidationModel.name" />
      </FormLabel>
      <FormLabel label="surname" :error-message="errors.surname">
        <InputText v-model="testValidationModel.surname" />
      </FormLabel>
      <FormLabel label="maskedString" :error-message="errors.maskedString">
        <VInputMask
          v-model="testValidationModel.maskedString"
          mask="@@-@@-AA"
        />
      </FormLabel>
      <FormLabel label="unmaskedString" :error-message="errors.unmaskedString">
        <VInputMask
          v-model:unmasked="testValidationModel.unmaskedString"
          mask="##-##-##"
        />
      </FormLabel>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  min-height: 100vh;
  hr {
    width: 100%;
  }
}

.form-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
.field-group {
  display: flex;
  gap: 1rem;
}
</style>
