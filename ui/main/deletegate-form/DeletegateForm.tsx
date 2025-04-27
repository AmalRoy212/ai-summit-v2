"use client";

import React, { useState } from "react";
import "antd/dist/reset.css";
import {
  Form,
  Input,
  Button,
  Select,
  Checkbox,
  message,
  Spin,
  CheckboxOptionType,
} from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { validateEmail } from "@/utils/emailValidator";
import sendNotificationMail from "@/utils/emailjs";

const { Option } = Select;

const TPOptions: CheckboxOptionType[] = [
  {
    label: (
      <p>
        By filling up this form, I agree to the above{" "}
        <a className="text-blue-500" href="/terms-conditions">
          Terms and Conditions
        </a>
        . I officially and formally mark my acceptance to participate at the
        event.
      </p>
    ),
    value: "terms1",
  },
  {
    label:
      "I approve organizers to share the contact information and/or other details filled in this form with its sponsors/partners for marketing purposes.",
    value: "marketingConsent",
  },
  {
    label:
      "(CONSENT) I provide my consent to organizers to send me latest updates via email with information related to their events and activities.",
    value: "emailUpdatesConsent",
  },
  {
    label: (
      <p>
        I agree to the general{" "}
        <a className="text-blue-500" href="/terms-conditions">
          Terms and conditions
        </a>{" "}
        and{" "}
        <a className="text-blue-500" href="/privacy-policy">
          Privacy policy
        </a>
        . of organizers.
      </p>
    ),
    value: "generalTermsPrivacy",
  },
];

