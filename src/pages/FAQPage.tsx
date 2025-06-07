import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQPage = () => {
  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All transactions are secure and encrypted.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Standard shipping typically takes 3-5 business days. Express shipping (1-2 business days) is available for an additional fee. International shipping may take 7-14 business days depending on the destination.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for all items in their original condition with tags attached. Returns are free for items over $50. For items under $50, a small return shipping fee may apply.",
    },
    {
      question: "How do I track my order?",
      answer:
        "Once your order ships, you will receive a tracking number via email. You can also track your order by logging into your account and visiting the Orders page.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location. You can view shipping rates during checkout.",
    },
    {
      question: "How do I change or cancel my order?",
      answer:
        "Orders can be modified or cancelled within 1 hour of placement. Please contact our customer service team immediately for assistance.",
    },
    {
      question: "What sizes do you offer?",
      answer:
        "We offer sizes XS to XXL for most items. Each product page includes a detailed size guide to help you find the perfect fit.",
    },
    {
      question: "How do I care for my clothes?",
      answer:
        "Care instructions are provided on the label of each garment. Generally, we recommend washing in cold water and air drying to maintain the quality of your clothes.",
    },
  ];

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Box textAlign="center" mb={6}>
        <Typography variant="h2" component="h1" gutterBottom>
          Frequently Asked Questions
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Find answers to common questions about our store, products, and
          services
        </Typography>
      </Box>

      <Box>
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            sx={{
              mb: 2,
              "&:before": {
                display: "none",
              },
              boxShadow: "none",
              border: "1px solid",
              borderColor: "divider",
              borderRadius: "8px !important",
              "&:not(:last-child)": {
                mb: 2,
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                "&:hover": {
                  backgroundColor: "action.hover",
                },
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 500 }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary">{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      <Box textAlign="center" mt={6}>
        <Typography variant="h6" gutterBottom>
          Still have questions?
        </Typography>
        <Typography color="text.secondary">
          Contact our customer service team at support@clothingstore.com or call
          us at (555) 123-4567
        </Typography>
      </Box>
    </Container>
  );
};

export default FAQPage;
