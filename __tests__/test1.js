const timeout = 500000;

jest.setTimeout(120000);

describe(
  '/ (Home Page)',
  () => {
    let page
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage()
      await page.goto('https://google.com')
    }, timeout)

    afterAll(async () => {
      await page.close()
    })

    it('should load without error', async () => {
      await page.evaluate(() => {debugger;});
      let text = await page.evaluate(() => document.body.textContent)
      expect(text).toContain('google')
    })
  },
  timeout
)