export default function DelegateRegistration() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);

  const onFinish = async (values: any) => {
    setLoading(true);

    if (!values.nomination) {
      values.nomination = "nomination not added";
    }

    const ensureFirstLetterCapitalized = (name: string) => {
      if (!name) return name;
      if (name.charAt(0) !== name.charAt(0).toUpperCase()) {
        return name.charAt(0).toUpperCase() + name.slice(1);
      }
      return name;
    };

    if (values.title) {
      values.title = ensureFirstLetterCapitalized(values.title);
    }

    if (values.firstName) {
      values.firstName = ensureFirstLetterCapitalized(values.firstName);
    }

    if (values.lastName) {
      values.lastName = ensureFirstLetterCapitalized(values.lastName);
    }
    if (values.companyName) {
      values.companyName = ensureFirstLetterCapitalized(values.companyName);
    }
    if (values.jobTitle) {
      values.jobTitle = ensureFirstLetterCapitalized(values.jobTitle);
    }

    if (values.firstName && values.lastName) {
      values.fullName = `${values.firstName} ${values.lastName}`;
    }

    const emailParams = {
      firstName: values.firstName,
      email: values.email,
      type: "Delegate",
      link: "https://docs.google.com/spreadsheets/d/1Xh6Km0TuWxBFU9qncjK8Zfl32xRXH4rjEoAEBN72_ug/edit?gid=0#gid=0",
    };

    try {
      const response = await fetch("/api/delegates/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      await sendNotificationMail(emailParams);

      if (response.ok) {
        message.success(
          "Thank you for registering. Please consider this message as confirmation of your registration. Our event steering committee will review your submission, and you will receive an official confirmation email within the next 48 hours.!"
        );

        form.resetFields();
      } else {
        message.error("Error happend while saving your request");
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
    setLoading(false);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.error("Failed:", errorInfo);
  };

  return (
    <div
      className="container md:ml-10 px-4 bg-cover border-[#3b3b3b] py-10 md:0 md:p-10 rounded-2xl bg-slate-200 md:w-2/3"
      style={{
        borderWidth: 1,
        backgroundImage: 'url("images/statics/delegate.jpg")',
      }}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="flex flex-col md:flex-row w-full md:gap-2">
          <Form.Item
            label="Enter Registration Code (If any)"
            className="md:w-1/2 font-bold"
          >
            <Input className="h-[40px]" />
          </Form.Item>

          <Form.Item
            className="md:w-1/2 font-bold"
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please select your title!" }]}
          >
            <Select className="h-[40px]">
              <Option value="mr">Mr.</Option>
              <Option value="mrs">Mrs.</Option>
              <Option value="ms">Ms.</Option>
              <Option value="dr">Dr.</Option>
            </Select>
          </Form.Item>
        </div>

        <div className="flex flex-col md:flex-row w-full md:gap-2">
          <Form.Item
            className="md:w-1/2 font-bold"
            label="First Name"
            name="firstName"
            rules={[
              { required: true, message: "Please enter your first name!" },
            ]}
          >
            <Input className="h-[40px]" />
          </Form.Item>

          <Form.Item
            className="md:w-1/2 font-bold"
            label="Last Name"
            name="lastName"
            rules={[
              { required: true, message: "Please enter your last name!" },
            ]}
          >
            <Input className="h-[40px]" />
          </Form.Item>
        </div>

        <div className="flex flex-col md:flex-row w-full md:gap-2">
          <Form.Item
            className="md:w-1/2 font-bold"
            label="Job Title"
            name="jobTitle"
            rules={[
              { required: true, message: "Please input your job title!" },
            ]}
          >
            <Input className="h-[40px]" />
          </Form.Item>

          <Form.Item
            className="md:w-1/2 font-bold"
            label="Company Name"
            name="companyName"
            rules={[
              { required: true, message: "Please input your company name!" },
            ]}
          >
            <Input className="h-[40px]" />
          </Form.Item>
        </div>

        <div className="flex flex-col md:flex-row w-full md:gap-2">
          <Form.Item
            className="md:w-1/2 font-bold"
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email!" },
              {
                validator: (_, value) => {
                  const validationResult = validateEmail(value);
                  if (validationResult) {
                    return Promise.reject(new Error(validationResult));
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Input className="h-[40px]" />
          </Form.Item>

          <Form.Item
            className="md:w-1/2 font-bold"
            label="Mobile"
            name="mobile"
            rules={[
              { required: true, message: "Please input your mobile number!" },
              {
                validator: (_, value) => {
                  if (!value || /^[0-9]*$/.test(value)) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Mobile number must contain only numbers!")
                  );
                },
              },
            ]}
          >
            <Input
              className="h-[40px]"
              onChange={(e) => {
                const { value } = e.target;
                if (!/^[0-9]*$/.test(value)) {
                  e.target.value = value.replace(/\D/g, "");
                }
              }}
            />
          </Form.Item>
        </div>

        <div className="flex flex-col md:flex-row w-full md:gap-2">
          <Form.Item
            className="md:w-1/2 font-bold"
            label="Industry"
            name="industry"
            rules={[
              { required: true, message: "Please select your indusrty!" },
            ]}
          >
            <Select className="h-[40px]">
              <Option value="Oil and Gas">Oil and Gas</Option>
              <Option value="Telecommunications">Telecommunications</Option>
              <Option value="Banking">Banking</Option>
              <Option value="Insurance">Insurance</Option>
              <Option value="Manufacturing">Manufacturing</Option>
              <Option value="Retail">Retail</Option>
              <Option value="Healthcare">Healthcare</Option>
              <Option value="Government and Public Sector">
                Government and Public Sector
              </Option>
              <Option value="Defence & Space">Defence & Space</Option>
              <Option value="Utilities">Utilities</Option>
              <Option value="Transportation and Logistics">
                Transportation and Logistics
              </Option>
              <Option value="Real Estate and Construction">
                Real Estate and Construction
              </Option>
              <Option value="Education">Education</Option>
              <Option value="Financial Services">Financial Services</Option>
              <Option value="E-commerce">E-commerce</Option>
              <Option value="Aviation">Aviation</Option>
            </Select>
          </Form.Item>

          <Form.Item
            className="md:w-1/2 font-bold"
            label="Country"
            name="country"
            rules={[
              { required: true, message: "Please enter your country name" },
            ]}
          >
            <Input className="h-[40px]" />
          </Form.Item>
        </div>

        <div className="flex flex-col md:flex-row w-full md:gap-2">
          <Form.Item
            className="md:w-1/2 font-bold"
            label="What is your role/authority while dealing with solution providers for your organisation? *"
            name="role"
            rules={[
              {
                required: true,
                message: "Please select what is role you have!",
              },
            ]}
          >
            <Select className="h-[40px]">
              <Option value="Final decision maker">Final decision maker</Option>
              <Option value="One of the final decision maker">
              One of the final decision maker
              </Option>
              <Option value="I refer and influence the decision">
                I refer and influence the decision
              </Option>
              <Option value="I am not involved at all">
                I am not involved at all
              </Option>
            </Select>
          </Form.Item>

          <Form.Item
            className="md:w-1/2 font-bold"
            label="Are you looking for any of the following solutions? Select one of the options below?"
            name="solution"
            rules={[
              {
                required: true,
                message: "Please select what you looking for!",
              },
            ]}
          >
            <Select className="h-[40px]">
              <Option value="API-led Connectivity">API-led Connectivity</Option>
              <Option value="iPaaS (Integration Platform as a Service)">
                iPaaS (Integration Platform as a Service)
              </Option>
              <Option value="RESTful APIs">RESTful APIs</Option>
              <Option value="Webhooks">Webhooks</Option>
              <Option value="ETL (Extract, Transform, Load)">
                ETL (Extract, Transform, Load)
              </Option>
              <Option value="Data Integration Platforms">
                Data Integration Platforms
              </Option>
              <Option value="Data Pipelines">Data Pipelines</Option>
              <Option value="Message Queuing">Message Queuing</Option>
              <Option value="Data Lake Integration">
                Data Lake Integration
              </Option>
              <Option value="Data Warehousing">Data Warehousing</Option>
              <Option value="ESB (Enterprise Service Bus)">
                ESB (Enterprise Service Bus)
              </Option>
              <Option value="EDI (Electronic Data Interchange)">
                EDI (Electronic Data Interchange)
              </Option>
              <Option value="Robotic Process Automation (RPA)">
                Robotic Process Automation (RPA)
              </Option>
              <Option value="Business Process Automation (BPA)">
                Business Process Automation (BPA)
              </Option>
              <Option value="Workflow Automation">Workflow Automation</Option>
              <Option value="Data Workflow Automation">
                Data Workflow Automation
              </Option>
              <Option value="Data Orchestration Platforms">
                Data Orchestration Platforms
              </Option>
              <Option value="Event-Driven Automation">
                Event-Driven Automation
              </Option>
              <Option value="Intelligent Process Automation (IPA)">
                Intelligent Process Automation (IPA)
              </Option>
              <Option value="DataOps (Data Operations)">
                DataOps (Data Operations)
              </Option>
              <Option value="Event-Driven Architecture (EDA)">
                Event-Driven Architecture (EDA)
              </Option>
              <Option value="Low-Code/No-Code Automation Platforms">
                Low-Code/No-Code Automation Platforms
              </Option>
              <Option value="Machine Learning (ML)">
                Machine Learning (ML)
              </Option>
              <Option value="Natural Language Processing (NLP)">
                Natural Language Processing (NLP)
              </Option>
              <Option value="Predictive Analytics">Predictive Analytics</Option>
              <Option value="Generative AI">Generative AI</Option>
              <Option value="AI-powered Data Cleansing and Transformation">
                AI-powered Data Cleansing and Transformation
              </Option>
              <Option value="Computer Vision">Computer Vision</Option>
              <Option value="Autonomous Data Management">
                Autonomous Data Management
              </Option>
              <Option value="AI-based Data Mining">AI-based Data Mining</Option>
              <Option value="Chatbots/Virtual Assistants">
                Chatbots/Virtual Assistants
              </Option>
              <Option value="AI for Data Synthesis">
                AI for Data Synthesis
              </Option>
              <Option value="Data Virtualization">Data Virtualization</Option>
              <Option value="Master Data Management (MDM)">
                Master Data Management (MDM)
              </Option>
              <Option value="Data Integration">Data Integration</Option>
              <Option value="Data Cataloging">Data Cataloging</Option>
              <Option value="Data Governance">Data Governance</Option>
              <Option value="Data Quality Management">
                Data Quality Management
              </Option>
              <Option value="Data Lakes">Data Lakes</Option>
              <Option value="Metadata Management">Metadata Management</Option>
              <Option value="Cloud Data Platforms">Cloud Data Platforms</Option>
              <Option value="Data Replication">Data Replication</Option>
              <Option value="Data Transformation">Data Transformation</Option>
              <Option value="Data Fabric">Data Fabric</Option>
              <Option value="Data Virtualization Platforms">
                Data Virtualization Platforms
              </Option>
              <Option value="Data Analytics">Data Analytics</Option>
              <Option value="Data Visualization">Data Visualization</Option>
              <Option value="Self-Service BI">Self-Service BI</Option>
              <Option value="Embedded Analytics">Embedded Analytics</Option>
              <Option value="Dashboards and Reporting">
                Dashboards and Reporting
              </Option>
              <Option value="Data Discovery">Data Discovery</Option>
              <Option value="Mobile BI">Mobile BI</Option>
              <Option value="Advanced Analytics">Advanced Analytics</Option>
              <Option value="Real-Time Analytics">Real-Time Analytics</Option>
              <Option value="Collaborative BI">Collaborative BI</Option>
              <Option value="OLAP (Online Analytical Processing)">
                OLAP (Online Analytical Processing)
              </Option>
              <Option value="Data Warehousing for BI">
                Data Warehousing for BI
              </Option>
            </Select>
          </Form.Item>
        </div>

        <Form.Item
          className="font-bold"
          label="Number of employees"
          name="nos_employees"
          rules={[
            { required: true, message: "Please select number of employe!" },
          ]}
        >
          <Select className="h-[40px]">
            <Option value="0-100">0 to 100</Option>
            <Option value="100-500">100 to 500</Option>
            <Option value="500-1000">500 to 1000</Option>
            <Option value="1000-10,000">1000 to 10,000</Option>
            <Option value="10,000 above">10,000 above</Option>
          </Select>
        </Form.Item>

        <div className="flex flex-col md:flex-row w-full md:gap-2">
          {/* Budjet, Period */}
          <Form.Item
            className="md:w-1/2 font-bold"
            label="How much funding has been designated for the implementation of these technological?"
            name="budget"
            rules={[
              {
                required: true,
                message: "Please select the budjet you planning for the event!",
              },
            ]}
          >
            <Select className="h-[40px]">
              <Option value="$50,000 - $100,000">$50,000 - $100,000</Option>
              <Option value="$100,000 - $200,000">$100,000 - $200,000</Option>
              <Option value="$50,000 - $100,000">$200,000 - $300,000</Option>
              <Option value="$50,000 - $100,000">$300,000 - $400,000</Option>
              <Option value="$50,000 - $100,000">$400,000 - $500,000</Option>
              <Option value="$50,000 - $100,000">$500,000 - $600,000</Option>
              <Option value="$50,000 - $100,000">$600,000 - $700,000</Option>
              <Option value="$50,000 - $100,000">$700,000 - $800,000</Option>
              <Option value="$50,000 - $100,000">$800,000 - $900,000</Option>
              <Option value="$50,000 - $100,000">$900,000 - $1,000,000</Option>
              <Option value="$50,000 - $100,000">$1,000,000 and above</Option>
            </Select>
          </Form.Item>
          <Form.Item
            className="md:w-1/2 font-bold"
            label="When do you anticipate acquiring or rolling out this solution in your implementation plan? "
            name="time_period"
            rules={[
              {
                required: true,
                message: "Please select time period you would like!",
              },
            ]}
          >
            <Select className="h-[40px]">
              <Option value="0 - 1 month">0 - 1 month</Option>
              <Option value="1 - 2 month">1 - 2 month</Option>
              <Option value="2 - 3 month">2 - 3 month</Option>
              <Option value="3 - 4 month">3 - 4 month</Option>
              <Option value="5 - 6 month">5 - 6 month</Option>
            </Select>
          </Form.Item>
        </div>

        <div>
          {/* Nomination */}
          <Form.Item
            label="Nominate/Refer Someone"
            className="md:w-1/2 font-semibold"
          >
            <Input.Group compact>
              <Form.Item
                name={["nomination", "fullName"]}
                noStyle
                // rules={[{ required: true, message: "Full name required!" }]}
              >
                <Input style={{ width: "50%" }} placeholder="Full Name" />
              </Form.Item>
              <Form.Item
                name={["nomination", "email"]}
                noStyle
                // rules={[{ required: true, message: "Email required!" }]}
              >
                <Input style={{ width: "50%" }} placeholder="Email" />
              </Form.Item>
            </Input.Group>
          </Form.Item>
          <Form.Item className="md:w-1/2 font-semibold">
            <Input.Group compact>
              <Form.Item
                name={["nomination", "Company Name"]}
                noStyle
                // rules={[{ required: true, message: "Company name required!" }]}
              >
                <Input style={{ width: "50%" }} placeholder="Company Name" />
              </Form.Item>
              <Form.Item
                name={["nomination", "phone number"]}
                noStyle
                // rules={[{ required: true, message: "phone number required!" }]}
              >
                <Input style={{ width: "50%" }} placeholder="Phone Number" />
              </Form.Item>
            </Input.Group>
          </Form.Item>
          <Form.Item className="md:w-1/2 font-semibold">
            <Input.Group compact>
              <Form.Item
                name={["nomination", "job title"]}
                noStyle
                // rules={[{ required: true, message: "Job title required!" }]}
              >
                <Input style={{ width: "50%" }} placeholder="Job Title" />
              </Form.Item>
            </Input.Group>
          </Form.Item>
        </div>

        {/* Interests */}
        {/* <Form.Item className="font-bold" name="interest" label="I am interested in">
          <Checkbox.Group
            options={[
              "Delegate pass",
              "Sponsor the event",
              "Speak at the event",
            ]}
          />
        </Form.Item> */}

        <Form.Item
          className="font-bold text-[34px]"
          name="confirmation"
          label="Confirmation"
        >
          <Checkbox.Group options={TPOptions} />
        </Form.Item>

        {/* Confirmation */}
        <Form.Item className="w-full flex justify-center">
          <Button
            className="bg-gradient-to-r from-purple-500 to-cyan-500 px-20 mt-10"
            type="primary"
            htmlType="submit"
          >
            {loading ? (
              <Spin
                indicator={
                  <LoadingOutlined spin color="red" style={{ color: "red" }} />
                }
                size="small"
              />
            ) : (
              "Submit"
            )}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
