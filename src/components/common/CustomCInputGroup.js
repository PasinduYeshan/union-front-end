import React from "react";

import {
  CFormFeedback,
  CFormInput,
  CFormTextarea,
  CFormSelect,
  CInputGroup,
  CButton,
  CFormLabel,
  CTableHeaderCell,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableRow,
  CCol,
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
  inputClassName = "",
}) {
  return (
    <>
      <CCol className="mb-3" xs={12} md={mdSize}>
        <CFormLabel
          htmlFor={name}
          className={uppercase ? "uppercase" : ""}
        >{`${label}${required ? "*" : ""}`}</CFormLabel>
        <CFormInput
          disabled={readOnly}
          type={type}
          className={`!bg-white ${inputClassName}`}
          readOnly={readOnly}
          id={name}
          name={name}
          onChange={onChange}
          // defaultValue={value}
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
  inputClassName = "",
  onAddInputBtnPressed,
  addListName,
  list,
  addBtnLabel = "Add",
  tableHeaders = ["Name"],
  tableRows = ["name"],
  handleChildRemoveBtnPressed,
}) {
  return (
    <>
      <CFormLabel
        htmlFor={name}
        className={uppercase ? "uppercase" : ""}
      >{`${label}${required ? "*" : ""}`}</CFormLabel>
      {!readOnly && (
        <CCol className="mb-3" xs={12} md={mdSize}>
          <CInputGroup>
            <CFormInput
              type={type}
              className={`!bg-white ${inputClassName}`}
              readOnly={readOnly}
              id={name}
              name={name}
              onChange={onChange}
              value={value}
              // required={required}
              invalid={error ? true : false}
              placeholder={placeholder}
              multiple={multiple}
              aria-describedby="button-addon2"
            />
            <CButton
              name={addListName}
              type="button"
              color="secondary"
              variant="outline"
              id="button-addon2"
              onClick={(e) => onAddInputBtnPressed({ e, tempFieldName: name })}
            >
              {/* <CIcon icon={cilPlus} size="sm" className="mx-1"/> */}
              {addBtnLabel}
            </CButton>
          </CInputGroup>
          <CFormFeedback invalid>{error}</CFormFeedback>
        </CCol>
      )}

      {list.length > 0 && (
        <CTable>
          <CTableHead>
            <CTableRow>
              {tableHeaders.map((header, index) => (
                <CTableHeaderCell scope="col" key={index}>
                  {""}
                  {header}
                </CTableHeaderCell>
              ))}
              <CTableHeaderCell scope="col"></CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {list.map((child, index) => (
              <CTableRow key={index}>
                {tableRows.map((row, index) => (
                  <CTableDataCell scope="col" key={index}>
                    {""}
                    {child[row]}
                  </CTableDataCell>
                ))}
                <CTableDataCell>
                  {!readOnly && (
                    <CButton
                      color="danger"
                      variant="ghost"
                      name="childrenRemoveBtn"
                      onClick={(_) =>
                        handleChildRemoveBtnPressed({
                          child,
                          listName: addListName,
                        })
                      }
                    >
                      Remove
                    </CButton>
                  )}
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      )}
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
  inputClassName = "",
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
          className={`!bg-white ${inputClassName}`}
          readOnly={readOnly}
          id={name}
          name={name}
          onChange={onChange}
          value={value}
          invalid={error ? true : false}
          placeholder={placeholder}
          rows="4"
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
  inputClassName = "",
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
          className={`!bg-white ${inputClassName}`}
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
  inputClassName = "",
  options,
  value,
  defaultValue,
}) {
  return (
    <>
      <CCol className="mb-3" xs={12} md={mdSize}>
        <CFormLabel
          htmlFor={name}
          className={uppercase ? "uppercase" : ""}
        >{`${label}${required ? "*" : ""}`}</CFormLabel>
        <CFormSelect
          className={`!bg-white ${inputClassName}`}
          name={name}
          defaultValue={defaultValue}
          onChange={onChange}
          aria-label="Default select example"
          invalid={error ? true : false}
          value={value}
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
