import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Grid from "@component/grid/Grid";
import FlexBox from "@component/FlexBox";
import Container from "@component/Container";
import Pagination from "@component/pagination";
import { SemiSpan } from "@component/Typography";
import SaleLayout2 from "@component/layout/SaleLayout2";
import { ProductCard1 } from "@component/product-cards";
import { renderProductCount } from "@utils/utils";
import Product from "@models/product.model";
import { Meta } from "interfaces";
import serverAxiosInstance from "config/serverAxiosInstance";

// ===================================================
type Props = { products: Product[]; meta: Meta };
// ===================================================

const SalePage2 = ({ products, meta }: Props) => {
  const { push } = useRouter();
  const handlePageChange = (page: number) => push(`?page=${page + 1}`);

  return (
    <Container mt="2rem">
      <Grid container spacing={6}>
        {products.map((item) => (
          <Grid item lg={3} md={4} sm={6} xs={12} key={item.id}>
            <ProductCard1
              id={item.id}
              slug={item.slug}
              price={item.price}
              title={item.title}
              off={item.discount}
              images={item.images}
              imgUrl={item.thumbnail}
              rating={item.rating || 4}
            />
          </Grid>
        ))}
      </Grid>

      <FlexBox flexWrap="wrap" justifyContent="space-between" alignItems="center" my="4rem">
        <SemiSpan>{renderProductCount(meta.page - 1, meta.pageSize, meta.total)}</SemiSpan>
        <Pagination onChange={handlePageChange} pageCount={meta.totalPage} />
      </FlexBox>
    </Container>
  );
};

SalePage2.layout = SaleLayout2;

// ==============================================================

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const PAGE_SIZE = 10;
  const PAGE = query?.page ? Number(query.page) : 1;
  const params = { page: PAGE, pageSize: PAGE_SIZE };

  const { data } = await serverAxiosInstance.get(`/products/?limit=${params.pageSize}&offset=${params.pageSize * (params.page - 1)}`);
  if (!data) return { notFound: true };

  return { props: { products: data.items, meta: data.meta } };
};

export default SalePage2;
