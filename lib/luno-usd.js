import { getLunoXbtMyrRate } from "./luno-myr.js";
import { getConvertRate } from "./convert-rate.js";

export async function getLunoXbtUsdcRate() {
  const var1 = await getLunoXbtMyrRate();
  const var2 = await getConvertRate();
  const var3 = var1 / var2;

  return +var3;
  }
