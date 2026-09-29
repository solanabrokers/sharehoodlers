import { test, expect } from "@playwright/test";

test("launch content, assets, and external mint links work", async ({
  page,
}, testInfo) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "3,333 SHARES.ONE COLLECTIVE.",
  );
  await expect(page.locator("#mint")).toContainText("SEPTEMBER 30");
  await expect(page.locator("#mint")).toContainText("3:00–3:30 PM UTC");
  for (const link of await page
    .getByRole("link", { name: "MINT ON OPENSEA" })
    .all()) {
    await expect(link).toHaveAttribute(
      "href",
      "https://opensea.io/collection/the-hoodsters",
    );
    await expect(link).toHaveAttribute("rel", "noopener noreferrer");
  }
  await page.locator("#collection").scrollIntoViewIfNeeded();
  await expect
    .poll(() =>
      page
        .locator(".character-card img")
        .evaluateAll((images) =>
          images.every(
            (image) =>
              (image as HTMLImageElement).complete &&
              (image as HTMLImageElement).naturalWidth > 0,
          ),
        ),
    )
    .toBe(true);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  expect(errors).toEqual([]);
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await page.screenshot({
    path: testInfo.outputPath("homepage.png"),
    fullPage: true,
  });
});

test("collection filtering, modal navigation, and download", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Alter egos", exact: true }).click();
  await expect(page.locator(".character-card")).toHaveCount(4);
  await page
    .getByRole("button", { name: "View Night Shift", exact: true })
    .click();
  const dialog = page.getByRole("dialog");
  await expect(dialog.getByRole("heading")).toHaveText("Night Shift");
  await expect(
    dialog.getByRole("link", { name: "Download artwork" }),
  ).toHaveAttribute("download", "hoodster-night-shift.webp");
  await dialog.getByRole("button", { name: "Next character" }).click();
  await expect(dialog.getByRole("heading")).toHaveText("Urban Nomad");
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(
    page.getByRole("button", { name: "View Night Shift", exact: true }),
  ).toBeFocused();
  await page
    .getByRole("button", { name: "All characters", exact: true })
    .click();
  await page.getByRole("button", { name: "View all 16 characters" }).click();
  await expect(page.locator(".character-card")).toHaveCount(16);
});

test("FAQ and video dialog are interactive", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "When is the mint?" }).click();
  await expect(
    page.getByRole("region", { name: "When is the mint?" }),
  ).toContainText("5:30 PM UTC");
  await page.getByRole("button", { name: "Watch the film" }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect
    .poll(() =>
      page
        .locator("video")
        .evaluate((video) => (video as HTMLVideoElement).readyState),
    )
    .toBeGreaterThanOrEqual(1);
  await page.getByRole("button", { name: "Close", exact: true }).click();
  await expect(page.locator("video")).toHaveCount(0);
});

test("mobile navigation closes after choosing a section", async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name !== "mobile", "Mobile-only navigation");
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  await page
    .getByRole("navigation", { name: "Mobile navigation" })
    .getByRole("link", { name: "The collection" })
    .click();
  await expect(page).toHaveURL(/#collection$/);
  await expect(
    page.getByRole("navigation", { name: "Mobile navigation" }),
  ).not.toBeVisible();
});
