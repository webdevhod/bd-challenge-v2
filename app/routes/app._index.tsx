import { Page, Layout, BlockStack, MediaCard } from "@shopify/polaris";

export default function Index() {
  return (
    <Page title="Product Reviews">
      <BlockStack gap="500">
        <Layout>
          <Layout.Section>
            <MediaCard
              title="Business Suit"
              primaryAction={{
                content: "Edit",
                onAction: () => {},
              }}
              description="Rating: 4.5/5. This business suit is fantastic! The fit is perfect, and the
                material is high quality. I feel confident and professional
                every time I wear it. Highly recommend!"
              popoverActions={[{ content: "Dismiss", onAction: () => {} }]}
              size="small"
            >
              <img
                alt="Item 1"
                width="100%"
                height="100%"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
              />
            </MediaCard>
          </Layout.Section>
        </Layout>
      </BlockStack>
    </Page>
  );
}
