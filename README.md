# docusaurus-plugin-assistant-ui

A simple Docusaurus plugin that adds a floating chat widget powered by [`@assistant-ui/react`](https://www.npmjs.com/package/@assistant-ui/react).

## Installation

```bash
npm install docusaurus-plugin-assistant-ui @assistant-ui/react
```

## Usage

Add the plugin to your `docusaurus.config.js`:

```js
module.exports = {
  plugins: [
    [
      require.resolve('docusaurus-plugin-assistant-ui'),
      {
        // Customize the runtime used by @assistant-ui/react
        // For example, use a local model instead of OpenAI
        runtimeOptions: { model: 'ollama/mistral' },
        // Optionally specify the API URL for your local runtime
        apiUrl: 'http://localhost:11434',
      },
    ],
  ],
};
```

The plugin will render a floating chat window in the bottom right corner of every page where visitors can chat with your AI assistant.

### Customizing the model

You can pass any [`useLocalRuntime`](https://www.npmjs.com/package/@assistant-ui/react#uselocalruntime) options via `runtimeOptions`. This allows using local models like `ollama/mistral` instead of the default `openai/gpt-3.5-turbo`.

If your runtime is hosted at a different API address, set `apiUrl` to
override the default. The value will be passed as `baseUrl` to
`useLocalRuntime`.
