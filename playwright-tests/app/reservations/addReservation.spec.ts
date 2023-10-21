// import { expect, test } from "@playwright/test";

// test.describe('Test suite on "Add reservation" page', () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto("./reservations/ajouter");
//   });

//   test("Has right title", async ({ page }) => {
//     await expect(
//       page.getByRole("heading", { name: "Réserver un véhicule" })
//     ).toBeVisible();
//   });

//   // test("Enable validation button", async ({ page }) => {
//   //   await page.route("*/**/api/motives?page=1", async (route) => {
//   //     const json = getMotivesJsonResponse["hydra:member"];
//   //     await route.fulfill({ json });
//   //   });
//   //   await expect(page.getByRole("button", { name: "Réserver" })).toBeDisabled();
//   //   await page.getByLabel(/Catégorie/).click();
//   //   await page.getByRole("option", { name: "Citadine" }).click();
//   //   await page.getByLabel(/Date et heure de départ/).fill("31/08/2023 10:00");
//   //   await page.getByLabel(/Lieu de départ/i).click();
//   //   await expect(
//   //     page.getByRole("option", { name: /ENI Chartres-de-Bretagne/ })
//   //   ).toBeVisible({ timeout: 120000 });
//   //   await page
//   //     .getByRole("option", { name: /ENI Chartres-de-Bretagne/ })
//   //     .click();
//   //   await page.getByLabel(/Motif/i).click();
//   //   await expect(
//   //     page.getByRole("option", { name: /Rendez-vous sur un autre site/ })
//   //   ).toBeVisible();
//   //   await page
//   //     .getByRole("option", { name: /Rendez-vous sur un autre site/ })
//   //     .click();
//   //   await page.getByLabel(/Destination/i).click();
//   //   await page.getByLabel(/Destination/).fill("123 rue de Rennes 35000 Rennes");
//   //   await page.getByLabel(/Date et heure de retour/).fill("01/09/2023 17:00");
//   //   await expect(page.getByRole("button", { name: "Réserver" })).toBeEnabled();
//   // });
// });
