<template>
  <div>
    <div class="btn-group">
      <button class="button" default>Alphabetic</button>
      <button class="button">Categorized</button>
    </div>
    <table class="table">
      <tr>
        <td class="lefttd">(Name)</td>
        <td>
          <input
            type="text"
            :value="controlData.Name"
          />
        </td>
      </tr>
      <tr>
        <td>Accelerator</td>
        <td>
          <input
            type="text"
            :value="controlData.Accelerator"
          />
        </td>
      </tr>
      <tr>
        <td>AutoSize</td>
        <td>
          <select v-model="controlData.AutoSize" >
            <option selected :value="false">False</option>
            <option :value="true">True</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>BackColor</td>
        <td>
          <select :value="controlData.BackColor" >
            <option v-for="(item,key) in backColor" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>BackStyle</td>
        <select :value="controlData.BackStyle" >
          <option v-for="(item,key) in backStyle" :key="key" :value="item">{{key}}</option>
        </select>
      </tr>
      <tr>
        <td>BorderColor</td>
        <td>
          <select :value="controlData.BorderColor" >
            <option v-for="(item,key) in borderColor" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>BorderStyle</td>
        <td>
          <select :value="controlData.BorderStyle" >
            <option v-for="(item,key) in borderStyle" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Caption</td>
        <td>
          <input
            type="text"
            :value="controlData.Caption"
          />
        </td>
      </tr>
      <tr>
        <td>ControlTipText</td>
        <td>
          <input
            type="text"
            :value="controlData.ControlTipText"
          />
        </td>
      </tr>
      <tr>
        <td>Enabled</td>
        <td>
          <select
            v-model="controlData.Enabled"
          >
            <option selected :value="true">True</option>
            <option :value="false">False</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Font</td>
        <td>
          <select :value="controlData.Font">
            <option v-for="(value,key) in font" v-bind:value="value" :key="key">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>ForeColor</td>
        <td>
          <select :value="controlData.ForeColor" >
            <option v-for="(value,key) in foreColor" v-bind:value="value" :key="key">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Height</td>
        <td>
          <input
            type="number"
            :value="parseInt(controlData.Height)"  
          />
        </td>
      </tr>
      <tr>
        <td>HelpContextId</td>
        <td>
          <input
            type="number"
            :value="controlData.HelpContextId"
          />
        </td>
      </tr>
      <tr>
        <td>Left</td>
        <td>
          <input
            type="number"
            :value="parseInt(controlData.Left)"
           
          />
        </td>
      </tr>
      <tr>
        <td>MouseIcon</td>
        <td>
          <input type="file" />
        </td>
      </tr>
      <tr>
        <td>MousePointer</td>
        <td>
          <select :value="controlData.MousePointer">
            <option v-for="(value,key) in mousePointer" v-bind:value="value" :key="key">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Picture</td>
        <td>
          <input type="file" />
        </td>
      </tr>
      <tr>
        <td>PicturePosition</td>
        <td>
          <select
            :value="controlData.PicturePosition"
          >
            <option v-for="(value,key) in picturePosition" v-bind:value="value" :key="key">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>SpecialEffect</td>
        <td>
          <select
            :value="controlData.SpecialEffect"

          >
            <option v-for="(value,key) in specialEffect" v-bind:value="value" :key="key">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>TabIndex</td>
        <td>
          <input
            type="number"
            :value="controlData.TabIndex"
          />
        </td>
      </tr>
      <tr>
        <td>TabStop</td>
        <td>
          <select :value="controlData.TabStop">
            <option :value="false" selected>False</option>
            <option :value="true">True</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Tag</td>
        <td>
          <input type="text" :value="controlData.Tag"  />
        </td>
      </tr>
      <tr>
        <td>TextAlign</td>
        <td>
          <select :value="controlData.TextAlign" >
            <option v-for="(value,key) in textAlign" v-bind:value="value" :key="key">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Top</td>
        <td>
          <input
            type="number"
            :value="parseInt(controlData.Top)"
           
          />
        </td>
      </tr>
      <tr>
        <td>Visible</td>
        <td>
          <select :value="controlData.Visible">
            <option :value="false">False</option>
            <option :value="true" selected>True</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Width</td>
        <td>
          <input
            type="number"
            :value="parseInt(controlData.Width)"
           
          />
        </td>
      </tr>
      <tr>
        <td>WordWrap</td>
        <td>
          <select :v-model="controlData.WordWrap">
            <option selected :value="false">False</option>
            <option :value="true">True</option>
          </select>
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import backColor from "../models/backColor.json";
import backStyle from "../models/backStyle.json";
import borderColor from "../models/borderColor.json";
import borderStyle from "../models/borderStyle.json";
import font from "../models/font.json";
import foreColor from "../models/foreColor.json";
import mousePointer from "../models/mousePointer.json";
import picturePosition from "../models/picturePosition.json";
import specialEffect from "../models/specialEffect.json";
import textAlign from "../models/textAlign.json";
/* import { validators } from "../validators/validator"; */
import { Mutation, Getter } from "vuex-class";
@Component({
  filters: {
    sizeFilter(value: any) {
      return parseInt(value, 10);
    }
  }
})
export default class UserFormTable extends Vue {
  @Prop() controlData: any;

 
  /* validators: object = validators; */
  backColor: object = backColor;
  borderColor: object = borderColor;
  borderStyle: object = borderStyle;
  backStyle: object = backStyle;
  font: object = font;
  foreColor: object = foreColor;
  mousePointer: object = mousePointer;
  specialEffect: object = specialEffect;
  picturePosition: object = picturePosition;
  textAlign: object = textAlign;

  
  mounted() {
    console.log();
  }

}
</script>



<style scoped>
.node {
  text-align: left;
}
.table
 {
  margin-right: 0%;
  width: 100%;
  border-collapse: collapse;
  color: black;

}
th,
td {
  text-align: left;
  width: fit-content;
  position: relative;
  border: 1px solid lightgray;
    font-size: 12px;
}
th {
  width: 120%;
 
  font-family: Tahoma;
}

.form-control {
  float: left;
  width: 280px;
  cursor: pointer;
  background-color: rgb(190, 185, 185);
 font-size: 12px;
}
label {
  float: left;
}
select {
  width:100%;
  /* padding: 1px 2px; */
  border:none;
}
input {
  width: 98%;
  border:none
}
select:focus
{
  outline: none;
}
input:focus{
  outline: none;
}
.button:focus{
  outline: none;
  background-color:white;
}

/* Must be added as style for the new data */
.btn-group .button {
  border: none;
  color: black;

  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
  /* float: left; */
}
.btn-group .button {
  border: none;
  color: black;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  cursor: pointer;

}
.lefttd{
  width: 130px;
}
</style>
</style>