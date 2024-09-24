"use client";

import React, { useState } from "react";
import "antd/dist/reset.css";
import { Form, Input, Button, Select, Checkbox, message, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const { Option } = Select;

export default function DelegateRegistration() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);

  const onFinish = async (values: any) => {
    setLoading(true)

    // Check if nomination field is empty and set a default value
    if (!values.nomination) {
      values.nomination = "nomination not added";
    }

    // Check if the first letter is already capital, if not, capitalize it
    const ensureFirstLetterCapitalized = (name: string) => {
      if (!name) return name; // Return if name is undefined or null
      // If the first letter is not uppercase, capitalize it
      if (name.charAt(0) !== name.charAt(0).toUpperCase()) {
        return name.charAt(0).toUpperCase() + name.slice(1);
      }
      return name; // Return unchanged if already capitalized
    };

    // Ensure first letter of firstName is capitalized
    if (values.firstName) {
      values.firstName = ensureFirstLetterCapitalized(values.firstName);
    }

    // Ensure first letter of lastName is capitalized
    if (values.lastName) {
      values.lastName = ensureFirstLetterCapitalized(values.lastName);
    }
    if (values.companyName) {
      values.companyName = ensureFirstLetterCapitalized(values.companyName);
    }
    if (values.jobTitle) {
      values.jobTitle = ensureFirstLetterCapitalized(values.jobTitle);
    }

    // Combine firstName and lastName into fullName
    if (values.firstName && values.lastName) {
      values.fullName = `${values.firstName} ${values.lastName}`;
    }

    try {
      // Make a POST request to the API
      const response = await fetch("/api/delegates/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values), // Convert form values to JSON string
      });

      // Check if the request was successful
      if (response.ok) {
        await response.json();
        message.success("Form submitted successfully!");
        form.resetFields();
        // You can display a success message or handle it as needed
      } else {
        const error = await response.json();
        message.error("Error happend while saving your request");
        // You can display an error message or handle it as needed
      }
    } catch (error) {
      console.error("Request failed:", error);
      // Handle network or request errors
    }
    setLoading(false)
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
          {/* Delegate Pass */}
          <Form.Item label="Delegate Pass" className="md:w-1/2 font-bold">
            <Input placeholder="Enter delegate pass" className="h-[40px]" />
          </Form.Item>

          {/* Title, First Name, Last Name */}
          <Form.Item
            className="md:w-1/2 font-bold"
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please select your title!" }]}
          >
            <Select className="h-[40px]" placeholder="Select a title">
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
            <Input placeholder="first name" className="h-[40px]" />
          </Form.Item>

          <Form.Item
            className="md:w-1/2 font-bold"
            label="Last Name"
            name="lastName"
            rules={[
              { required: true, message: "Please enter your last name!" },
            ]}
          >
            <Input className="h-[40px]" placeholder="last name" />
          </Form.Item>
        </div>

        <div className="flex flex-col md:flex-row w-full md:gap-2">
          {/* Job Title, Company Name */}
          <Form.Item
            className="md:w-1/2 font-bold"
            label="Job Title"
            name="jobTitle"
            rules={[
              { required: true, message: "Please input your job title!" },
            ]}
          >
            <Input className="h-[40px]" placeholder="job titile" />
          </Form.Item>

          <Form.Item
            className="md:w-1/2 font-bold"
            label="Company Name"
            name="companyName"
            rules={[
              { required: true, message: "Please input your company name!" },
            ]}
          >
            <Input className="h-[40px]" placeholder="company name" />
          </Form.Item>
        </div>

        <div className="flex flex-col md:flex-row w-full md:gap-2">
          {/* Email, Mobile */}
          <Form.Item
            className="md:w-1/2 font-bold"
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input className="h-[40px]" placeholder="email" />
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
                    return Promise.resolve(); // valid input, resolve the promise
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
              placeholder="Mobile"
              onChange={(e) => {
                const { value } = e.target;
                if (!/^[0-9]*$/.test(value)) {
                  e.target.value = value.replace(/\D/g, ""); // Remove any non-digit characters
                }
              }}
            />
          </Form.Item>
        </div>

        <div className="flex flex-col md:flex-row w-full md:gap-2">
          {/* Industry, Country */}
          <Form.Item
            className="md:w-1/2 font-bold"
            label="Industry"
            name="industry"
            rules={[
              { required: true, message: "Please select your indusrty!" },
            ]}
          >
            <Select className="h-[40px]" placeholder="Select a industry">
              <Option value="Software Development">Software Development</Option>
              <Option value="Artifitial Inteligence">
                Artifitial Inteligence
              </Option>
              <Option value="Education">Education</Option>
              <Option value="Agriculture">Agriculture</Option>
            </Select>
          </Form.Item>

          <Form.Item
            className="md:w-1/2 font-bold"
            label="Country"
            name="country"
            rules={[{ required: true, message: "Please select your country!" }]}
          >
            <Select className="h-[40px]" placeholder="Select a country">
              <Option value="india">India</Option>
              <Option value="USA">USA</Option>
              <Option value="UAE">UAE</Option>
              <Option value="EUROP">Europ</Option>
            </Select>
          </Form.Item>
        </div>

        <div className="flex flex-col md:flex-row w-full md:gap-2">
          {/* Number of employ, Solution */}
          {/* <Form.Item
            className="md:w-1/2 font-bold"
            label="Number of employees"
            name="nos_employees"
            rules={[{ required: true, message: "Please select number of employe!" }]}
          >
            <Select className="h-[40px]" placeholder="Select a industry">
              <Option value="0-100">0 to 100</Option>
              <Option value="100-500">100 to 500</Option>
              <Option value="500-1000">500 to 1000</Option>
              <Option value="1000-10,000">1000 to 10,000</Option>
              <Option value="10,000 above">10,000 above</Option>
            </Select>
          </Form.Item> */}
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
            <Select className="h-[40px]" placeholder="Select a role">
              <Option value="Final dicision maker">Final dicision maker</Option>
              <Option value="One of the final dicision maker">
                One of the final dicision maker
              </Option>
              <Option value="I reffer and influence the decision">
                I reffer and influence the decision
              </Option>
              <Option value="Am not involved at all">
                Am not involved at all
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
            <Select
              className="h-[40px]"
              placeholder="Select a solution you looking for"
            >
              <Option value="Wealthtech">Wealthtech</Option>
              <Option value="Edutech">Edutech</Option>
              <Option value="Fintech">Fintech</Option>
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
          <Select className="h-[40px]" placeholder="Select a industry">
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
            <Select className="h-[40px]" placeholder="Select budjet">
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
            <Select className="h-[40px]" placeholder="Select the time period">
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
                <Input style={{ width: "50%" }} placeholder="Full name" />
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
                name={["nomination", "company name"]}
                noStyle
                // rules={[{ required: true, message: "Company name required!" }]}
              >
                <Input style={{ width: "50%" }} placeholder="company name" />
              </Form.Item>
              <Form.Item
                name={["nomination", "phone number"]}
                noStyle
                // rules={[{ required: true, message: "phone number required!" }]}
              >
                <Input style={{ width: "50%" }} placeholder="Phone number" />
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
                <Input style={{ width: "50%" }} placeholder="Job title" />
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
          <Checkbox.Group
            options={[
              " By filling up this form, I agree to the above terms and conditions. I officially and formally mark my acceptance to participate at the event.",
              " I approve organizers to share the contact information and/or other details filled in this form with its sponsors/partners for marketing purposes.",
              "(CONSENT) I provide my consent to organizers to send me latest updates via email with information related to their events and activities. purposes.",
              "I agree to the general Terms and conditions and Privacy policy of organizers.",
            ]}
          />
        </Form.Item>

        {/* Confirmation */}
        <Form.Item className="w-full flex justify-center">
          <Button
            className="bg-gradient-to-r from-purple-500 to-cyan-500 px-20 mt-10"
            type="primary"
            htmlType="submit"
          >
            {loading ? (
              <Spin  indicator={<LoadingOutlined spin color="red" style={{color:"red"}} />} size="small" />
            ) : (
              "Submit"
            )}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
