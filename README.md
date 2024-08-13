<h3 align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png" width="100" alt="Logo"/><br/>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
	Catppuccin for <a href="https://www.spyder-ide.org/">Spyder</a>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
</h3>

<p align="center">
	<a href="https://github.com/catppuccin/spyder/stargazers"><img src="https://img.shields.io/github/stars/catppuccin/spyder?colorA=363a4f&colorB=b7bdf8&style=for-the-badge"></a>
	<a href="https://github.com/catppuccin/spyder/issues"><img src="https://img.shields.io/github/issues/catppuccin/spyder?colorA=363a4f&colorB=f5a97f&style=for-the-badge"></a>
	<a href="https://github.com/catppuccin/spyder/contributors"><img src="https://img.shields.io/github/contributors/catppuccin/spyder?colorA=363a4f&colorB=a6da95&style=for-the-badge"></a>
</p>

<p align="center">
	<img src="assets/preview.webp"/>
</p>

## Previews

<details>
<summary>🌻 Latte</summary>
<img src="assets/latte.webp"/>
</details>
<details>
<summary>🪴 Frappé</summary>
<img src="assets/frappe.webp"/>
</details>
<details>
<summary>🌺 Macchiato</summary>
<img src="assets/macchiato.webp"/>
</details>
<details>
<summary>🌿 Mocha</summary>
<img src="assets/mocha.webp"/>
</details>


## Usage

1. With Spyder closed, open `~/.spyder-py3/spyder.ini`.
2. Scroll to the `[appearance]` section, and add your preferred theme(s) to the `names` option:

    ```ini
    [appearance]
    ...
    names = ['catppuccin/frappe', 'catppuccin/latte', 'catppuccin/macchiato',
             'catppuccin/mocha', 'emacs', 'idle', ..., 'zenburn']
    ```

3. Append the contents of either `themes/all.ini` or the specific flavor you would like (e.g. `themes/mocha.ini`) to the end of the `[appearance]` section.

> [!NOTE]
> The flavors you add must match the flavors you added to the `names` variable in Step 2.

4. Launch Spyder and change the theme in **Preferences** > **Appearance** > **Syntax Highlighting Theme**. If you are using latte, also switch the **Interface Theme** to **Light** or **Automatic**.

## Customization

You may modify the theme in **Preferences** > **Appearance** > **Edit Selected Theme**. 

> [!WARNING]
> Do not click **Reset to Defaults**. This will crash the preferences menu until you reinstall the theme.

## 🙋 FAQ

-	Q: **_"Why does the interface theme not change?"_** \
	A: Spyder does not currently allow theming of the window. We will add an interface theme when it is possible.

## 💝 Thanks to

- [meme8383](https://github.com/meme8383)

&nbsp;

<p align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/footers/gray0_ctp_on_line.svg?sanitize=true" />
</p>

<p align="center">
	Copyright &copy; 2022-present <a href="https://github.com/catppuccin" target="_blank">Catppuccin Org</a>
</p>

<p align="center">
	<a href="https://github.com/catppuccin/catppuccin/blob/main/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=MIT&logoColor=d9e0ee&colorA=363a4f&colorB=b7bdf8"/></a>
</p>
