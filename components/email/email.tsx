// import {
//   Body,
//   Container,
//   Head,
//   Heading,
//   Html,
//   Preview,
//   Text,
// } from "@react-email/components";

// interface WaitlistEmailProps {
//   name: string;
// }

// export const WaitlistEmail: React.FC<Readonly<WaitlistEmailProps>> = ({
//   name,
// }) => (
//   <Html>
//     <Head />
//     <Preview>Thank you for joining our waitlist and for your patience</Preview>
//     <Body style={main}>
//       <Container style={container}>
//         <Heading style={h1}>Reset your password</Heading>
//         <Text style={text}>
//           Thank you {name} for joining our waitlist and for your patience. We
//           will send you a note when we have something new to share.
//         </Text>
//       </Container>
//     </Body>
//   </Html>
// );

// export default WaitlistEmail;

// const main = {
//   backgroundColor: "#000000",
//   margin: "0 auto",
//   fontFamily:
//     "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
// };

// const container = {
//   margin: "auto",
//   padding: "96px 20px 64px",
// };

// const h1 = {
//   color: "#ffffff",
//   fontSize: "24px",
//   fontWeight: "600",
//   lineHeight: "40px",
//   margin: "0 0 20px",
// };

// const text = {
//   color: "#aaaaaa",
//   fontSize: "14px",
//   lineHeight: "24px",
//   margin: "0 0 40px",
// };
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

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const DropboxResetPasswordEmail = ({
  email,
  resetPasswordLink,
}: DropboxResetPasswordEmailProps) => {
  const href = `https://astorefront-git-main-salamahanis-projects.vercel.app/resetpassword?token=${resetPasswordLink}&email=${email}`;
  ///link routs app
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>Dropbox reset your password</Preview>
        <Container style={container}>
          <Img
            src={`${baseUrl}/static/dropbox-logo.png`}
            width="40"
            height="33"
            alt="Dropbox"
          />
          <Section>
            <Text style={text}>Hi {email},</Text>
            <Text style={text}>
              Someone recently requested a password change for your Dropbox
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
              to anyone. See our Help Center for{" "}
              <Link style={anchor} href={href}>
                more security tips.
              </Link>
            </Text>
            <Text style={text}>Happy Dropboxing!</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

DropboxResetPasswordEmail.PreviewProps = {
  userFirstname: "Alan",
  resetPasswordLink: "https://www.dropbox.com",
} as DropboxResetPasswordEmailProps;

export default DropboxResetPasswordEmail;

const main = {
  backgroundColor: "#f6f9fc",
  padding: "10px 0",
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
  backgroundColor: "#007ee6",
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
