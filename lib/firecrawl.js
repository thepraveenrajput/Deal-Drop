import Firecrawl from "@mendable/firecrawl-js";

const firecrawl = new Firecrawl({
  apiKey: process.env.FIRECRAWL_API_KEY,
});

export async function scrapeProduct(url) {
  try {
    if (!url) {
      throw new Error("URL is required");
    }

    const result = await firecrawl.extract({
      urls: [url],
      prompt:
        "Extract the product name as 'productName', current price as number 'currentPrice', currency code as 'currencyCode', and product image URL as 'productImageUrl'.",
      schema: {
        type: "object",
        properties: {
          productName: { type: "string" },
          currentPrice: { type: "number" },
          currencyCode: { type: "string" },
          productImageUrl: { type: "string" },
        },
        required: ["productName", "currentPrice"],
      },
    });

    console.log("Firecrawl result:", result);

    const extractedData = result?.data;

    if (!extractedData) {
      throw new Error("No product data extracted");
    }

    return {
      productName: extractedData.productName,
      currentPrice: extractedData.currentPrice,
      currencyCode: extractedData.currencyCode || "USD",
      productImageUrl: extractedData.productImageUrl || null,
    };
  } catch (error) {
    console.error("Firecrawl scrape error:", error.message);
    throw new Error(`Failed to scrape product: ${error.message}`);
  }
}
