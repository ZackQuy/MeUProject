<template>
<div style="width:100%;">
<div class="c-left-width"></div>
    <div class="meu_main">
      <el-row>
      <div head>
        <div>
            <c-header></c-header>
        </div> 
      </div>
      </el-row>
      <el-row>
      <div class="e-main">
        <div>
          <c-meau-tab>

          </c-meau-tab>
        </div>
        <div class="c_slider_css">
          <c-slilder>
          </c-slilder>
        </div>
        <div>
          <c-trip-plan>

          </c-trip-plan>
        </div>
        <div>
          <c-hot-trip>
          </c-hot-trip>
        </div>
        <div>
          <c-img-content>

          </c-img-content>
        </div>
      </div>
      </el-row>
      <el-row>
      <div class='footer'>
            <c-foot>
              
            </c-foot>
      </div>
      </el-row>
    </div>
<div class="c-right-width"></div>
</div>
</template>

<script>
//import cHeader from '../../components/Header/Head';
import cMeauTab from '../../components/Meau/MeauTab';
import cSlilder from '../../components/PicSlild/Slilder';
import cTripPlan from '../../components/TripPlan/TripPlan';
import cHotTrip from '../../components/HotTrip/HotTrip';
import cImgContent from '../../components/ImgContent/ImgContent';
//import cFoot from '../../components/Footer/Foot';
export default {
  name: 'MAin',
  data () {
    return {
      msg: ''
    }
  },
  components: {
    //cHeader,
    cMeauTab,
    cSlilder,
    cTripPlan,
    cHotTrip,
    cImgContent
    //cFoot
  }
}
</script>
