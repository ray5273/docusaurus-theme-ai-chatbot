module.exports = function assistantUiPlugin(context, options) {
  return {
    name: 'docusaurus-plugin-assistant-ui',
    getClientModules() {
      return [require.resolve('./client')];
    },
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: 'script',
            innerHTML: `window.ASSISTANT_UI_OPTIONS = ${JSON.stringify(
              options || {}
            )};`,
          },
        ],
      };
    },
  };
};
