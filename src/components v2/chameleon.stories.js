export default {
  title: 'Chameleon/Colours',
};

export const Colours = (args, context) => {
  return {
    template:
      '<div>' +
      '<div> this is the color file </div>' +
      '<div>{{colorBlocks}}</div>' +
      '<div v-for="outerList in colorBlocks">' +
      '<p>{{ outerList.color }}:</p>' +
      "<div :style=\"{display: 'flex', flexWrap: 'wrap' }\">" +
      '<div v-for="colorBlock in outerList.value">' +
      '<p>{{colorBlock.color}}</p>' +
      "<div :style=\"{ backgroundColor: colorBlock.value, height: '200px', width: '200px' }\">" +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>',
    computed: {
      colorBlocks() {
        const blocks =
          this.$store?.state?.theme?.theme?.colors &&
          Object.entries(this.$store.state.theme.theme.colors).map(
            ([color, value]) => {
              return {
                color,
                value:
                  (!!value.value && [{ color: 'base', value: value.value }]) ||
                  Object.entries(value).map(([newColor, newValue]) => {
                    return {
                      color: newColor,
                      value: newValue.value,
                    };
                  }),
              };
            }
          );

        return blocks;
      },
    },
  };
};
