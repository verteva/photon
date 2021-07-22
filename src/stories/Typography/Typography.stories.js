
export default {
  title: 'Photon/Typography',
};

export const Palette = () => ({
  template: `
    <div v-bind="$props">
      (font-size  / line height / letter spacing)
      <hr class="ph-my-6" />
      <h1>This an &lt;H1&gt; heading tag</h1>
      <h2 class="ph-text-h2">This an &lt;H2&gt; heading tag</h2>
      <h3 class="ph-text-h3">This an &lt;H3&gt; heading tag</h3>
    </div>
  `,
});
