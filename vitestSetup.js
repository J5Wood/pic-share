import { beforeAll, vi } from "vitest";
import "dotenv/config";

beforeAll(() => {
  vi.mock("next/navigation", () => {
    const actual = vi.importActual("next/navigation");
    return {
      ...actual,
      useRouter: vi.fn(),
      useSearchParams: vi.fn(),
      usePathname: vi.fn(() => console.log("USING MOCK PATHNAME FUNCTION")),
    };
  });
});
