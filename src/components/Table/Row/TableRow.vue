<script lang="ts">
import Vue, { PropType } from "vue";
export default Vue.extend({
  name: "TableRow",
  components: {},

  props: {
    gridColWidths: {
      type: String,
      default: "",
    },
    gridColNum: {
      type: Number as PropType<number>,
      default: 0,
    },
    leftAlign: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  data() {
    return {
      baseClassList: `ph-grid ph-w-full ph-items-center photon-table-row ph-border-grey5 ph-border-b ph-grid-cols-${
        (this as any).gridColNum
      } ph-col-span-${(this as any).gridColNum} tw-grid-cols-${
        (this as any).gridColNum
      } tw-col-span-${(this as any).gridColNum} ${
        (this as any).leftAlign ? "ph-parent-justify-start" : ""
      }`,
    };
  },
  mounted() {
    const cols = (this as any).gridColNum;
    if (
      (this as any).$slots.default &&
      (this as any).$slots.default.length > 0
    ) {
      const options = (this as any).$slots.default.filter((node) => node.tag);
      options.forEach((element, index) => {
        index % cols === 0 &&
          element.componentInstance.$el.classList.add("table-col-shift");
      });

      const lastRow = options.slice(-cols);
      lastRow.forEach((element) => {
        element.componentInstance.$el.classList.remove("ph-border-b");
      });
    }
  },

  render(createElement) {
    let local = this as any;
    var perChunk = local.gridColNum; // items per chunk
    function renderChildren(inputArray): any {
      if (!inputArray) return [];
      var result = inputArray.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / perChunk);

        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [];
        }
        resultArray[chunkIndex].push(item);
        return resultArray;
      }, []);

      return result.map((node, index) => {
        return createElement(
          "div",
          {
            attrs: {
              class: local.baseClassList,
              style: local.gridColWidths,
            },
          },
          node
        );
      });
    }
    return createElement(
      "div",
      {
        class: "parent",
      },
      [
        renderChildren(
          (this as any).$slots.default &&
            (this as any).$slots.default.length > 0 &&
            (this as any).$slots.default.filter((node) => node.tag)
        ),
      ]
    );
  },
});
</script>

<style lang="postcss" scoped>
.table-col-shift {
  justify-content: flex-start !important;
}
.photon-table-row:last-child {
  border: none !important;
}
.ph-parent-justify-start .table-col {
  justify-content: flex-start !important;
}
</style>
