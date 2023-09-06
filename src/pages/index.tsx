import Box from "@component/Box";
import Footer from "@sections/landing/Footer";
import Section1 from "@sections/landing/Section1";
import Section2 from "@sections/landing/Section2";
import Section3 from "@sections/landing/Section3";
import Section4 from "@sections/landing/Section4";
import axiosInstance from "config/axiosInstance";
// import Section5 from "@sections/landing/Section5";
import { NextIntlClientProvider } from "next-intl";

type Props = {
  messages: any;
};

const IndexPage = ({ messages = {} }: Props) => {
  console.log("messages", messages);
  return (
    <NextIntlClientProvider messages={messages}>
      <Box id="top" overflow="hidden" bg="gray.white">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        {/* <Section5 /> */}
        <Footer />
      </Box>
    </NextIntlClientProvider>
  );
};

export async function getServerSideProps({ res, locale }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  try {
    // ToDO: get translations from cache or cookies
    const response = await axiosInstance.get(
      `/api/translations?locale=${locale}`
    );
    return {
      props: {
        messages: response.data.messages,
      },
    };
  } catch (err) {
    return {
      props: {
        messages: {},
      },
    };
  }
}

export default IndexPage;
