# Close Tab Button Add-on

![Close Tab Icon](src/icon.png)

The Close Tab Button is a simple Firefox add-on that adds a button to toolbar that closes current tab

## Installation

1. Download the latest release from the [Releases](https://github.com/WingTillDie/close-tab-firefox/releases) page.
2. Open Firefox and navigate to `about:debugging`.
3. Click on "This Firefox" in the left sidebar.
4. Click "Load Temporary Add-on..."
5. Select the downloaded XPI file.

## Usage

Once the add-on is installed, you will see a "Close Tab" button in your toolbar. Clicking this button will close the current tab.

## Screenshots
![Screenshot](img/screenshot.png)

## Development
Create the xpi file from source code:  
```bash
zip -jr CloseTabButton.xpi src/
```

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.
