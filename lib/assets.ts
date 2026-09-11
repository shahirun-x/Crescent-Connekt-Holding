import { existsSync } from "node:fs";
import { join } from "node:path";

/**
 * Checks whether a static file has been added to the `public` directory.
 *
 * Used so brand assets that have not been added to the repository yet
 * (e.g. the logo lockup or launch artwork) fall back to a placeholder
 * instead of rendering as a broken image. Once the real file is added,
 * it is picked up automatically — no code changes needed.
 */
export function publicAssetExists(relativePath: string): boolean {
  try {
    return existsSync(join(process.cwd(), "public", relativePath));
  } catch {
    return false;
  }
}
