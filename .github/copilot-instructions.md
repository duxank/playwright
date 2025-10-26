# 🧠 GitHub Copilot PR Review Instructions

These are the **review guidelines** for all pull requests in this repository, which contains a **Playwright test automation framework**.

---

## 🎯 Overall Review Goals

When reviewing pull requests, focus on:

- Code **correctness, readability, and maintainability**
- Adherence to **Playwright framework structure**
- Proper **test organization, tagging, and reporting**
- Avoiding **duplicate logic** or unnecessary complexity

Do **not** comment on:

- Code formatting or stylistic preferences (handled by ESLint/Prettier)
- Minor naming or comment tone unless it affects clarity or functionality

---

## 🧱 Framework Standards

### ✅ **1. Project Structure**

Ensure the following folders are properly maintained:
/tests
/pages
/utils
/config
/reports

- Each new feature should include **page objects** and **tests**.
- No Playwright actions should appear directly in test files (must go through Page Object methods).

---

### 🧩 **2. Page Object Model (POM)**

Each page class should:

- Encapsulate **locators and methods** for that page only.
- Avoid hard-coded selectors; prefer `data-testid` or centralized selectors.
- Expose **clear, reusable actions** like `loginPage.login()` or `dashboard.openSettings()`.

Reject PRs where:

- Tests directly manipulate UI elements without using POM.
- Duplicate locators exist across pages.

---

### 🧪 **3. Tests**

Each test file should:

- Contain **clear, atomic test cases** with descriptive names.
- Include **tags** for grouping and filtering:
  - `@smoke` → Core critical flow
  - `@regression` → Full coverage suite
  - `@api` → API-level test
- Use `test.describe` blocks for logical grouping.

```ts
test('@smoke user can log in', async ({ page }) => { ... });
```

Ensure that:

Each test includes proper assertions.

No unnecessary waits (page.waitForTimeout) — prefer Playwright’s auto-waiting or explicit waits.

⚙️ 4. Configuration & Fixtures

Validate updates to playwright.config.ts — environment handling, baseURL, reporter setup.

Fixtures should manage setup/teardown efficiently (auth, test data, etc.).

Global hooks (if added) must remain fast and deterministic.

🧰 5. Utilities

Helper functions should live in /utils and be generic, not test-specific.

Common examples: data generation, API calls, date utilities.

Utilities must be reusable and documented.

📊 6. Reporting

Ensure:

Allure reporter is configured in playwright.config.ts

All tests include allure.feature, allure.story, and allure.tag where applicable

HTML reports and test artifacts (videos/screenshots) are properly referenced in CI

Reject PRs that:

Remove or break Allure configuration

Introduce custom reporters without team agreement

🔄 7. CI/CD Integration

For workflow YAMLs under .github/workflows:

Ensure proper test execution command:
npx playwright test --reporter=allure-playwright
Allure report generation:
npx allure generate allure-results --clean -o allure-report
Upload reports as build artifacts.

🧠 8. Code Quality

Code must pass ESLint and Prettier checks.

Prefer TypeScript types over any.

Keep functions short, purposeful, and typed.

Sensitive data (tokens, credentials) must come from .env or secrets.

🧾AI Review Behavior

When reviewing:

Be concise but detailed — point out the specific issue and suggestion.

Prioritize issues that affect test stability, structure, or scalability.

Use a constructive tone — suggest better alternatives, not just problems.

Example feedback:

⚠️ This test directly uses page selectors instead of calling a Page Object method.
Consider moving this logic to LoginPage.login() for reusability.

✅ Summary

Copilot should:

Enforce Playwright best practices

Validate Allure and tagging consistency

Ignore trivial syntax/style differences

Encourage maintainable, modular design
