const { getServerSideProps } = require(".");

describe("getServerSideProps", () => {
  it("Test to right server response on id", async () => {
    const response = await getServerSideProps({query: {id: 1}});

    expect(response).toMatchObject({props: {product: {id: 1}}})
  });

  it('Test time run', async () => {
    const start = Date.now();

    await getServerSideProps({query: {id: 1}});

    expect(Date.now() - start).toBeLessThan(20*1000);
  });
});
