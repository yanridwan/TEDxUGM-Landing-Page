import { educationOptions, understandGoalsOptions, commitmentFeeOptions, ticketTypeOptions } from "./RegistrationFormOptions";

const biodataInputTextForms = [
  {
    id: "email",
    label: "Email address",
    isRequired: true,
    type: "text",
    textType: "email"
  }, {
    id: "full-name",
    label: "Please tell us your full name",
    isRequired: true,
    type: "text",
    textType: "text"
  }, {
    id: "nick-name",
    label: "Please tell us your nick name",
    isRequired: true,
    type: "text",
    textType: "text"
  }, {
    id: "phone",
    label: "Tell us your WhatsApp number",
    isRequired: true,
    type: "text",
    textType: "tel"
  }, {
    id: "institution",
    label: "What institution do you come from?",
    desc: "Please describe your school/university name clearly. For example, don't write TELADAN or UGM, instead write SMAN 1 Yogyakarta or Universitas Gadjah Mada",
    isRequired: true,
    type: "text",
    textType: "text"
  }, {
    id: "latest-education",
    label: "What is your latest education status?",
    isRequired: true,
    type: "radio",
    options: educationOptions
  }, {
    id: "semester",
    label: "If you are an undergraduate student, tell us what semester you are currently in",
    isRequired: false,
    type: "text",
    textType: "text"
  },
];

const tedxRelatedForms = [
  {
    id: "reason-join",
    label: "Why do you want to join TEDxUGM 2022?",
    isRequired: true,
    type: "textarea"
  }, {
    id: "expectation-event",
    label: "What are your expectations towards the event?",
    isRequired: true,
    type: "textarea"
  }, {
    id: "expectation-speaker",
    label: "What are your expectations for the speakers?",
    isRequired: true,
    type: "textarea"
  }, {
    id: "understand-goals",
    label: "Do you understand the goals of TED talks and TEDx talks alike?",
    isRequired: true,
    type: "radio",
    options: understandGoalsOptions
  }, {
    id: "goals-explanation",
    label: "Can you please explain how you can participate as a TEDxUGM attendees in realizing the aforementioned goals?",
    isRequired: true,
    type: "textarea"
  }, {
    id: "commitment-fee",
    label: "If you are selected to be one of our attendees, are you willing to pay the required fee of Rp 150.000,00 between 21 and 27 May 2022?",
    desc: "Further information on the payment will be sent via email after the selection process",
    isRequired: true,
    type: "radio",
    options: commitmentFeeOptions
  }, {
    id: "ticket-type",
    label: "Which type of ticket do you want?",
    isRequired: true,
    type: "radio",
    options: ticketTypeOptions
  }, {
    id: "bundle-name",
    label: "If you choose bundling ticket, specify your friend's full name",
    desc: "Make sure that your friends also registering themself on tedxugm.com. Please input '-' if you choose Regular.",
    isRequired: true,
    type: "text",
    textType: "text"
  },  {
    id: "linkedin",
    label: "If you have LinkedIn account, please write it down here",
    isRequired: false,
    type: "text",
    textType: "text"
  }
];

export { biodataInputTextForms, tedxRelatedForms };