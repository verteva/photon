<template>
  <div class="c-colors">
    <div v-for="colorRow in colors" :key="colorRow.title" class="ph-mt-4">
      <h2 class="ph-flex ph-text-lg ph-font-bold ph-mb-2">
        {{ colorRow.title }}
      </h2>
      <div class="ph-flex ph-flex-row ph-mt-2">
        <div
          v-for="(colorItem, i) in colorRow.items"
          :key="`${colorItem.subText}${i}`"
          class="c-palette ph-flex ph-flex-col ph-mr-4"
        >
          <div
            class="c-palette__color"
            :class="[colorItem.bgColor, colorItem.borderColor]"
          />
          <div class="ph-mt-2 ph-flex ph-flex-col">
            <h3 class="ph-text-grey2 ph-text-xs ph-font-semibold">
              {{ colorItem.name }}
            </h3>
            <span class="ph-text-grey3 ph-text-xs">
              {{ colorItem.subText }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
interface ColorItem {
  bgColor: string;
  borderColor?: string;
  name: string;
  subText: string;
}

interface ColorRow {
  title: string;
  items: ColorItem[];
}

interface ColorsData {
  colors: ColorRow[];
}

export default {
  name: 'Colors',

  data(): ColorsData {
    return {
      colors: [
        {
          title: 'Primary Brand',
          items: [
            {
              bgColor: 'ph-bg-brand1',
              name: 'Brand 1',
              subText: '#3DD6C7'
            },
            {
              bgColor: 'ph-bg-brand2',
              name: 'Brand 2',
              subText: '#009EDE'
            },
            {
              bgColor: 'ph-bg-brand3',
              name: 'Brand 3',
              subText: '#004DBD'
            }
          ]
        },
        {
          title: 'Primary Hover State',
          items: [
            {
              bgColor: 'ph-bg-brandh1',
              name: 'Brand 1 hover',
              subText: '#33B6A9'
            },
            {
              bgColor: 'ph-bg-brandh2',
              name: 'Brand 2 hover',
              subText: '#0087BD'
            },
            {
              bgColor: 'ph-bg-brandh3',
              name: 'Brand 3 hover',
              subText: '#003A8E'
            }
          ]
        },
        {
          title: 'Greyscale',
          items: [
            {
              bgColor: 'ph-bg-black',
              name: 'Black',
              subText: '#000000'
            },
            {
              bgColor: 'ph-bg-grey1',
              name: 'Grey 1',
              subText: '#323232'
            },
            {
              bgColor: 'ph-bg-grey2',
              name: 'Grey 2',
              subText: '#585858'
            },
            {
              bgColor: 'ph-bg-grey3',
              name: 'Grey 3',
              subText: '#7F7F7F'
            },
            {
              bgColor: 'ph-bg-grey4',
              name: 'Grey 4',
              subText: '#BCBCBC'
            },
            {
              bgColor: 'ph-bg-grey5',
              name: 'Grey 5',
              subText: '#E2E2E2'
            },
            {
              bgColor: 'ph-bg-grey6',
              name: 'Grey 6',
              subText: '#F5F5F5'
            },
            {
              bgColor: 'ph-bg-white',
              name: 'White',
              subText: '#FFFFFF'
            }
          ]
        },
        {
          title: 'Gradients',
          items: [
            {
              bgColor: 'ph-bg-gradient-brand1',
              name: 'Brand Gradient',
              subText: 'Vertical'
            },
            {
              bgColor: 'ph-bg-gradient-brand1h',
              name: 'Brand Gradient',
              subText: 'Horizontal'
            },
            {
              bgColor: 'ph-bg-gradient-brand2',
              name: 'Brand Gradient 2',
              subText: 'Vertical'
            },
            {
              bgColor: 'ph-bg-gradient-sky-up',
              name: 'Sky Blue Up',
              subText: 'Vertical'
            },
            {
              bgColor: 'ph-bg-gradient-sky-down',
              name: 'Sky Blue Down',
              subText: 'Vertical'
            },
            {
              bgColor: 'ph-bg-gradient-dark',
              name: 'Gradient Dark',
              subText: 'Diagonal'
            },
            {
              bgColor: 'ph-bg-gradient-titanium',
              name: 'Gradient titanium',
              subText: 'Vertical'
            },
            {
              bgColor: 'ph-bg-gradient-light-blue',
              name: 'Gradient Light Blue',
              subText: 'Vertical'
            },
            {
              bgColor: 'ph-bg-gradient-light-grey',
              name: 'Gradient Light Grey',
              subText: 'Vertical'
            },
            {
              bgColor: 'ph-bg-gradient-light-grey2',
              name: 'Gradient Light Grey 2',
              subText: 'Vertical'
            }
          ]
        },
        {
          title: 'Light',
          items: [
            {
              bgColor: 'ph-bg-brand-light2',
              borderColor: 'ph-border ph-border-brand2',
              name: 'Brand Light 2',
              subText: '#F0F9FD'
            },
            {
              bgColor: 'ph-bg-alert-light1',
              borderColor: 'ph-border ph-border-alert1',
              name: 'Alert Light 1',
              subText: '#FFF9F5'
            },
            {
              bgColor: 'ph-bg-alert-light2',
              borderColor: 'ph-border ph-border-alert2',
              name: 'Alert Light 2',
              subText: '#FEF8F9'
            },
            {
              bgColor: 'ph-bg-alert-light3',
              borderColor: 'ph-border ph-border-alert3',
              name: 'Alert Light 3',
              subText: '#EDF7EE'
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.c-colors {
  .c-palette {
    width: 100px;
    height: 160px;

    .c-palette__color {
      min-width: 100px;
      min-height: 100px;
    }
  }
}
</style>
