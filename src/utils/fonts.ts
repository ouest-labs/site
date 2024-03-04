import { Poppins, Source_Code_Pro } from "next/font/google";

import localFont from 'next/font/local';

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const source_code_pro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const space_type = localFont({
  src: '../../public/fonts/SpaceType/SpaceType-Regular.otf',

  display: 'swap',
  variable: '--font-space',
})

export const vcr = localFont({
  src: '../../public/fonts/VCR_OSD_MONO_1.001.ttf',

  display: 'swap',
  variable: '--font-vcr',
})