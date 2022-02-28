import React from "react";

import {
  CFormFeedback,
  CFormLabel,
  CFormInput,
  CFormTextarea,
  CCol,
} from "@coreui/react";

export function CustomCFormInputGroup({
  label,
  name,
  placeholder,
  value,
  onChange,
  error,
  readOnly = false,
  mdSize = 12,
  type = "text",
  required = true,
  multiple = true,
}) {
  return (
    <>
      <CCol className="mb-3" xs={12} md={mdSize}>
        <CFormLabel htmlFor={name}>{`${label}${
          required ? "*" : ""
        }`}</CFormLabel>
        <CFormInput
          type={type}
          className="!bg-white"
          readOnly={readOnly}
          id={name}
          name={name}
          onChange={onChange}
          value={value}
          required={required}
          invalid={error ? true : false}
          placeholder={placeholder}
          multiple={multiple}
        />
        <CFormFeedback invalid>{error}</CFormFeedback>
      </CCol>
    </>
  );
}

export function CustomCFormTextAreaGroup({
  label,
  name,
  placeholder,
  value,
  onChange,
  error,
  readOnly = false,
  mdSize = 12,
  type = "text",
  required = true,
}) {
  return (
    <>
      <CCol className="mb-3" xs={12} md={mdSize}>
        <CFormLabel htmlFor={name}>{`${label}${
          required ? "*" : ""
        }`}</CFormLabel>
        <CFormTextarea
          type={type}
          className="!bg-white"
          readOnly={readOnly}
          id={name}
          name={name}
          onChange={onChange}
          value={value}
          required
          invalid={error ? true : false}
          placeholder={placeholder}
          rows="4"
          required={required}
        />
        <CFormFeedback invalid>{error}</CFormFeedback>
      </CCol>
    </>
  );
}

export function CustomCFormFilesGroup({
  label,
  name,
  placeholder,
  onChange,
  error,
  readOnly = false,
  mdSize = 12,
  type = "file",
  required = true,
  multiple = true,
}) {
  return (
    <>
      <CCol className="mb-3" xs={12} md={mdSize}>
        <CFormLabel htmlFor={name}>{`${label}${
          required ? "*" : ""
        }`}</CFormLabel>
        <CFormInput
          type={type}
          className="!bg-white"
          readOnly={readOnly}
          id={name}
          name={name}
          onChange={onChange}
          required={required}
          invalid={error ? true : false}
          placeholder={placeholder}
          multiple={multiple}
        />
        <CFormFeedback invalid>{error}</CFormFeedback>
      </CCol>
    </>
  );
}
