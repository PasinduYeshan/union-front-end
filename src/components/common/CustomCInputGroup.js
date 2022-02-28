import React from "react";

import {
  CFormFeedback,
  CFormLabel,
  CFormInput,
  CFormTextarea,
  CCol,
  CFormSelect,
} from "@coreui/react";

import CIcon from "@coreui/icons-react";
import { cilPlus } from "@coreui/icons";

// Custom form input group component
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
  uppercase = false,
}) {
  return (
    <>
      <CCol className="mb-3" xs={12} md={mdSize}>
        <CFormLabel
          htmlFor={name}
          className={uppercase ? "uppercase" : ""}
        >{`${label}${required ? "*" : ""}`}</CFormLabel>
        <CFormInput
          type={type}
          className="!bg-white"
          readOnly={readOnly}
          id={name}
          name={name}
          onChange={onChange}
          value={value}
          // required={required}
          invalid={error ? true : false}
          placeholder={placeholder}
          multiple={multiple}
        />
        <CFormFeedback invalid>{error}</CFormFeedback>
      </CCol>
    </>
  );
}

// Custom form input with add button group component
export function CustomCFormAddInputGroup({
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
  uppercase = false,
}) {
  return (
    <>
      <CCol className="mb-3" xs={12} md={mdSize}>
        <CFormLabel
          htmlFor={name}
          className={uppercase ? "uppercase" : ""}
        >{`${label}${required ? "*" : ""}`}</CFormLabel>
        <CInputGroup>
          <CFormInput
            type={type}
            className="!bg-white"
            readOnly={readOnly}
            id={name}
            name={name}
            onChange={onChange}
            // required={required}
            invalid={error ? true : false}
            placeholder={placeholder}
            multiple={multiple}
            aria-describedby="button-addon2"
          />
          <CButton
            type="button"
            color="secondary"
            variant="outline"
            id="button-addon2"
          >
            <CIcon icon={cilPlus} size="md" />
            Add
          </CButton>
        </CInputGroup>
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
  uppercase = false,
}) {
  return (
    <>
      <CCol className="mb-3" xs={12} md={mdSize}>
        <CFormLabel
          htmlFor={name}
          className={uppercase ? "uppercase" : ""}
        >{`${label}${required ? "*" : ""}`}</CFormLabel>
        <CFormTextarea
          type={type}
          className="!bg-white"
          readOnly={readOnly}
          id={name}
          name={name}
          onChange={onChange}
          value={value}
          // required
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
  uppercase = false,
}) {
  return (
    <>
      <CCol className="mb-3" xs={12} md={mdSize}>
        <CFormLabel
          htmlFor={name}
          className={uppercase ? "uppercase" : ""}
        >{`${label}${required ? "*" : ""}`}</CFormLabel>
        <CFormInput
          type={type}
          className="!bg-white"
          readOnly={readOnly}
          id={name}
          name={name}
          onChange={onChange}
          // required={required}
          invalid={error ? true : false}
          placeholder={placeholder}
          multiple={multiple}
        />
        <CFormFeedback invalid>{error}</CFormFeedback>
      </CCol>
    </>
  );
}

export function CustomCFormSelectGroup({
  label,
  name,
  placeholder,
  onChange,
  error,
  mdSize = 12,
  required = true,
  uppercase = false,
  options,
  value,
}) {
  return (
    <>
      <CCol className="mb-3" xs={12} md={mdSize}>
        <CFormLabel
          htmlFor={name}
          className={uppercase ? "uppercase" : ""}
        >{`${label}${required ? "*" : ""}`}</CFormLabel>
        <CFormSelect
          name={name}
          value={value}
          onChange={onChange}
          aria-label="Default select example"
        >
          <option>Open this select menu</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </CFormSelect>
        <CFormFeedback invalid>{error}</CFormFeedback>
      </CCol>
    </>
  );
}
