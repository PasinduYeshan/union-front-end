/**
 * Joi Schemas
 */

// Joi validation schema
export const personalDetailsSchema = Joi.object({
  fullName: Joi.string().label("Full Name"),
  nameWithInitials: Joi.string().label("Name With Initials"),
  otherName: Joi.optional().label("Other Name"),
  oldNIC: Joi.optional().label("Old NIC"),
  newNIC: Joi.optional().label("New NIC"),
  dob: Joi.date().less("now").required().label("Date of Birth"),
  sex: Joi.string().label("Sex"),
  permanentAddress: Joi.string().label("Permanent Address"),
  mailingAddress: Joi.string().label("Mailing Address"),
  emailAddress: Joi.string()
    .allow("")
    .optional()
    .email({ tlds: { allow: false } })
    .label("Email Address"),
  mobileCN: Joi.string().length(10).regex(/^\d+$/).label("Mobile Number"),
  officeCN: Joi.string()
    .length(10)
    .regex(/^\d+$/)
    .allow("")
    .optional()
    .label("Office Number"),
  homeCN: Joi.string()
    .length(10)
    .regex(/^\d+$/)
    .allow("")
    .optional()
    .label("Home Number"),
  civilStatus: Joi.string().label("Civil Status"),
  nominee: Joi.string().label("Nominee"),
  relationshipOfNominee: Joi.string().label("Relationship of Nominee"),
});

export const familyDetailsSchema = Joi.object({
  //Family details
  spouseName: Joi.any().optional().label("Spouse Name"),
  children: Joi.any().optional().label("Children"),
  fatherName: Joi.any().optional().label("Father Name"),
  motherName: Joi.any().optional().label("Mother Name"),
  fatherInLawName: Joi.any().optional().label("Father In Law Name"),
  motherInLawName: Joi.any().optional().label("Mother In Law Name"),
  childName: Joi.any().optional().label("Child Name"),
});

export const departmentDetailsSchema = Joi.object({
  // Department details
  title: Joi.string().required().label("Title"),
  grade: Joi.string().required().label("Grade"),
  dateOfAppointment: Joi.date()
    .less("now")
    .required()
    .label("Date of Appointment"),
  permanentWorkStation: Joi.string().required().label("Permanent Work Station"),
  presentWorkStation: Joi.string().required().label("Present Work Station"),
  dateOfPension: Joi.string().required().label("Date of Pension"),
  officeOfRegionalAccountant: Joi.string()
    .required()
    .label("Office of the Regional Accountant"),
  paySheetNo: Joi.string().required().label("Pay Sheet No"),
  employeeId: Joi.string().required().label("Employee Id"),
  officeOfDPMG: Joi.string().required().label("Office of the DPMG"),
});

export const memberDetailsSchema = Joi.object({
  // Member details
  membershipNo: Joi.string().required().label("Membership Number"),
  dateOfMembership: Joi.string().required().label("Date of Membership"),
  RDSNumber: Joi.string().required().label("RDS Number"),
  memberOfOtherUnion: Joi.string()
    .allow("Yes", "No")
    .label("Member of Other Union"),
  otherUnions: Joi.any().optional().label("Other Unions"),
  unionName: Joi.string().required().label("Union Name"),

  // Branch details
  branchName: Joi.string(),
});
