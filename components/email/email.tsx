import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface DropboxResetPasswordEmailProps {
  email?: string;
  resetPasswordLink?: string;
}

export const DropboxResetPasswordEmail = ({
  email,
  resetPasswordLink,
}: DropboxResetPasswordEmailProps) => {
  const href = `https://astorefront.shop/forgetpassword/resetpassword?token=${resetPasswordLink}&email=${email}`;
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>reset your password</Preview>
        <Container style={container}>
          <Img
            src={`https://astorefront.shop/imges/logo.png`}
            width="150px"
            height="33px"
            alt="Astorefront"
            style={logo}
          />
          <Section>
            <Text style={text}>Hi {email},</Text>
            <Text style={text}>
              Someone recently requested a password change for your Astorefront
              account. If this was you, you can set a new password here:
            </Text>
            <Button style={button} href={href}>
              Reset password
            </Button>
            <Text style={text}>
              If you don&apos;t want to change your password or didn&apos;t
              request this, just ignore and delete this message.
            </Text>
            <Text style={text}>
              To keep your account secure, please don&apos;t forward this email
              to anyone. See our Help Center for
              <Link style={anchor} href={href}>
                more security tips.
              </Link>
            </Text>
            <Text style={text}>Happy Astorefront!</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

DropboxResetPasswordEmail.PreviewProps = {
  userFirstname: "Alan",
  resetPasswordLink: "https://www.astorefront.shop",
} as DropboxResetPasswordEmailProps;

export default DropboxResetPasswordEmail;

const main = {
  backgroundColor: "#f6f9fc",
  padding: "10px 0",
};
const logo = {
  margin: "0 auto",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  padding: "45px",
};

const text = {
  fontSize: "16px",
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: "300",
  color: "#404040",
  lineHeight: "26px",
};

const button = {
  backgroundColor: "#010101",
  borderRadius: "4px",
  color: "#fff",
  fontFamily: "'Open Sans', 'Helvetica Neue', Arial",
  fontSize: "15px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "210px",
  padding: "14px 7px",
};

const anchor = {
  textDecoration: "underline",
};
