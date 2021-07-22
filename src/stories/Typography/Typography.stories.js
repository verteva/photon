
export default {
  title: 'Photon/Typography',
};

export const Palette = () => ({
  template: `
    <div v-bind="$props">
      (font-size  / line height / letter spacing)
      <hr class="ph-my-6" />
      <h1 class="ph-my-10">This an &lt;H1&gt; heading<br /> with a second line</h1>
      <h2 class="ph-my-10">This an &lt;H2&gt; heading<br /> with a second line</h2>
      <h3 class="ph-my-10">This an &lt;H3&gt; heading<br /> with a second line</h3>
      <div class="ph-my-10 ph-text-xl">This is Body XLarge<br />and another line</div>
      <div class="ph-my-10 ph-text-lg">This is Body Large<br />and another line</div>
      <div class="ph-my-10">This is Body <br />and another line</div>
      <div class="ph-my-10 ph-text-sm">This is Body Small<br />and another line</div>
      <div class="ph-my-10 ph-text-xs">This is Body XSmall<br />and another line</div>
    </div>
  `,
});
