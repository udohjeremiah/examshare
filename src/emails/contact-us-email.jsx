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

export default function ContactUsEmail({ fullName, subject, message }) {
  const previewText =
    "Thanks for reaching out. We've received your message and are reviewing it. Expect a response soon.";

  return (
    <Html>
      <Head>
        <title>{`Re: ${subject} | ExamShare`}</title>
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
              <Heading as="h2">MESSAGE RECEIVED</Heading>
              <Text>Hello {fullName},</Text>
              <Text>
                Thank you for reaching out to us. Your message has been received
                successfully. Our team is currently reviewing the details you
                provided, and we will get back to you as soon as possible.
              </Text>
              <Text>
                Please note that this email is an automated acknowledgment and
                does not require a reply. However, rest assured that we will
                continue to communicate with you within this same email thread
                when we are ready to respond to your message.
              </Text>
              <Text>
                We appreciate your patience and look forward to assisting you.
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
