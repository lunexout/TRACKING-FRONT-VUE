<template>
    <h1
    class="text-center mt-4"
    style="font-size: 20px; font-weight: bold; font-family: arrowFONT"
  >
    საკონტაქტო ინფო
  </h1>
  <div
    class="text-center"
    style="margin: 0 auto; height: 3px; width: 50px; background-color: #009ad9"
  ></div>

  <div class='text-center mt-5' style='margin: 0 auto;'>
    <ul style='list-style: none;'>
    <li style='font-size: 20px; color: #009AD9;font-weight: bold; font-family: arrowFONT'>
      <img style="width: 45px; height: 45px; margin-left: -45px;" src='./../../../assets/contact/adres.svg'/>
      დ. უზნაძის ქ. 6</li>
        <li style='font-size: 20px; color: #009AD9;font-weight: bold; font-family: arrowFONT'>
      <img style="width: 45px; height: 45px; margin-left: -55px;" src='./../../../assets/contact/mail.svg'/>
      info@meko.ge</li>
          <li style='font-size: 20px;color: #009AD9; font-weight: bold; font-family: arrowFONT'>
      <img style="width: 45px; height: 45px; margin-left: -25px;" src='./../../../assets/contact/phone.svg'/>
      (+995) 599 710 202</li>
  </ul>
  </div>
  <div class='container p-0 mt-3 google-map' style='max-width: 900px;'>
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe
          width="900"
          height="500"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=tbilisi,%20meko&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe
        ><a href="https://123movies-to.org">123movies</a><br />
        ><a href="https://www.embedgooglemap.net"
          >google maps iframe code generator</a
        >
      </div>
    </div>
  </div>
  <div class="text-center mt-4" style="max-width: 150px; margin: 0 auto;">
    <div style="display: inline-block; justify-content: space-between;">
      <img style="width: 30px; heght: 30px;" src="./../../../assets/contact/fb.svg" />
      <img style="width: 30px; heght: 30px;" src="./../../../assets/contact/ig.svg" />
      <img style="width: 30px; heght: 30px;"  src="./../../../assets/contact/yt.svg" />
      <img style="width: 30px; heght: 30px;" src="./../../../assets/contact/lin.svg" />
    </div>
  </div>
</template>

<script>
export default {
    name: 'MobContact'
}
</script>

<style scoped>
          .gmap_canvas {
            overflow: hidden;
            background: none !important;
            height: 500px;
            width: 900px;
          }
          .mapouter {
            position: relative;
            text-align: right;
            height: 500px;
            width: 900px;
          }
          @media all and (max-width: 480px) {
            .google-map {
              margin-left: -270px;
            }
          }
</style>