import React, { useState } from "react";
import { Col, Form, InputGroup, Dropdown } from "react-bootstrap";

export const EditPolicy = (props) => {
  const parentRow = props.location?.state;

  const [formData, setFormData] = useState({});

  const fuelTypeChange = (item) => {};

  const vechileSegmentChange = (item) => {};

  const incomeGroupChange = (item) => {};

  const customerRegionChange = (irem) => {};

  return (
    <div className="edit-policy">
      <div className="edit-header-row">
        <div className="user-policy-details">
          {`Edit Policy For Customer Id: ${parentRow.customer_id}`}
        </div>
        <div className="action-row">
          <button className="btn btn-warning mr-4">Discard Changes</button>
          <button className="btn btn-success">Save Changes</button>
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
                value={formData.date_of_purchase}
              />
            </Form.Group>
            <Form.Group as={Col} xs="12" sm="12" md="4" lg="4" xl="4">
              <Form.Label>Customer ID</Form.Label>
              <Form.Control disabled type="text" value={formData.customer_id} />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} xs="12" sm="12" md="4" lg="4" xl="4">
              <Form.Label>Policy Premium</Form.Label>
              <InputGroup>
                <InputGroup.Text className="no-action">$</InputGroup.Text>
                <Form.Control disable type="text" value={formData.policy_id} />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} xs="12" sm="12" md="4" lg="4" xl="4">
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
            <Form.Group as={Col} xs="12" sm="12" md="4" lg="4" xl="4">
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
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} xs="12" sm="12" md="4" lg="4" xl="4">
              <Form.Label>Bodily Injury Liability</Form.Label>
              <div className="d-flex">
                <Form.Check
                  className="mr-4"
                  label="0"
                  name="bodily_inj_libl"
                  type="radio"
                />
                <Form.Check label="1" name="bodily_inj_libl" type="radio" />
              </div>
            </Form.Group>
            <Form.Group as={Col} xs="12" sm="12" md="4" lg="4" xl="4">
              <Form.Label>Personal Injury Protection</Form.Label>
              <div className="d-flex">
                <Form.Check
                  className="mr-4"
                  label="0"
                  name="bodily_inj_libl"
                  type="radio"
                />
                <Form.Check label="1" name="bodily_inj_libl" type="radio" />
              </div>
            </Form.Group>
            <Form.Group as={Col} xs="12" sm="12" md="4" lg="4" xl="4">
              <Form.Label>Property Damage Liability</Form.Label>
              <div className="d-flex">
                <Form.Check
                  className="mr-4"
                  label="0"
                  name="bodily_inj_libl"
                  type="radio"
                />
                <Form.Check label="1" name="bodily_inj_libl" type="radio" />
              </div>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} xs="12" sm="12" md="4" lg="4" xl="4">
              <Form.Label>Collision</Form.Label>
              <div className="d-flex">
                <Form.Check
                  className="mr-4"
                  label="0"
                  name="bodily_inj_libl"
                  type="radio"
                />
                <Form.Check label="1" name="bodily_inj_libl" type="radio" />
              </div>
            </Form.Group>
            <Form.Group as={Col} xs="12" sm="12" md="4" lg="4" xl="4">
              <Form.Label>Comprehensive</Form.Label>
              <div className="d-flex">
                <Form.Check
                  className="mr-4"
                  label="0"
                  name="bodily_inj_libl"
                  type="radio"
                />
                <Form.Check label="1" name="bodily_inj_libl" type="radio" />
              </div>
            </Form.Group>
            <Form.Group as={Col} xs="12" sm="12" md="4" lg="4" xl="4">
              <Form.Label>Customer Marital Status</Form.Label>
              <div className="d-flex">
                <Form.Check
                  className="mr-4"
                  label="0"
                  name="bodily_inj_libl"
                  type="radio"
                />
                <Form.Check label="1" name="bodily_inj_libl" type="radio" />
              </div>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} xs="12" sm="12" md="4" lg="4" xl="4">
              <Form.Label>Customer Gender</Form.Label>
              <div className="d-flex">
                <Form.Check
                  className="mr-4"
                  label="0"
                  name="bodily_inj_libl"
                  type="radio"
                />
                <Form.Check label="1" name="bodily_inj_libl" type="radio" />
              </div>
            </Form.Group>
            <Form.Group as={Col} xs="12" sm="12" md="4" lg="4" xl="4">
              <Form.Label>Customer Income Group</Form.Label>
              <Dropdown className="form-ddn">
                <Dropdown.Toggle className="ddn-text">
                  {formData.customer_Income_group}
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
            <Form.Group as={Col} xs="12" sm="12" md="4" lg="4" xl="4">
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
  );
};

const fuelTypeList = ["CNG", "Diesel", "Petrol"];
const vechileSegmentList = ["A", "B", "C"];
const incomeGroupList = ["0- $25K", "$25-$70K", ">$70K"];
const customerRegionList = ["North,East,South,West"];
