import {
  Body,
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

export default function ResetPasswordSuccessfulEmail({ fullName }) {
  const previewText =
    "Password changed for ExamShare. If you made this change, ignore this notice.";

  return (
    <Html>
      <Head>
        <title>Password Reset Successful | ExamShare</title>
      </Head>
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="m-auto bg-white text-slate-600">
          <Container className="mx-auto my-10 w-1/2 rounded border border-solid border-slate-200">
            <Section className="bg-sky-50 p-10">
              <Heading as="h1" className="m-0 text-7xl text-sky-900">
                ExamShare
              </Heading>
              <Text className="m-0 mt-2 text-lg">
                The open-source project for sharing past examination questions
                in higer education.
              </Text>
            </Section>
            <Section className="px-10">
              <Heading as="h2">PASSWORD CHANGED SUCCESSFULLY</Heading>
              <Text>Hello {fullName},</Text>
              <Text>
                Your password for ExamShare has been successfully changed. If
                you initiated this change, you can disregard this notice.
              </Text>
              <Text>
                However, if you did not request this password change, please
                contact us immediately at{" "}
                <Link href="mailto:examshare.vercel.app@gmail.com">
                  examshare.vercel.app@gmail.com
                </Link>
                . Your security is our top priority, and we want to ensure the
                protection of your account.
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
