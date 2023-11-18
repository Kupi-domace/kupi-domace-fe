import { FC } from "react";
import Link from "next/link";
import Box from "@component/Box";
import Icon from "@component/icon/Icon";
import Divider from "@component/Divider";
import FlexBox from "@component/FlexBox";
import { Button } from "@component/buttons";
import { H3, H6, SemiSpan, Small, Span } from "@component/Typography";
import { StyledSessionCard } from "./styles";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/router";

const Login: FC = () => {
  const router = useRouter();
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  console.log(isAuthenticated, user);
  // logout();
  if (isAuthenticated) {
    router.push("/profile");
  }

  return (
    <StyledSessionCard mx="auto" my="2rem" boxShadow="large">
      <FlexBox flexDirection={"column"} marginY={2} marginX={5}>
        <H3 textAlign="center" marginY={5}>
          Welcome To Ecommerce
        </H3>

        <Button
          mb="1.65rem"
          variant="contained"
          color="primary"
          type="submit"
          fullwidth
          onClick={() => loginWithRedirect()}
        >
          Login
        </Button>

        <Box mb="1rem">
          <Divider width="200px" mx="auto" />
          <FlexBox justifyContent="center" mt="-14px">
            <Span color="text.muted" bg="body.paper" px="1rem">
              on
            </Span>
          </FlexBox>
        </Box>

        <FlexBox
          mb="0.75rem"
          height="40px"
          color="white"
          bg="#3B5998"
          borderRadius={5}
          cursor="pointer"
          alignItems="center"
          justifyContent="center"
        >
          <Icon variant="small" defaultcolor="auto" mr="0.5rem">
            facebook-filled-white
          </Icon>
          <Small fontWeight="600">Continue with Facebook</Small>
        </FlexBox>

        <FlexBox
          mb="1.25rem"
          height="40px"
          color="white"
          bg="#4285F4"
          borderRadius={5}
          cursor="pointer"
          alignItems="center"
          justifyContent="center"
        >
          <Icon variant="small" defaultcolor="auto" mr="0.5rem">
            google-1
          </Icon>
          <Small fontWeight="600">Continue with Google</Small>
        </FlexBox>

        <FlexBox justifyContent="center" mb="1.25rem">
          <SemiSpan>Don’t have account?</SemiSpan>
          <Link href="">
            <a onClick={() => loginWithRedirect()}>
              <H6 ml="0.5rem" borderBottom="1px solid" borderColor="gray.900">
                Sign Up
              </H6>
            </a>
          </Link>
        </FlexBox>
      </FlexBox>

      <FlexBox justifyContent="center" bg="gray.200" py="19px">
        <SemiSpan>Forgot your password?</SemiSpan>
        <Link href="/">
          <a onClick={() => {}}>
            <H6 ml="0.5rem" borderBottom="1px solid" borderColor="gray.900">
              Reset It
            </H6>
          </a>
        </Link>
      </FlexBox>
    </StyledSessionCard>
  );
};

export default Login;
