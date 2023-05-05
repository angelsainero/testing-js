describe('Google', () => {
    beforeAll(async () => {
        await page.goto('https://google.com');
    });

    it('should be titled "Google"', async () => {
        await expect(page.title()).resolves.toMatch('Google');
    });
});

describe.only('Jest', () => {
    beforeAll(async () => {
        await page.goto('https://jestjs.io/');
    });

    it('<title> should contain "Jest"', async () => {
        await expect(page.title()).resolves.toMatch('Jest');
    });

    it('must show React, Angular, Vue in main section', async() => {
        const div = await page.$eval('.containerV1.intro', el => el.textContent)
        expect(div).toMatch(/React/)
        expect(div).toMatch(/Angular/)
        expect(div).toMatch(/Vue/)
    })
    it("<h2> must contain 'Zero config', 'Snapshots', 'Isolated', 'Great api'", async() => {
        const h2 = await page.$$eval('h2', listOfH2 => listOfH2.map(el => el.textContent))
        expect(h2).toContain('Zero config')
        expect(h2).toContain('Snapshots')
        expect(h2).toContain('Isolated')
        expect(h2).toContain('Great api')
    })
    it.skip('After clicking in docs, <h1> must be "Getting Started"', async() => {
        await page.click('div.navbar__items a.navbar__item[href*="getting-started"]')
        const h1 = await page.$eval('h1', el => el.textContent)
        expect(h1).toEqual('Getting Started')
    })
})