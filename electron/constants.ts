export const GZDOOM_PATH = '.var/app/org.zdoom.UZDoom/.config/uzdoom';
export const MOD_PATH = '/mods';
export const FLATPAK_RUN_COMMAND = 'flatpak run org.zdoom.UZDoom';
export const FLATPAK_LIST_COMMAND = 'flatpak list | grep UZDoom';

export const SETTINGS_FILE_PATH = '.config/UZDeck';
export const SETTINGS_FILE = 'settings.json';
export const SETTINGS_CONTENTS = {
  previousRun: {
    iwad: '',
    mods: []
  },
  savedConfigs: []
}
