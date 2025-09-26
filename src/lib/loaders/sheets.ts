import { sheetLoader } from "astro-sheet-loader";
import configData from "@util/themeConfig";

export const sheetLoad = () => {
  const sheetConfig = configData?.directoryData?.source?.sheets;
  const key = sheetConfig?.key;

  if (!key) {
    throw new Error(
      "You need to define a Google Sheets key in settings.toml to use Sheets as a directory data source."
    );
  }

  return sheetLoader({ document: key });
};
