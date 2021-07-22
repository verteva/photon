
export default {
  title: 'Photon/Typography',
};

export const Palette = () => ({
  template: `
    <div v-bind="$props">
      (font-size  / line height / letter spacing)
      <hr class="ph-my-6" />
      <h1 class="ph-text-base">This an &lt;H1&gt; heading tag</h1>
    </div>
  `,
});
