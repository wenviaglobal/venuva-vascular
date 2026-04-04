// @ts-ignore
import React from "react";
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
    Text,
    Row,
    Column,
} from "@react-email/components";

export const Email = ({
    name,
    email,
    phone,
    subject,
    message = `Hey Myself ${name}, I would like to schedule a screening for treatment let me know the availablity.`,
}) => {
    const previewText = `New Vascular Inquiry from ${name}`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Body style={main}>
                <Container style={container}>
                    {/* Header with Peacock Green */}
                    <Section style={header}>
                        <Heading style={headerTitle}>Vascular Care Center</Heading>
                        <Text style={headerSubtitle}>Advanced Vascular & Endovascular Surgery</Text>
                    </Section>

                    <Section style={content}>
                        <Heading style={h1}>New Inquiry Received</Heading>
                        <Text style={text}>
                            Hello Team, a new patient inquiry has been submitted via the hospital website.
                        </Text>

                        <Section style={infoCard}>
                            <Row style={infoRow}>
                                <Column style={labelCol}>
                                    <Text style={label}>Name</Text>
                                </Column>
                                <Column style={valueCol}>
                                    <Text style={value}>{name}</Text>
                                </Column>
                            </Row>
                            <Hr style={divider} />
                            <Row style={infoRow}>
                                <Column style={labelCol}>
                                    <Text style={label}>Email</Text>
                                </Column>
                                <Column style={valueCol}>
                                    <Link href={`mailto:${email}`} style={link}>
                                        {email}
                                    </Link>
                                </Column>
                            </Row>
                            <Hr style={divider} />
                            <Row style={infoRow}>
                                <Column style={labelCol}>
                                    <Text style={label}>Phone</Text>
                                </Column>
                                <Column style={valueCol}>
                                    <Link href={`tel:${phone}`} style={link}>
                                        {phone}
                                    </Link>
                                </Column>
                            </Row>
                            <Hr style={divider} />
                            <Row style={infoRow}>
                                <Column style={labelCol}>
                                    <Text style={label}>Subject</Text>
                                </Column>
                                <Column style={valueCol}>
                                    <Text style={valueText}>{subject}</Text>
                                </Column>
                            </Row>
                        </Section>

                        <Heading style={h2}>Message Details</Heading>
                        <Section style={messageBox}>
                            <Text style={messageText}>{message}</Text>
                        </Section>

                        <Section style={buttonContainer}>
                            <Link
                                href={`mailto:${email}?subject=RE: ${subject}`}
                                style={button}
                            >
                                Reply to Patient
                            </Link>
                        </Section>
                    </Section>

                    <Hr style={footerDivider} />

                    <Section style={footer}>
                        <Text style={footerText}>
                            Vascular Care Multispeciality Hospital
                        </Text>
                        <Text style={footerSubtext}>
                            123 Health Avenue, Medical District, Bengaluru<br />
                            Emergency: +91 80 1234 5678 | Helpline: +91 99000 00000
                        </Text>
                        <Row style={socialRow}>
                            <Column align="center" style={socialCol}>
                                <Link href="#" style={footerLink}>Website</Link>
                            </Column>
                            <Column align="center" style={socialCol}>
                                <Link href="#" style={footerLink}>Directions</Link>
                            </Column>
                        </Row>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};
{console.log();
}

export default Email;

/* --- Styles --- */

const main = {
    backgroundColor: "#f0f5f4", // Slight tint of peacock green for bg
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
};

const container = {
    margin: "40px auto",
    width: "600px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(0, 95, 86, 0.1)",
};

const header = {
    backgroundColor: "#005F56", // Peacock Green
    padding: "45px 20px",
    textAlign: "center",
    borderBottom: "4px solid #FF6B00", // Orange Accent Line
};

const headerTitle = {
    color: "#ffffff",
    fontSize: "26px",
    fontWeight: "bold",
    margin: "0",
    letterSpacing: "0.5px",
};

const headerSubtitle = {
    color: "#B2D1CE", // Faded peacock green
    fontSize: "13px",
    margin: "8px 0 0",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
};

const content = {
    padding: "40px",
};

const h1 = {
    color: "#005F56", // Peacock Green
    fontSize: "22px",
    fontWeight: "bold",
    margin: "0 0 15px",
};

const h2 = {
    color: "#005F56",
    fontSize: "18px",
    fontWeight: "bold",
    margin: "30px 0 10px",
};

const text = {
    color: "#4a5568",
    fontSize: "15px",
    lineHeight: "24px",
    margin: "0 0 25px",
};

const infoCard = {
    backgroundColor: "#f7faf9",
    borderRadius: "8px",
    border: "1px solid #e2e8f0",
    padding: "10px 20px",
};

const infoRow = {
    padding: "12px 0",
};

const labelCol = {
    width: "100px",
};

const valueCol = {
    width: "auto",
};

const label = {
    color: "#FF6B00", // Orange for Labels
    fontSize: "12px",
    fontWeight: "bold",
    textTransform: "uppercase",
    margin: "0",
};

const value = {
    color: "#1a202c",
    fontSize: "15px",
    fontWeight: "600",
    margin: "0",
};

const valueText = {
    color: "#1a202c",
    fontSize: "15px",
    margin: "0",
};

const link = {
    color: "#005F56", // Peacock Green
    fontSize: "15px",
    fontWeight: "600",
    textDecoration: "none",
};

const divider = {
    borderColor: "#edf2f7",
    margin: "0",
};

const messageBox = {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    border: "1px solid #e2e8f0",
    borderLeft: "5px solid #FF6B00", // Orange accent border
    padding: "20px",
};

const messageText = {
    color: "#2d3748",
    fontSize: "15px",
    lineHeight: "24px",
    margin: "0",
};

const buttonContainer = {
    textAlign: "center",
    marginTop: "35px",
};

const button = {
    backgroundColor: "#FF6B00", // Orange Button
    borderRadius: "6px",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    textDecoration: "none",
    textAlign: "center",
    display: "inline-block",
    padding: "14px 35px",
};

const footerDivider = {
    borderColor: "#e2e8f0",
    margin: "0",
};

const footer = {
    backgroundColor: "#f7faf9",
    padding: "40px",
    textAlign: "center",
};

const footerText = {
    color: "#005F56",
    fontSize: "15px",
    fontWeight: "bold",
    margin: "0 0 10px",
};

const footerSubtext = {
    color: "#718096",
    fontSize: "12px",
    lineHeight: "18px",
    margin: "0 0 20px",
};

const socialRow = {
    width: "180px",
    margin: "0 auto",
};

const socialCol = {
    padding: "0 5px",
};

const footerLink = {
    color: "#FF6B00", // Orange
    fontSize: "12px",
    fontWeight: "bold",
    textDecoration: "none",
};