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

export default function VerifyEmailSuccessfulEmail({ fullName }) {
  const previewText =
    "Congratulations! Your ExamShare account is now verified. Delighted to welcome you to our community.";

  return (
    <Html>
      <Head>
        <title>Welcome to ExamShare | ExamShare</title>
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
                <Heading as="h2">ACCOUNT CREATION SUCCESSFUL</Heading>
                <Text>Hello {fullName},</Text>
                <Text>
                  Congratulations! Your ExamShare account has been successfully
                  created and verified. We&apos;re delighted to officially
                  welcome you to our community.
                </Text>
                <Text>
                  This crucial step ensures the security of your account and
                  grants you full access to all the features and benefits our
                  platform has to offer.
                </Text>
                <Hr />
                <Text>
                  Now that your account has been created and verified, log in
                  using the details you used during account creation. You can
                  upvote, downvote, and provide answers to past exam questions
                  from any school.
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
      </Head>
    </Html>
  );
}
