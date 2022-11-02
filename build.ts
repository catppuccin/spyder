#!/usr/bin/env deno run --allow-write
import { variants } from 'https://esm.sh/@catppuccin/palette@0.1.5';
import * as colormath from 'https://deno.land/x/colormath@1.2.4/mod.ts';

Deno.mkdirSync('./dist', { recursive: true });

let allThemes = '';

for (const [flavour, colors] of Object.entries(variants)) {
  const hexes = Object.fromEntries(
    Object.entries(colors).map(([key, value]) => [key, value.hex])
  );

  const darkBlue = colormath.mixColor(
    colormath.hex.toRgb(hexes.blue),
    colormath.hex.toRgb(hexes.base),
    0.3,
  ).hex.toLowerCase();

  const theme = `catppuccin/${ flavour }/name = Catppuccin ${ flavour.charAt(0).toUpperCase() + flavour.slice(1) }\n` +
                `catppuccin/${ flavour }/background = ${ hexes.base }\n` +
                `catppuccin/${ flavour }/currentline = ${ hexes.surface0 }\n` +
                `catppuccin/${ flavour }/currentcell = ${ hexes.base }\n` +
                `catppuccin/${ flavour }/occurrence = ${ darkBlue }\n` +
                `catppuccin/${ flavour }/ctrlclick = ${ hexes.lavender }\n` +
                `catppuccin/${ flavour }/sideareas = ${ hexes.base }\n` +
                `catppuccin/${ flavour }/matched_p = ${ hexes.green }\n` +
                `catppuccin/${ flavour }/unmatched_p = ${ hexes.red }\n` +
                `catppuccin/${ flavour }/normal = ('${ hexes.text }', False, False)\n` +
                `catppuccin/${ flavour }/keyword = ('${ hexes.mauve }', False, False)\n` +
                `catppuccin/${ flavour }/magic = ('${ hexes.mauve }', False, False)\n` +
                `catppuccin/${ flavour }/builtin = ('${ hexes.blue }', False, True)\n` +
                `catppuccin/${ flavour }/definition = ('${ hexes.yellow }', False, True)\n` +
                `catppuccin/${ flavour }/comment = ('${ hexes.overlay1 }', False, True)\n` +
                `catppuccin/${ flavour }/string = ('${ hexes.green }', False, False)\n` +
                `catppuccin/${ flavour }/number = ('${ hexes.peach }', False, False)\n` +
                `catppuccin/${ flavour }/instance = ('${ hexes.red }', False, True)`;

  Deno.writeTextFileSync(`dist/${ flavour }.ini`, theme);
  allThemes += theme + '\n';
}

Deno.writeTextFileSync('dist/all.ini', allThemes.slice(0, -1));
