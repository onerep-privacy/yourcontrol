# YourControl Extension

YourControl is a Chrome extension designed to simplify the process of removing yourself from data brokers that hold your personal information. The extension provides a split-screen interface that gives you a detailed guide for opting out of each broker alongside the relevant page on the data broker site.

## Features
- Simplifies the opt-out process for data brokers.
- Provides clear, step-by-step instructions for each broker.
- Split-screen interface for easy navigation and guidance.

## Installation
To install the extension, simply visit the Chrome Web Store and add YourControl to your browser.

## Project structure
YourControl uses a structured approach storing detailed instructions for opting out of data brokers. The extension includes the following folders:

- **markdown**: This folder contains all the guides for opting out of databrokers.
  - **Subfolders**: Each broker has its own subfolder within the `markdown` folder. These subfolders are named after the broker they correspond to and contain the specific guide for that broker, along with related images to assist the process.
    - **index.md**: Each subfolder includes an `index.md` file, which provides a detailed guide for opting out of that particular broker. The guide may also include images to aid the process, and these related images are stored within the respective broker's subfolder.
  - **brokers-data.json**: This file is also located inside the `markdown` folder and contains metadata and descriptive information about each broker, which is used to provide context and enhance the user experience.

## Build
This extension is built using Node.js, Vite, and Vue.js. We recommend using Node.js version 20 or later.

Follow these steps to build the extension:

1. Clone the repository.
2. Run `npm install` in the root directory.
3. Run `npm run build`.

After completing these steps, a `dist` directory will be created in the root folder. To add this extension to your Chrome browser:

1. Open the `chrome://extensions/` page.
2. Click on `Load unpacked`.
3. Select the `dist` folder from the previous steps.

That's it! Your extension is now ready to use.

## Contributing
We welcome contributions! Feel free to submit issues or create pull requests to help improve YourControl.

## License
This project is licensed under the MIT License.
