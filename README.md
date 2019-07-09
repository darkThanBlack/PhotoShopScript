# PhotoShopScript

![](<https://img.shields.io/badge/license-WTFPL-lightgrey.svg>) ![](<https://img.shields.io/badge/environment-PhotoShop-blue.svg>) ![](<https://img.shields.io/badge/program-JavaScript-brightgreen.svg>) ![](<https://img.shields.io/badge/version-1.0.0-brightgreen.svg>)

> **Notice**: Auto translate from [Google translate](https://translate.google.cn).

* [Who am I](#who-am-i)
* [Basic knowledge](#basic-knowledge)
* [Script use](#script-use)
* [Script introduction](#script-introduction)
  * [APP_ICON.jsx](#app_iconjsx)
  * [APP_LaunchImage.jsx](#app_launchimagejsx)
* [Development Resources](#development-resources)
* [LICENSE](#license)

### Translate

[简体中文版介绍](./README_CN.md)

### Who am I

This repository contains script files that can be run on *PhotoShop* to provide developers and designers with convenient features.

For details on which functions can be implemented, see the *Script Introduction* section below.

### Basic knowledge

Currently, all of the contents of this repository are hosted on [GitHub](https://github.com/), the web page you are currently visiting, a community platform for hosting, communicating and developing code for global program developers. If you are a designer who is new to [GitHub](https://github.com/), you may be confused by the pages and features, so here I will provide the simplest practical knowledge:

* On the right side of the page header, find the green *Clone or download* button.
* Press the *Clone or download* button and select the *Download ZIP* button in the pop-up dialog box.
* Select the location you want to save and press the *OK* button.

![gitHub_guide_0](./GuideSources/gitHub_guide_0.jpg)

If the network access is smooth, all content, including the current description file, will be downloaded to your computer as a compressed package. Now that you don't need to continue browsing [GitHub](https://github.com/), you can continue reading the instructions locally to further use the features you need.

> **Note**：Content downloaded in this way must be the latest version, you can describe it with terms such as development version, alpha version, beta version and so on. This also means that we cannot always ensure that the content of the development version will be fully usable.
>
> If you want to use an official, stable or release versions, please read the instructions that follow.
>

* **What should I do if the developer releases new content or updates?**

  In general, you only need to pay attention to the release version of the update. Here are the steps:

  * In the middle of the page header, find and press the gray *releases* tag。


  ![gitHub_guide_1](./GuideSources/gitHub_guide_1.jpg)

  * You should see a new page similar to the one shown below. This page contains all the release versions and corresponding information, you can choose a version to download according to your needs, click the corresponding *zip or tar.gz* icon to download the compressed package.

    ![gitHub_guide_2](./GuideSources/gitHub_guide_2.jpg)

> **Note **: In the normal situation, you should use the release version, and the features provided by the release version will prevail. Not all GitHub projects offer release versions like this one.

> The current *Basics* section provides minimal support for non-developer users only;
>
> *GitHub* is much more than that. You can use *watch* and *Follow* to keep track of changes to the repository and authors, *Star* to collect warehouses and show support for authors, *Issue* to report usage The problem, *clone* and *pull requests* to participate in the project, or *fork* for your own secondary development, but these are not the focus of this article;
>
> If you are interested in the developer's world, you can use the search engine to learn the relevant knowledge first. As a website used by more than 10 million developers, using it is not as complicated as you think. Good luck!
>

### Script use

Take the example of *Adobe PhotoShop CC 2019* running on *macOS Mojave 10.14.5* system:

* The first step, open *PhotoShop CC*.

* Second step, find the *File* tab from the menu bar at the top of the screen and select *File -> Scripts -> Browse...* . This path may vary depending on the system and application version.

  ![user_guide_0](./GuideSources/user_guide_0.jpg)

* Finally, select the script file you want to run, click *Open* to complete the follow-up actions as directed by the script.

* Example：
  * You need to quickly generate an APP ICON file.
  * In the script introduction, find the script file that can implement this features, which corresponds to ``APP_ICON.jsx``.
  * Open the ``APP_ICON.jsx`` file with *PhotoShop* as described previously.

### Script introduction

* #### APP_ICON.jsx

  * **Short**

    * Quickly generate APP ICON files of all sizes.

  * **Detail**

    * By default, ICON is output for both iOS and Android. The ICON file name of Adnroid starts with ``ic_launcher``.

    * Files with the same name will be overwritten. It is recommended to create a new folder to receive the output file.

  * **Note**

    * For iOS, as of ``iOS 12.3.1 Xcode 10.2.1``, Apple's review requires ICON not to have rounded corners and no transparent channels, but in practice I found the output png may still contain alpha. Here provides a convenient way to check for users using the *macOS* system:

      * First step, double click the png file to open the image using the *preview* program that comes with the *macOS* system.

      * Second step, Find the *File* tab from the menu bar at the top of the screen, select *File -> Export...* .

        ![user_guide_icon_0](./GuideSources/user_guide_icon_0.jpg)

      * Third Step, observe if there is an alpha option in the page that appears.

        ![user_guide_icon_1](./GuideSources/user_guide_icon_1.jpg)

      * If the alpha option is present, it proves that the current png image still has a transparent channel. Just remove the checkmark of the alpha option and select the location and click *Store* to generate the correct png image.

      * If the alpha option does not appear, no processing is required.

* #### APP_LaunchImage.jsx

  * **Short**
    * Quickly generate APP launch image files of all sizes.

  * **Detail**
    * Default output *iOS7.0 and Later* *Vertical screen* launch page file, the launch image size required by Android can generally be satisfied at the same time.

    * When saving the output launch image, the default setting is *png, 24 bits, no interlace*.

    * The default processing of the launch image content is *Scale the layer to a new size until the longer side of the image is full of canvas*.

    * Files with the same name will be overwritten. It is recommended to create a new folder to receive the output file.
  * **Note**
    * The current content processing method is to simply scale the layer of the original launch image by a percentage ratio, and does not set a smoothing algorithm such as bicubic interpolation when the low resolution is enlarged to high resolution. It is recommended to pass a larger size image to the script to avoid loss of precision.
    * Simple zooming can only be performed well when the content of the page is simple. It is recommended to check the output content manually each time to avoid visual effects that do not meet the requirements.


### Development Resources

* [Adobe PhotoShop Scripting](https://www.adobe.com/devnet/photoshop/scripting.html)
  * *Guide* and *Reference* are mainly provided in pdf format, and *AppleScript*, *JavaScript* and *VBScript* are supported.

* [Adobe I/O](<https://www.adobe.io/>)
  * *Adobe* refactored and integrated its resources and launched a new developer's official website, which is divided into *Experience Platform* and *Adobe I/O Runtime*, the script and tool plug-in development belongs to the latter.

### LICENSE

[WTFPL](<http://www.wtfpl.net/about/>) – JUST DO WHAT THE F*CK YOU WANT TO DO.

