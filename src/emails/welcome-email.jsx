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

export default function WelcomeEmail({ fullName, verificationLink }) {
  const previewText =
    "Welcome to ExamShare! Thrilled to have you on board. Your account is ready for exciting possibilities.";

  return (
    <Html>
      <Head>
        <title>Verify Your Account | ExamShare</title>
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
              <Heading as="h2">WELCOME</Heading>
              <Text>Hello {fullName},</Text>
              <Text>
                Welcome to ExamShare! We&apos;re thrilled to have you on board
                and appreciate your decision to join our community. Your account
                has been successfully created, and we&apos;re excited about the
                possibilities that lie ahead.
              </Text>
              <Hr />
              <Text>
                For the security of your account and to ensure the best user
                experience, we kindly request you to verify your email address.
                This quick and straightforward process is crucial for
                maintaining the safety and integrity of your account. Please
                note that without verification, you won&apos;t be able to access
                your account.
              </Text>
              <Hr />
              <Text>
                To verify your account, simply click on the button below:
              </Text>
              <Button
                href={verificationLink}
                className="w-full rounded-md bg-sky-500 p-3 text-center font-semibold text-white active:bg-sky-700"
              >
                Verify Your Account
              </Button>
              <Text>
                Alternatively, you can use the following link to complete the
                verification process by copying and pasting the URL into your
                browser: <Link href={verificationLink}>{verificationLink}</Link>
              </Text>
              <Text>
                If you did not initiate this account creation or did not request
                this email, please disregard it and do not forward it to anyone.
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
