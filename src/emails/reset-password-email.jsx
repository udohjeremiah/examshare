import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

export default function ResetPasswordEmail({ fullName, resetLink }) {
  const previewText =
    "Password reset initiated for your ExamShare account. Confirm action through the verification process.";

  return (
    <Html>
      <Head>
        <title>Reset Your Password | ExamShare</title>
      </Head>
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="m-auto bg-white font-inter text-slate-600">
          <Container className="mx-auto my-10 w-1/2 rounded border border-solid border-slate-200">
            <Section className="bg-sky-50 p-10">
              <Heading
                as="h1"
                className="m-0 font-monoton text-7xl text-sky-900"
              >
                ExamShare
              </Heading>
              <Text className="m-0 mt-2 text-lg">
                The open-source project for sharing past examination questions
                in higer education.
              </Text>
            </Section>
            <Section className="px-10">
              <Heading as="h2">RESET YOUR PASSWORD</Heading>
              <Text>Hello {fullName},</Text>
              <Text>
                It has come to our attention that a password reset for your
                ExamShare account has recently been initiated. If this action
                was taken by you, please follow the verification process below
                to proceed with the request.
              </Text>
              <Hr />
              <Text>
                To reset your password, simply click on the button below to
                verify your identity and proceed with the password reset:
              </Text>
              <Button
                href={resetLink}
                className="w-full rounded-md bg-sky-500 p-3 text-center font-semibold text-white active:bg-sky-700"
              >
                Reset Your Password
              </Button>
              <Text>
                Alternatively, you can use the following link to complete the
                password reset process by copying and pasting the URL into your
                browser: <Link href={resetLink}>{resetLink}</Link>
              </Text>
              <Text>
                If you did not request this password reset, please disregard
                this email and do not forward it to anyone. Your account
                security is our top priority.
              </Text>
              <Text>
                Should you encounter any challenges or have questions, our
                dedicated support team is here to assist. Reach out to us at{" "}
                <Link href="mailto:examshare.vercel.app@gmail.com">
                  examshare.vercel.app@gmail.com
                </Link>
                .
              </Text>
              <Hr />
            </Section>
            <Section className="px-10 text-center">
              <Text className="text-xs">
                Copyright &copy; 2023 ExamShare. All rights reserved.
              </Text>
              <Text className="text-xs">
                <Link href="https://examshare.vercel.app/privacy-policy">
                  Privacy Policy
                </Link>{" "}
                •{" "}
                <Link href="https://examshare.vercel.app/terms-and-conditions">
                  Terms of Use
                </Link>{" "}
                •{" "}
                <Link href="https://examshare.vercel.app/legal-disclaimer">
                  Disclaimer
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
