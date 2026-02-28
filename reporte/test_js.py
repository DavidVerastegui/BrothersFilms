import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        
        # Capture console messages
        page.on("console", lambda msg: print(f"JS console: {msg.type}: {msg.text}"))
        
        # Capture uncaught exceptions
        page.on("pageerror", lambda err: print(f"JS Error: {err}"))
        
        print("Loading page...")
        await page.goto("http://localhost:8080/")
        
        # Wait for page to fully load and run its scripts
        await page.wait_for_timeout(2000)
        
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
