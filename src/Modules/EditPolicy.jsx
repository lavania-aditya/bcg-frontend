import React, { useState } from "react";
import { Col, Form, InputGroup, Dropdown, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import moment from "moment";
import { toast } from "react-toastify";
import { PoliciesService } from "../Services/PoliciesService";
import { reject } from "q";
import { resolve } from "q";

export const EditPolicy = (props) => {
  const parentRow = props.location?.state;

  const dispatch = useDispatch();

  const [formData, setFormData] = useState(parentRow);
  const [buttonSpinner, setButtonSpinner] = useState(false);

  const policyPermiumChange = (e) => {
    let val = e.target.value;

    if (val) {
      if (/^\d+$/.test(val) === false) {
        val = val.replace(/[^\d]/g, "");
      }
      if (val.length > 1000000) {
        let a = val.replace(/[^\d]/g, "");
        val = a.substring(0, val.length - 1);
      }
    }

    let newFormData = { ...formData };
    newFormData.premium = val;
    setFormData(newFormData);
  };

  const fuelTypeChange = (item) => {
    let newFormData = { ...formData };
    newFormData.fuel = item;
    setFormData(newFormData);
  };

  const vechileSegmentChange = (item) => {
    let newFormData = { ...formData };
    newFormData.vechile_segment = item;
    setFormData(newFormData);
  };

  const customerBodilyInjuryChange = (type) => {
    let newFormData = { ...formData };
    newFormData.bodily_injury_liability = type;
    setFormData(newFormData);
  };

  const customerPersonalInjuryChange = (type) => {
    let newFormData = { ...formData };
    newFormData.personal_injury_protection = type;
    setFormData(newFormData);
  };

  const customerDamageLiabilityChange = (type) => {
    let newFormData = { ...formData };
    newFormData.property_damage_liability = type;
    setFormData(newFormData);
  };

  const customerCollisionChange = (type) => {
    let newFormData = { ...formData };
    newFormData.collision = type;
    setFormData(newFormData);
  };

  const customerComprehensiveChange = (type) => {
    let newFormData = { ...formData };
    newFormData.comprehensive = type;
    setFormData(newFormData);
  };

  const customerMaritialChange = (type) => {
    let newFormData = { ...formData };
    newFormData.customer_marital_status = type;
    setFormData(newFormData);
  };

  const customerGenderChange = (type) => {
    let newFormData = { ...formData };
    newFormData.customer_gender = type;
    setFormData(newFormData);
  };

  const incomeGroupChange = (item) => {
    let newFormData = { ...formData };
    newFormData.customer_income_group = item;
    setFormData(newFormData);
  };

  const customerRegionChange = (item) => {
    let newFormData = { ...formData };
    newFormData.customer_region = item;
    setFormData(newFormData);
  };

  const handleDiscard = (e) => {
    e.stopPropagation();
    e.preventDefault();

    setFormData(parentRow);
  };

  const handleSave = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (!formData.policy_id) {
      toast.error("Invalid Policy Id");
      return;
    }
    if (!formData.date_of_purchase) {
      toast.error("Invalid Date of Purchase");
      return;
    }
    if (!formData.customer_id) {
      toast.error("Invalid Customer Id");
      return;
    }
    if (!formData.premium) {
      toast.error("Invalid Policy Premium");
      return;
    }
    if (formData.premium < 0) {
      toast.error("Policy Premium Must be Grater than zero");
      return;
    }
    if (!formData.fuel) {
      toast.error("Invalid Fuel Type");
      return;
    }
    if (!formData.vechile_segment) {
      toast.error("Invalid Vechile Segment");
      return;
    }
    if (
      !(
        formData.bodily_injury_liability === 0 ||
        formData.bodily_injury_liability === 1
      )
    ) {
      toast.error("Invalid Bodily Injury Liability");
      return;
    }
    if (
      !(
        formData.personal_injury_protection === 0 ||
        formData.personal_injury_protection === 1
      )
    ) {
      toast.error("Invalid Personal Injury Protection");
      return;
    }
    if (
      !(
        formData.property_damage_liability === 0 ||
        formData.property_damage_liability === 1
      )
    ) {
      toast.error("Invalid Property Damage Liability");
      return;
    }
    if (!(formData.collision === 0 || formData.collision === 1)) {
      toast.error("Invalid Collision");
      return;
    }
    if (!(formData.comprehensive === 0 || formData.comprehensive === 1)) {
      toast.error("Invalid Comprehensive");
      return;
    }

    if (
      !(
        formData.customer_marital_status === 0 ||
        formData.customer_marital_status === 1
      )
    ) {
      toast.error("Invalid Customer Marital Status");
      return;
    }

    if (
      !(
        formData.customer_gender === "Male" ||
        formData.customer_gender === "Female"
      )
    ) {
      toast.error("Invalid Customer Gender");
      return;
    }
    if (!formData.customer_income_group) {
      toast.error("Invalid Customer Income Group");
      return;
    }
    if (!formData.customer_region) {
      toast.error("Invalid Customer Region");
      return;
    }

    setButtonSpinner(true);
    PoliciesService.UpdateSinglePolicy(formData)
      .then((response) => {
        let apiResult = response?.data;
        if (apiResult.result === "success") {
          toast.success("Policy Detail Updated Successfully");
          dispatch({ type: "UPDATE_POLICY", payload: formData });
        } else {
          toast.error(`${apiResult.message}`);
        }
        setButtonSpinner(false);
        resolve();
      })
      .catch((err) => {
        setButtonSpinner(false);
        toast.error(`Server Error: ${err}`);
        reject();
      });
  };

  return (
    Object.keys(formData).length > 0 && (
      <div className="edit-policy">
        <div className="edit-header-row">
          <div className="user-policy-details">
            {`Edit Policy For Customer Id: ${formData.customer_id}`}
          </div>
          <div className="action-row">
            <button
              className={
                buttonSpinner
                  ? "btn btn-success diasble mr-4"
                  : "btn btn-success mr-4"
              }
              onClick={(e) => handleSave(e)}
            >
              {buttonSpinner && (
                <Spinner
                  className="mr-2"
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              )}
              Save Changes
            </button>

            <button
              className="btn btn-warning"
              onClick={(e) => handleDiscard(e)}
            >
              Discard Changes
            </button>
          </div>
        </div>

        <div className="edit-policy-form">
          <Form>
            <Form.Row>
              <Form.Group as={Col} xs="12" sm="12" md="4" lg="4" xl="4">
                <Form.Label>Policy ID</Form.Label>
                <Form.Control disabled type="text" value={formData.policy_id} />
              </Form.Group>
              <Form.Group as={Col} xs="12" sm="12" md="4" lg="4" xl="4">
                <Form.Label>Date Of Purchase</Form.Label>
                <Form.Control
                  disabled
                  type="text"
                  value={moment(formData.date_of_purchase, "MM/DD/YYYY").format(
                    "dddd, MMMM Do YYYY"
                  )}
                />
              </Form.Group>

              <Form.Group as={Col} xs="12" sm="12" md="4" lg="4" xl="4">
                <Form.Label>Customer ID</Form.Label>
                <Form.Control
                  disabled
                  type="text"
                  value={formData.customer_id}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} xs="12" sm="12" md="3" lg="3" xl="3">
                <Form.Label>Policy Premium</Form.Label>
                <InputGroup>
                  <InputGroup.Text className="no-action">$</InputGroup.Text>
                  <Form.Control
                    className="with-input-grp"
                    type="text"
                    value={formData.premium}
                    onChange={(e) => policyPermiumChange(e)}
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col} xs="12" sm="12" md="3" lg="3" xl="3">
                <Form.Label>Fuel Type</Form.Label>
                <Dropdown className="form-ddn">
                  <Dropdown.Toggle className="ddn-text">
                    {formData.fuel}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {fuelTypeList.map((item, idx) => (
                      <Dropdown.Item
                        key={idx}
                        onClick={() => fuelTypeChange(item)}
                      >
                        {item}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Form.Group>

              <Form.Group as={Col} xs="12" sm="12" md="3" lg="3" xl="3">
                <Form.Label>Vechile Segment</Form.Label>
                <Dropdown className="form-ddn">
                  <Dropdown.Toggle className="ddn-text">
                    {formData.vechile_segment}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {vechileSegmentList.map((item, idx) => (
                      <Dropdown.Item
                        key={idx}
                        onClick={() => vechileSegmentChange(item)}
                      >
                        {item}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Form.Group>

              <Form.Group as={Col} xs="12" sm="12" md="3" lg="3" xl="3">
                <Form.Label>Bodily Injury Liability</Form.Label>
                <div className="radio-div">
                  <Form.Check
                    label="0"
                    name="bodily_inj_libl"
                    type="radio"
                    checked={formData.bodily_injury_liability === 0}
                    onChange={() => customerBodilyInjuryChange(0)}
                  />
                  <Form.Check
                    label="1"
                    name="bodily_inj_libl"
                    type="radio"
                    checked={formData.bodily_injury_liability === 1}
                    onChange={() => customerBodilyInjuryChange(1)}
                  />
                </div>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} xs="12" sm="12" md="3" lg="3" xl="3">
                <Form.Label>Personal Injury Protection</Form.Label>
                <div className="radio-div">
                  <Form.Check
                    label="0"
                    name="personal_inj_protec"
                    type="radio"
                    checked={formData.personal_injury_protection === 0}
                    onChange={() => customerPersonalInjuryChange(0)}
                  />
                  <Form.Check
                    label="1"
                    name="personal_inj_protec"
                    type="radio"
                    checked={formData.personal_injury_protection === 1}
                    onChange={() => customerPersonalInjuryChange(1)}
                  />
                </div>
              </Form.Group>
              <Form.Group as={Col} xs="12" sm="12" md="3" lg="3" xl="3">
                <Form.Label>Property Damage Liability</Form.Label>
                <div className="radio-div">
                  <Form.Check
                    label="0"
                    name="property_dmg_libl"
                    type="radio"
                    checked={formData.property_damage_liability === 0}
                    onChange={() => customerDamageLiabilityChange(0)}
                  />
                  <Form.Check
                    label="1"
                    name="property_dmg_libl"
                    type="radio"
                    checked={formData.property_damage_liability === 1}
                    onChange={() => customerDamageLiabilityChange(1)}
                  />
                </div>
              </Form.Group>

              <Form.Group as={Col} xs="12" sm="12" md="3" lg="3" xl="3">
                <Form.Label>Collision</Form.Label>
                <div className="radio-div">
                  <Form.Check
                    label="0"
                    name="collision"
                    type="radio"
                    checked={formData.collision === 0}
                    onChange={() => customerCollisionChange(0)}
                  />
                  <Form.Check
                    label="1"
                    name="collision"
                    type="radio"
                    checked={formData.collision === 1}
                    onChange={() => customerCollisionChange(1)}
                  />
                </div>
              </Form.Group>

              <Form.Group as={Col} xs="12" sm="12" md="3" lg="3" xl="3">
                <Form.Label>Comprehensive</Form.Label>
                <div className="radio-div">
                  <Form.Check
                    label="0"
                    name="comprehensive"
                    type="radio"
                    checked={formData.comprehensive === 0}
                    onChange={() => customerComprehensiveChange(0)}
                  />
                  <Form.Check
                    label="1"
                    name="comprehensive"
                    type="radio"
                    checked={formData.comprehensive === 1}
                    onChange={() => customerComprehensiveChange(1)}
                  />
                </div>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} xs="12" sm="12" md="3" lg="3" xl="3">
                <Form.Label>Customer Marital Status</Form.Label>
                <div className="radio-div">
                  <Form.Check
                    label="0"
                    name="cust_maritial_status"
                    type="radio"
                    checked={formData.customer_marital_status === 0}
                    onChange={() => customerMaritialChange(0)}
                  />
                  <Form.Check
                    label="1"
                    name="cust_maritial_status"
                    type="radio"
                    checked={formData.customer_marital_status === 1}
                    onChange={() => customerMaritialChange(1)}
                  />
                </div>
              </Form.Group>

              <Form.Group as={Col} xs="12" sm="12" md="3" lg="3" xl="3">
                <Form.Label>Customer Gender</Form.Label>
                <div className="radio-div">
                  <Form.Check
                    label="Male"
                    name="cust_gender"
                    type="radio"
                    checked={formData.customer_gender === "Male"}
                    onChange={() => customerGenderChange("Male")}
                  />
                  <Form.Check
                    label="Female"
                    name="cust_gender"
                    type="radio"
                    checked={formData.customer_gender === "Female"}
                    onChange={() => customerGenderChange("Female")}
                  />
                </div>
              </Form.Group>
              <Form.Group as={Col} xs="12" sm="12" md="3" lg="3" xl="3">
                <Form.Label>Customer Income Group</Form.Label>
                <Dropdown className="form-ddn">
                  <Dropdown.Toggle className="ddn-text">
                    {formData.customer_income_group}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {incomeGroupList.map((item, idx) => (
                      <Dropdown.Item
                        key={idx}
                        onClick={() => incomeGroupChange(item)}
                      >
                        {item}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Form.Group>
              <Form.Group as={Col} xs="12" sm="12" md="3" lg="3" xl="3">
                <Form.Label>Customer Region</Form.Label>
                <Dropdown className="form-ddn">
                  <Dropdown.Toggle className="ddn-text">
                    {formData.customer_region}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {customerRegionList.map((item, idx) => (
                      <Dropdown.Item
                        key={idx}
                        onClick={() => customerRegionChange(item)}
                      >
                        {item}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Form.Group>
            </Form.Row>
          </Form>
        </div>
      </div>
    )
  );
};

const fuelTypeList = ["CNG", "Diesel", "Petrol"];
const vechileSegmentList = ["A", "B", "C"];
const incomeGroupList = ["0- $25K", "$25-$70K", ">$70K"];
const customerRegionList = ["North", "East", "South", "West"];
