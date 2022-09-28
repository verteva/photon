import { useEffect, useGlobals } from '@storybook/addons';

export const useTheme = () => {
  const [globals, setGlobals] = useGlobals();

  console.log('setTheme', setGlobals);
  console.log('globals', globals);

  useEffect(() => {
    //document.body refers to body tag inside iframe#storybook-preview-iframe
    document.body.setAttribute('data-theme', globals.theme);
  }, [globals.theme]);

  return <div>thisis something</div>;
};
