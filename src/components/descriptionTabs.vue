<template>
    <v-container>
      <v-expansion-panels id="tabs" multiple>
        <v-expansion-panel
          title="Описание товара"
        > 
          <v-expansion-panel-text>{{productDescription}}</v-expansion-panel-text>
        
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>
              Технические характеристики
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <div>
            <v-data-table id="table">
              <tr
                id = "row"
                v-for="item in productInfo.productInfo"
                :key="item.name"
              >
                <td class="leftTd">{{ item.name }}</td>
                <td class="rightTd">{{ item.value }}</td>
              </tr>
            </v-data-table>
          </div>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
</template>

<script>
    import productInfo from "@/assets/productInfo.json";
    var productDescription = "Короткие ласты для плавания SALVAS F5 Fin - предназначены для тренировок в бассейне, направленных на укрепление мышц нижней части тела. Помогают укрепить мышцы ног и усовершенствовать технику плавания. Данная модель обеспечивает пловцу высокую маневренность и позволяют развивать необходимое усилие для эффективных тренировок. Ласты применяются для отработки навыков плавания стилем кроль и для обучения волнообразным движениям в брассе и баттерфляе. Короткая лопасть, дополнительные ребра жесткости со вставкой из легкого и упругого материала Technoflex, калоша из мягкого TPR (термопластичная резина). Открытый носок для более удобного подбора размера."


    export default {
        name: 'descriptionTabs',
        data: () => {
        return {productInfo, productDescription} 
        }
    }
</script>