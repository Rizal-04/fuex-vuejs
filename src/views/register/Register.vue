<template>
  <div
    class="flex justify-center items-center min-h-screen"
    style="background-color: red; max-width: 450px; width: 100%"
  >
    <div class="flex flex-col">
      <h1 class="text-2xl text-white">Daftar</h1>
      <span class="text-white">Silahkan Lengkapi Data Berikut</span>
      <div style="margin: 25px 0px 25px 0px">
        <div class="card rounded-xl">
          <div class="card-content">
            <div class="flex flex-col">
              <b-field>
                <b-input type="email" v-model="dataForm.email"> </b-input>
              </b-field>
              <div class="buttons">
                <b-button class="rounded-full" type="is-danger" expanded
                  >Lanjut</b-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row justify-center">
        <span class="text-white">Sudah Punya Akun?</span>
        <span class="text-white cursor-pointer" @click="routePageLogin"
          >Masuk</span
        >
      </div>
    </div>
  </div>
</template>

<script src="./script.js" />
